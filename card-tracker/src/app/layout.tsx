import type { Metadata } from "next";
import { Inter, Comfortaa } from "next/font/google";
import "./globals.css";

export const inter = Inter({ subsets: ["latin"],
  variable: '--font-inter',
 });
export const comfortaa = Comfortaa({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-comfortaa',
})

export const metadata: Metadata = {
  title: "Card Tracker",
  description: "Get personalized recommendations for your credit card strategy",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${comfortaa.variable}`}>{children}</body>
    </html>
  );
}
