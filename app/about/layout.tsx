import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { GoogleTagManager } from '@next/third-parties/google'

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "About page",
  description: "Discover how we empower writers of all levels to craft captivating story titles that spark creativity and inspire readers.",
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
