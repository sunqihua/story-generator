import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { GoogleTagManager } from '@next/third-parties/google'

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Title Generator",
  description: "a creative tool that ignites the spark of imagination! Explore our platform to discover endless possibilities in crafting captivating story titles. Whether you're an aspiring writer seeking inspiration or a seasoned storyteller looking for fresh ideas, our intuitive generator is here to fuel your creativity. Generate unique titles for various genres, from romance to mystery, with just a click of a button. Dive into a world of limitless storytelling potential and let your imagination soar with our Story Title Generator.",
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
