import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Navbar from "@/components/Navbar";
import "./globals.scss";

const inter = Inter({ subsets: ["latin"], weight: ['100', '200', '400', '500', '700', '800'] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}