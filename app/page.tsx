import { DEFAULT_LOCALE } from "@/lib/i18n";
import PortfolioContent from "./portfolio-content";
import PortfolioShell from "./portfolio-shell";

export default function RootPage() {
    return (
        <PortfolioShell lang={DEFAULT_LOCALE}>
            <PortfolioContent />
        </PortfolioShell>
    );
}
