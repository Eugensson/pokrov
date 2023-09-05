import { ThemeProvider } from "@/context/ThemeContext";
import InfoPanel from '@/components/InfoPanel/InfoPanel';
import TheHeader from '@/components/TheHeader/TheHeader';
import TheFooter from '@/components/TheFooter/TheFooter';

import "./globals.css";

import { Roboto } from "next/font/google";
const roboto = Roboto({
  subsets: ["cyrillic"],
  variable: "--font-roboto",
  weight: ["400", "500", "700", "900"],
});

export const metadata = {
  title: 'Головна || НВФ Покров',
  description: 'ТОВ НВФ Покров',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={roboto.className}>
      <ThemeProvider>
      <InfoPanel />
        <TheHeader />
          <main className=''>{children}</main>
        <TheFooter />
      </ThemeProvider>        
      </body>            
    </html>
  )
}
