import Navbar from "@/components/organisms/Navbar";
import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Finanças Zap",
  description: "Seu controle de finanças pessoal",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-br">
      <body className={inter.className + " flex flex-row"}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}

