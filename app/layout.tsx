import type { Metadata } from "next";
import { Roboto } from "next/font/google";

import Providers from "@/components/Providers";
import DrawerButton from "@/components/DrawerButton";
import Sidebar from "@/components/Sidebar";
import Header from "@/components/header/Header";
import Social from "@/components/Social";

import "./globals.css";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["100", "300", "400", "500", "700", "900"],
});

export const metadata: Metadata = {
  title: "ТОВ НВФ Покров | Головна",
  description: "Modern ECommerce Website",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={roboto.className}>
        <Providers>
          <div className="drawer">
            <DrawerButton />
            <div className="drawer-content">
              <div className="min-h-screen flex flex-col">
                <Header />
                {children}
                <footer className="footer-center grid grid-cols-1 gap-2 p-2 bg-base-300 text-base-content">
                  <Social />
                  <p className="text-xs md:text-sm">
                    Copyright &copy; 2024 - All right reserved by Pokrov-ltd.
                  </p>
                </footer>
              </div>
            </div>
            <div className="drawer-side z-[1]">
              <label
                htmlFor="my-drawer"
                aria-label="close sidebar"
                className="drawer-overlay "
              ></label>
              <Sidebar />
            </div>
          </div>
        </Providers>
      </body>
    </html>
  );
}
