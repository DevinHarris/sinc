import type { Metadata } from "next";

import { Inter } from 'next/font/google'
import { SessionProvider } from "next-auth/react";
import "./globals.scss";
import Sidebar from "./components/Sidebar/Sidebar";


const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"]
})


export const metadata: Metadata = {
  title: "SINC, your new fitness pal.",
  description: "SINC fitness app.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode,
}>) {
  return (
   <SessionProvider>
     <html lang="en">
      <body className={`${inter.variable} antialiased`}>
          <div className="app-container">
            <Sidebar />
            <div className="app-main">
              {children}
            </div>
          </div>
      </body>
    </html>
   </SessionProvider>
  );
}
