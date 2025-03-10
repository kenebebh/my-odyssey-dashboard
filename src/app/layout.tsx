import type { Metadata } from "next";
import { Header, AppSidebar } from "@/components/layout";
import { TanstackProvider } from "@/providers";
import { Toaster } from "@/components/ui/toaster";
import Loading from "./loading";
import { inter } from "./ui/fonts";
import { sans } from "./ui/fonts";
import { ErrorBoundary } from "react-error-boundary";
import { ErrorFallback } from "@/components/partials/general-modules";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { ThemeProvider } from "@/components/helpers";

import "./globals.css";
import { Suspense } from "react";

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
    <html lang={"en"}>
      <body className={`${inter.className} ${sans.className} antialiased`}>
        <TanstackProvider>
          <ThemeProvider>
            <ErrorBoundary FallbackComponent={ErrorFallback}>
              <section className="grid grid-cols-1 lg:grid-cols-[290px,1fr]">
                <div className="hidden lg:flex">
                  <SidebarProvider>
                    <AppSidebar />
                    <SidebarTrigger />
                  </SidebarProvider>
                </div>

                <div className="max-w-full p-2 flex flex-col gap-y-3">
                  <div>
                    <Header />
                  </div>
                  <Suspense fallback={<Loading />}>
                    <div>{children}</div>
                  </Suspense>
                  <Toaster />
                </div>
              </section>
            </ErrorBoundary>
          </ThemeProvider>
        </TanstackProvider>
      </body>
    </html>
  );
}
