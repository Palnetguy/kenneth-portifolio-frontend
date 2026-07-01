import 'server-only';
import { cache } from 'react';
import type { Locale } from './i18n';
import type enDict from '@/dictionaries/en.json';
import type enContent from '@/contents/en.json';
import type sharedContent from '@/contents/shared.json';

export type DictionaryType = typeof enDict;
export type ContentLanguageType = typeof enContent;
export type SharedDataType = typeof sharedContent;

type Loader<T> = () => Promise<T>;

const dictionaries: Record<Locale, Loader<DictionaryType>> = {
    en: () => import('@/dictionaries/en.json').then((m) => m.default),
    tr: () => import('@/dictionaries/tr.json').then((m) => m.default),
};

const contents: Record<Locale, Loader<ContentLanguageType>> = {
    en: () => import('@/contents/en.json').then((m) => m.default),
    tr: () => import('@/contents/tr.json').then((m) => m.default),
};

type BackendProfile = {
    name?: string;
    about?: string;
    contact_message?: string;
    profile_image?: string;
    email?: string;
    location?: string | null;
    phone_number?: string;
    work_status?: string;
    facebook?: string;
    telegram?: string;
    twitter?: string;
    skype?: string;
};

type BackendProject = {
    id: number | string;
    title?: string;
    description?: string;
    image?: string;
    video?: string | null;
    url?: string;
};

type BackendWhatIDo = {
    id: number | string;
    title?: string;
    description?: string;
};

type BackendPortfolioData = {
    profile: BackendProfile | null;
    projects: BackendProject[];
    services: BackendWhatIDo[];
};

const configuredBackendUrl = (
    process.env.BACKEND_API_URL ||
    process.env.NEXT_PUBLIC_BACKEND_API_URL ||
    'https://backend.masaba-kenneth.info/api'
).replace(/\/+$/, '');

const BACKEND_API_BASE = configuredBackendUrl.endsWith('/api')
    ? configuredBackendUrl
    : `${configuredBackendUrl}/api`;

const BACKEND_ORIGIN = BACKEND_API_BASE.replace(/\/api\/?$/, '');

async function fetchFirstOk<T>(paths: string[]): Promise<T | null> {
    for (const path of paths) {
        try {
            const response = await fetch(`${BACKEND_API_BASE}${path}`, {
                headers: { Accept: 'application/json' },
                next: { revalidate: 300 },
            });

            if (response.ok) {
                return await response.json() as T;
            }
        } catch {
            // Keep the static JSON content usable when the backend is unavailable.
        }
    }

    return null;
}

const getBackendPortfolioData = cache(async (): Promise<BackendPortfolioData> => {
    const [profile, projects, services] = await Promise.all([
        fetchFirstOk<BackendProfile>(['/profile/', '/user/2/profile/']),
        fetchFirstOk<BackendProject[]>(['/projects/', '/user/2/projects/']),
        fetchFirstOk<BackendWhatIDo[]>(['/what-i-do/', '/user/2/what-i-do/']),
    ]);

    return {
        profile,
        projects: projects || [],
        services: services || [],
    };
});

function resolveMediaUrl(value?: string | null): string | undefined {
    if (!value) return undefined;
    if (/^https?:\/\//i.test(value)) return value;
    if (value.startsWith('/')) return `${BACKEND_ORIGIN}${value}`;
    return `${BACKEND_ORIGIN}/${value}`;
}

function mergeSharedWithBackend(
    shared: SharedDataType,
    backend: BackendPortfolioData,
): SharedDataType {
    const profile = backend.profile;
    if (!profile) return shared;

    const social = [
        ...shared.social.filter((link) => link.label === 'GitHub'),
        profile.facebook ? { label: 'Facebook', href: profile.facebook } : null,
        profile.telegram ? { label: 'Telegram', href: profile.telegram } : null,
        profile.twitter ? { label: 'X', href: profile.twitter } : null,
        profile.skype ? { label: 'Skype', href: profile.skype } : null,
    ].filter(Boolean) as SharedDataType['social'];

    return {
        ...shared,
        profile: {
            ...shared.profile,
            name: profile.name || shared.profile.name,
            role: profile.work_status || shared.profile.role,
            image: resolveMediaUrl(profile.profile_image) || shared.profile.image,
        },
        heroGallery: [
            resolveMediaUrl(profile.profile_image) || shared.profile.image,
            ...shared.heroGallery,
        ].filter((item, index, all) => item && all.indexOf(item) === index),
        contact: {
            ...shared.contact,
            location: profile.location || shared.contact.location,
            email: profile.email || shared.contact.email,
            phone: profile.phone_number || shared.contact.phone,
        },
        social: social.length ? social : shared.social,
        stack: backend.services.length
            ? {
                ...shared.stack,
                tools: backend.services.map((service, index) => ({
                    name: service.title || `Service ${index + 1}`,
                    icon: shared.stack.tools[index % shared.stack.tools.length]?.icon || '/profile-highlights/embedded.svg',
                    featured: index < 2,
                })),
            }
            : shared.stack,
    };
}

function mergeContentWithBackend(
    content: ContentLanguageType,
    backend: BackendPortfolioData,
): ContentLanguageType {
    const profile = backend.profile;
    const projects = backend.projects.map((project, index) => {
        const fallback = content.projects.find((item) => (
            item.title.toLowerCase() === (project.title || '').toLowerCase()
        )) || content.projects[index] || content.projects[0];

        return {
            id: String(project.id),
            title: project.title || fallback.title,
            category: fallback.category,
            year: fallback.year,
            description: project.description || fallback.description,
            image: resolveMediaUrl(project.image) || fallback.image,
            demo: resolveMediaUrl(project.video) || fallback.demo,
            repo: project.url || fallback.repo,
            stack: fallback.stack,
        };
    });

    return {
        ...content,
        about: profile
            ? {
                ...content.about,
                description: profile.about || content.about.description,
                full: profile.about || content.about.full,
            }
            : content.about,
        projects: projects.length ? projects : content.projects,
    };
}

export const getDictionary = (locale: Locale): Promise<DictionaryType> => dictionaries[locale]();
export const getContents = async (locale: Locale): Promise<ContentLanguageType> => {
    const [content, backend] = await Promise.all([
        contents[locale](),
        getBackendPortfolioData(),
    ]);

    return mergeContentWithBackend(content, backend);
};

export const getSharedData = async (): Promise<SharedDataType> => {
    const [shared, backend] = await Promise.all([
        import('@/contents/shared.json').then((m) => m.default),
        getBackendPortfolioData(),
    ]);

    return mergeSharedWithBackend(shared, backend);
};
