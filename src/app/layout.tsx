import type { Metadata } from "next";
import { Inter, DM_Sans } from "next/font/google";
import { Sidebar } from "@/components";
import { TanstackProvider } from "@/providers";

import "./globals.css";

const inter = Inter({ subsets: ["latin"], display: "swap" });
const sans = DM_Sans({ subsets: ["latin"], display: "swap"  });

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
    <TanstackProvider>
      <html lang="en">
        <body className={`${inter.className} ${sans.className}`}>
          <section className="grid grid-cols-1 lg:grid-cols-[290px,1fr]">
            <div className="hidden lg:flex">
              <Sidebar />
            </div>

            <div className="max-w-full p-2">{children}</div>
          </section>
        </body>
      </html>
     </TanstackProvider>
  );
}
