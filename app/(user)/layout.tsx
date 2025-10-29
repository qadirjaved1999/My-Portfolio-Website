// app/(user)/layout.tsx
import Navbar from "@/components/layout/navbar";
import Footer from "@/components/layout/footer";
import { ThemeProvider } from "@/components/theme/theme-provider";

export default function PublicLayout({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider>
      <Navbar />
      <main className="mx-auto max-w-[1200px] px-4 py-8">{children}</main>
      <Footer />
    </ThemeProvider>
  );
}
