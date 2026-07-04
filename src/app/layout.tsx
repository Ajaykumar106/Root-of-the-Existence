import type { Metadata, Viewport } from "next";
import { Inter, Space_Grotesk, JetBrains_Mono } from "next/font/google";
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

const jetBrainsMono = JetBrains_Mono({
  variable: "--font-mono",
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
      <head>
        <link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap" rel="stylesheet" />
        <style>
          {`
            .material-symbols-outlined {
              font-variation-settings: 'FILL' 0, 'wght' 300, 'GRAD' 0, 'opsz' 24;
            }
          `}
        </style>
      </head>
      <body className={`${inter.variable} ${spaceGrotesk.variable} ${jetBrainsMono.variable} antialiased bg-void-black text-starlight-white selection:bg-cobalt-nebula selection:text-starlight-white`}>
        <main className="relative z-10 w-full min-h-screen">
          {children}
        </main>
      </body>
    </html>
  );
}
