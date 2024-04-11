import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { GoogleTagManager } from '@next/third-parties/google'

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Example page",
  description: " Explore our FAQ page to find solutions to common queries about our Story Title Generator",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
       <GoogleTagManager gtmId="G-09WYQ49L6Q" />
      <body className={inter.className}>{children}</body>
    </html>
  );
}
