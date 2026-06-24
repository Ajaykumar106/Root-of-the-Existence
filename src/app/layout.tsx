import type { Metadata, Viewport } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space",
  subsets: ["latin"],
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: "#000000",
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL("https://root-of-the-existence.vercel.app"),
  title: "Root of Existence | The Digital Space Museum",
  description: "Explore the root of our existence. A beautifully interactive digital museum of the universe, nebulas, solar system, and humanity.",
  keywords: ["space", "museum", "universe", "astronomy", "cosmos", "big bang", "nebulas", "solar system"],
  authors: [{ name: "Space Engineers" }],
  openGraph: {
    title: "Root of Existence | The Digital Space Museum",
    description: "Explore the root of our existence in this interactive digital museum.",
    url: "https://root-of-the-existence.vercel.app",
    siteName: "COSMOS",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Root of Existence | The Digital Space Museum",
    description: "Explore the root of our existence in this interactive digital museum.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.variable} ${spaceGrotesk.variable} antialiased bg-transparent text-white selection:bg-white/30`}>
        <main className="relative z-10 w-full min-h-screen">
          {children}
        </main>
      </body>
    </html>
  );
}
