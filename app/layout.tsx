import "./globals.css";
import { Montserrat } from "next/font/google";
import { Metadata } from "next";
import Footer from "@/components/footer";
import clsx from "clsx";
import Hero from "@/components/hero";
import Nav from "@/components/nav";
import Bio from "@/components/bio";

export const metadata: Metadata = {
  title: "nyanyan | illustrator",
  description: "portfolio of nyanyan",
};

const montserrat = Montserrat({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={clsx(["bg-[#ece8f5] text-[#325c59]", montserrat.className])}
      >
        <Hero />
        <Nav />
        {children}
        <Footer />
      </body>
    </html>
  );
}
