import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Head from "next/head"; // Importando o componente Head

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Nabi",
  description: "Eu gosto muito de você",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <Head>
        {/* Adiciona o favicon */}
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
