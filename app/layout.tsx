import "./globals.css";
import { ReactNode } from "react";
import { AuthProvider } from "@/context/AuthContext";

export const metadata = {
  title: "Portfolio",
  description: "Personal portfolio",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body suppressHydrationWarning  className="min-h-dvh bg-background text-foreground antialiased">
        <AuthProvider>{children}</AuthProvider>
      </body>
    </html>
  );
}
