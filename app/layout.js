import { Inter } from "next/font/google";
import "./globals.css";
import Head from "next/head"; 
import React from "react";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Vasu Mittal Portfolio",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {

  return (
    <html lang="en">
      <Head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        <link rel="icon" href="/app/favicon.ico" />
      </Head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
