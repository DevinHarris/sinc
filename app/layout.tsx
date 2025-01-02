import type { Metadata } from "next";
import localFont from 'next/font/local'
import Wrapper from "./components/Wrapper";
import Navbar from "./components/Navbar"
import "./globals.scss";




const gotham = localFont({
  src: [
      {
          path: '../public/fonts/Gotham-Black.otf',
          weight: '900',
          style: 'normal'
      }, 

      {
          path: '../public/fonts/Gotham-Bold.otf',
          weight: '700',
          style: 'normal'
      },

      {
          path: '../public/fonts/Gotham-Medium.otf',
          weight: '500',
          style: 'normal'
      },

      {
          path: '../public/fonts/Gotham-Regular.otf',
          weight: '400',
          style: 'normal'
      }
  ]
})

const helvetica = localFont({
  src: [
    {
        path: '../public/fonts/Helvetica.ttf',
        weight: '400',
        style: 'normal'
    }, 

    {
        path: '../public/fonts/Helvetica-Bold.ttf',
        weight: '700',
        style: 'normal'
    },

    {
        path: '../public/fonts/Helvetica-BoldOblique.ttf',
        weight: '500',
        style: 'normal'
    },

    {
        path: '../public/fonts/Helvetica-Light.ttf',
        weight: '300',
        style: 'normal'
    }
]
})

export const metadata: Metadata = {
  title: "SINC, your new fitness pal.",
  description: "SINC fitness app.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={helvetica.className}>
        <Navbar />
        <Wrapper>
          {children}
        </Wrapper>
      </body>
    </html>
  );
}
