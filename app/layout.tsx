import type { Metadata } from "next";
import "./styles/globals.css";
import Providers from "./providers";
import { ThemeProvider } from "./context/ThemeContext";

export const metadata: Metadata = {
  title: "DisasterHow",
  description: "DisasterHow provides high-quality, relevant online learning resources at no cost to better prepare humanitarian and development professionals.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <Providers>
          <ThemeProvider>
            <main className="min-h-screen bg-white dark:bg-gray-800 transition-colors">
            {children}
          </main>
          </ThemeProvider>
        </Providers>
      </body>
    </html>
  );
}
