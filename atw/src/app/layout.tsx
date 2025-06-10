import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/app/components/Header/Header";
import { headers } from 'next/headers';

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Around The World",
  description: "Découvrez le monde et planifiez votre prochain voyage",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const heads = headers();
  const pathname = heads.get('next-url') || '';
  const showHeader = !['/login', '/signup'].includes(pathname);

  return (
    <html lang="fr">
      <body className={`${inter.variable} antialiased`}>
        {showHeader && <Header />}
        {children}
      </body>
    </html>
  );
}
