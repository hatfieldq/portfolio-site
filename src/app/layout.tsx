import type { Metadata } from "next";
import { Orbitron, Monda } from "next/font/google";
import "./globals.css";
import "katex/dist/katex.min.css";
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
  title: "Quinnten's Project Website",
  description: "Created to showcase my work and skills.",
  openGraph: {
    title: "Quinnten's Project Website", 
    description: "Created to showcase my work and skills.",
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
