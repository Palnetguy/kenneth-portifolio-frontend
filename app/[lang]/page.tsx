import { notFound } from "next/navigation";
import { isValidLocale } from "@/lib/i18n";
import PortfolioContent from "../portfolio-content";
import PortfolioShell from "../portfolio-shell";

export function generateStaticParams() {
  return [{ lang: 'en' }, { lang: 'tr' }];
}

export default async function Home({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;

  if (!isValidLocale(lang)) {
    notFound();
  }

  return (
    <PortfolioShell lang={lang}>
      <PortfolioContent />
    </PortfolioShell>
  );
}
