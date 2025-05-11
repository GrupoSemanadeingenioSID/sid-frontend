import type { Metadata } from "next";
import { Nunito, Lilita_One } from 'next/font/google';
import "@/styles/globals.css";

const nunito = Nunito({
  subsets: ['latin'],
  weight: 'variable',
  variable: '--font-nunito',
});

const lilita = Lilita_One({
  subsets: ["latin"],
  variable: "--font-lilita",
  weight: "400",
});

export const metadata: Metadata = {
  title: "SID",
  description: "website for SID for students",
};

export { lilita };

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={nunito.className}
      >
        {children}
      </body>
    </html>
  );
}
