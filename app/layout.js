// layout.js

import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import Header from "@/components/header";
import { ClerkProvider } from "@clerk/nextjs";
import { dark } from "@clerk/themes";
import { Toaster } from "sonner";
import Link from "next/link";
import { Instagram, Mail, Twitter, Youtube } from "lucide-react";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "JobPilot - AI Career Coach",
  description: "",
};

export default function RootLayout({ children }) {
  return (
    <ClerkProvider
      appearance={{
        baseTheme: dark,
      }}
    >
      <html lang="en" suppressHydrationWarning>
        <body className={` ${inter.className}`}>
          <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            enableSystem
            disableTransitionOnChange
          >
            {/* header */}
            <Header />
            <main className="min-h-screen">{children}</main>
            <Toaster richColors />
            {/* footer */}
            <footer className="bg-muted/50 py-6">
              <div className="container mx-auto px-4 text-center text-gray-400">
                <p>Made by Ankit</p>
                {/* This div no longer has the border-t class */}
                <div className="mt-4 flex items-center justify-between">
                  {/* Left Side */}
                  <p className="text-sm">© 2025 JobPilot</p>

                  {/* Right Side (Social Icons) */}
                  <div className="flex items-center space-x-4">
                    <Link
                      href="https://www.instagram.com/playbhai_carti/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-white transition-colors"
                    >
                      <Instagram className="h-5 w-5" />
                    </Link>
                    <Link
                      href="mailto:ankitjakhar5@gmail.com"
                      className="hover:text-white transition-colors"
                    >
                      <Mail className="h-5 w-5" />
                    </Link>
                    <Link
                      href="https://x.com/playbhai_carti"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-white transition-colors"
                    >
                      <Twitter className="h-5 w-5" />
                    </Link>
                    <Link
                      href="https://www.youtube.com/@playbhaicarti"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-white transition-colors"
                    >
                      <Youtube className="h-5 w-5" />
                    </Link>
                  </div>
                </div>
              </div>
            </footer>
          </ThemeProvider>
        </body>
      </html>
    </ClerkProvider>
  );
}