import SmoothScroll from "@/providers/smooth-scroll-provider";
import { ThemeProvider } from "@/providers/theme-provider";
import { LanguageProvider } from "@/providers/language-provider";
import { Preloader } from "@/components/layout/preloader";
import { CustomCursor } from "@/components/layout/custom-cursor";
import Navbar from "@/components/layout/navbar";
import { getDictionary, getContents, getSharedData } from "@/lib/loaders";
import type { Locale } from "@/lib/i18n";

export default async function PortfolioShell({
  children,
  lang,
}: {
  children: React.ReactNode;
  lang: Locale;
}) {
  const [dictionary, contents, shared] = await Promise.all([
    getDictionary(lang),
    getContents(lang),
    getSharedData(),
  ]);

  return (
    <LanguageProvider lang={lang} dictionary={dictionary} contents={contents} shared={shared}>
      <ThemeProvider
        attribute="class"
        defaultTheme="dark"
        enableSystem={false}
      >
        <CustomCursor />
        <Preloader />
        <SmoothScroll>
          <Navbar />
          {children}
        </SmoothScroll>
      </ThemeProvider>
    </LanguageProvider>
  );
}
