import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { GoogleTagManager } from '@next/third-parties/google'

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "FAQ page",
  description: "Explore a curated collection of story titles generated by our platform, showcasing the endless possibilities of storytelling. Whether you're seeking romance, mystery, or adventure, let these examples ignite your creativity and guide you in crafting your own captivating tales.",
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
