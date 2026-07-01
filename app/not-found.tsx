import { ThemeProvider } from "@/providers/theme-provider";
import { CustomCursor } from "@/components/layout/custom-cursor";
import { NotFoundContent } from "@/components/sections/not-found-content";
import enDict from "@/dictionaries/en.json";

export const metadata = {
  title: "404 - Page Not Found",
  description: "Page not found.",
};

export default function RootNotFound() {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="dark"
      enableSystem={false}
    >
      <CustomCursor />
      <NotFoundContent dict={enDict} />
    </ThemeProvider>
  );
}
