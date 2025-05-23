import "./globals.css";

import type { Metadata } from "next";
import { Nunito_Sans } from "next/font/google";

const nunitoSans = Nunito_Sans({
  subsets: ["latin"],
  weight: ["400", "800"],
});

export const metadata: Metadata = {
  title: "Book Wise",
  description: "Generated by create next app",
  icons: {
    icon: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className={`${nunitoSans.className} bg-gray-800 antialiased`}>
        {children}
      </body>
    </html>
  );
}
