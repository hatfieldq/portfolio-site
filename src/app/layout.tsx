import type { Metadata } from "next";
import { Orbitron, Monda } from "next/font/google";
import "./globals.css";
import Footer from "@/components/Footer";
import Nav from "@/components/Nav"

const orbitron = Orbitron({
  variable: "--font-orbitron",
  subsets: ["latin"],
});

const monda = Monda({
  variable: "--font-monda",
  subsets: ["latin"],
  weight: ["400", "700"],
});


export const metadata: Metadata = {
  metadataBase: new URL("https://quinntenhatfield.com"),
  title: "Q's Portfolio",
  description: "Created to showcase my work and skills.",
  openGraph: {
    title: "Q's Portfolio",
    description: "Created to showcase my work and skills.",
    // og:url — the canonical URL the card should point at. Resolved against
    // metadataBase above, so "/" becomes https://quinntenhatfield.com/.
    // LinkedIn keys its scrape cache off this value, not off the pasted URL,
    // which is what collapses ?utm_source=... variants into one card.
    url: "/",
    // og:type — tells the crawler what kind of thing this is. "website" gets
    // the plain large card; "article" makes LinkedIn look for author/date tags.
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${orbitron.variable} ${monda.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <Nav />


        <main className="flex-grow max-w-4xl mx-auto p-4 bg-surface">
          {children}
        </main>
        
        
        <Footer />
      </body>
    </html>
  );
}
