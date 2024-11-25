import type { Metadata } from "next";
import { ThemeProvider } from "next-themes";
import { Inter, Lora } from "next/font/google";
import { SessionProvider } from "next-auth/react";

import { Toaster } from "@/components/ui/sonner";

import { auth } from "@/auth";
import { cn } from "@/lib/utils";

import "./globals.css";

const inter = Inter({
  subsets: ["latin", "cyrillic"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-inter",
});

const lora = Lora({
  subsets: ["latin", "cyrillic"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-lora",
});

export const metadata: Metadata = {
  title: {
    template: "%s | Pokrov",
    absolute: "Pokrov",
  },
  description: "Pokrov e-Commerce app",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const session = await auth();

  return (
    <SessionProvider session={session}>
      <html lang="en" suppressHydrationWarning>
        <body className={cn(inter.variable, lora.variable)}>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem={true}
            disableTransitionOnChange
          >
            {children}
            <Toaster />
          </ThemeProvider>
        </body>
      </html>
    </SessionProvider>
  );
}
