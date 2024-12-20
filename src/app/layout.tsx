import "./styles/globals.scss";
import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import { Layout } from "@/components";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700", "900"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Oistros Cafe",
  description:
    "Oistros Cafe - E-shop",
  viewport: {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 5,
    userScalable: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="shortcut icon" href="/image/webico.png" type="image/png" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Syne&display=swap" rel="stylesheet" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://oistroscafe.gr/" />
        <meta property="og:title" content="Oistros Cafe | SHop"/>
        <meta property="og:description" content="Ανακαλύψτε τον καφέ που σας ταιριάζει"/>
        <meta property="og:image" content="https://oistroscafe.gr/image/oistros-2.JPG"/>
        <meta property="og:image:width" content="1024"/>
        <meta property="og:image:height" content="684"/>
      </head>
      <body className={`${roboto.className} antialiased`}>
        <Layout>
          {children}
        </Layout>
      </body>
    </html>
  );
}
