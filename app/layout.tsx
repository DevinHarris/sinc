import type { Metadata } from "next";
import { Analytics } from '@vercel/analytics/next'
import { Inter } from 'next/font/google'
import { SessionProvider } from "next-auth/react";
import StoreProvider from "./StoreProvider";
import "./globals.scss";
import Sidebar from "./components/Sidebar/Sidebar";


const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"]
})


export const metadata: Metadata = {
  title: "SINC | Elevate Your Fitness Journey.",
  description: "SINC fitness app.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode,
}>) {
  return (
   <SessionProvider>
      <StoreProvider>
        <html lang="en">
        <body className={`${inter.variable} antialiased`}>
            <div className="app-container">
              <Sidebar />
              <div className="app-main">
                {children}
                <Analytics />
              </div>
            </div>
        </body>
      </html>
      </StoreProvider>
   </SessionProvider>
  );
}
