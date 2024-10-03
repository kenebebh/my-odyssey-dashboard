import type { Metadata } from "next";
import { Inter, DM_Sans } from "next/font/google";
import { Header, Sidebar } from "@/components";
import { TanstackProvider } from "@/providers";
import { Toaster } from "sonner";

import "./globals.css";

const inter = Inter({ subsets: ["latin"], display: "swap" });
// { subsets: ['latin'], display: 'swap', adjustFontFallback: false}
const sans = DM_Sans({ subsets: ["latin"], display: "swap" });

export const metadata: Metadata = {
  title: "My Odyssey Dashboard",
  description: "Admin Dashboard for My Odyssey App",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} ${sans.className}`}>
        <TanstackProvider>
          <section className="grid grid-cols-1 lg:grid-cols-[290px,1fr]">
            <div className="hidden lg:flex">
              <Sidebar />
            </div>

            <div className="max-w-full p-2 flex flex-col gap-y-3">
              <div>
                <Header />
              </div>
              <div>
                <Toaster richColors position="top-center" />
                {children}
              </div>
            </div>
          </section>
        </TanstackProvider>
      </body>
    </html>
  );
}
