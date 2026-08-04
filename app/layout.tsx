import "./globals.css";
import { GeistSans } from "geist/font/sans";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import SessionWrapper from "../components/SessionWrapper";
import { ThemeProvider } from "../components/theme-provider";

export const metadata = {
  title: "RaiseNest - Premium Crowdfunding Platform",
  description: "Turn Your Ideas Into Funded Reality. Built for creators and students.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={GeistSans.className} suppressHydrationWarning>
      <body className="min-h-screen bg-background text-foreground antialiased relative overflow-x-hidden">
        {/* Background Effects */}
        <div className="fixed inset-0 z-[-1] bg-grid-black dark:bg-grid-white [mask-image:radial-gradient(ellipse_60%_60%_at_50%_0%,#000_70%,transparent_100%)] opacity-20 pointer-events-none" />
        <div className="fixed inset-0 z-[-2] bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(37,99,235,0.15),rgba(255,255,255,0))] dark:bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(124,58,237,0.15),rgba(0,0,0,0))] pointer-events-none" />
        <div className="noise-bg" />

        <SessionWrapper>
          <ThemeProvider attribute="class" defaultTheme="dark" enableSystem disableTransitionOnChange>
            <Navbar />
            <main className="min-h-screen text-foreground pt-16">
              {children}
            </main>
            <Footer />
          </ThemeProvider>
        </SessionWrapper>
      </body>
    </html>
  );
}
