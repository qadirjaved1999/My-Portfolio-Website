import { ThemeProvider } from "@/components/theme/ThemeProvider";
import Navbar from "@/components/layout/navbar";
import Footer from "@/components/layout/footer";

export default function PublicLayout({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider>
      <>
        <Navbar />
        <main className="px-4 py-8">{children}</main>
        <Footer />
      </>
    </ThemeProvider>
  );
}
