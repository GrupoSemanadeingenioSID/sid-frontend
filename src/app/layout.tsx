import type { Metadata } from "next";
import { Nunito } from 'next/font/google';
import "@/styles/globals.css";

const nunito = Nunito({
  subsets: ['latin'],
  weight: 'variable',
  variable: '--font-nunito',
});

export const metadata: Metadata = {
  title: "SID",
  description: "website for SID for students",
};

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
