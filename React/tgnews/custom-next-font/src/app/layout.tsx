import type { Metadata } from "next";
import { Roboto , Playfair_Display} from "next/font/google";

import "./globals.css";

const roboto_init = Roboto({
  subsets: ['latin'],
  weight: ['100' ,'300', '700'],
  variable: '--font-roboto'
})

const playfair_display_init = Playfair_Display({
  subsets: ['latin'],
  weight: '600',
  variable: '--font-playfair_display'
})


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
      <body  className={ `${roboto_init.variable} ${playfair_display_init.variable}`} >{children}</body>
    </html>
  );
}
