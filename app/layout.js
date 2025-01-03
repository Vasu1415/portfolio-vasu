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
  React.useEffect(() => {
    var _paq = (window._paq = window._paq || []);
    /* tracker methods like "setCustomDimension" should be called before "trackPageView" */
    _paq.push(["setDocumentTitle", document.domain + "/" + document.title]);
    _paq.push(["setCookieDomain", "*.portfolio-vasu-mittal.vercel.app"]);
    _paq.push(["setDomains", ["*.portfolio-vasu-mittal.vercel.app"]]);
    _paq.push(["trackPageView"]);
    _paq.push(["enableLinkTracking"]);
    (function () {
      var u = "https://portfoliovasumittalvercelapp.matomo.cloud/";
      _paq.push(["setTrackerUrl", u + "matomo.php"]);
      _paq.push(["setSiteId", "1"]);
      var d = document,
        g = d.createElement("script"),
        s = d.getElementsByTagName("script")[0];
      g.async = true;
      g.src = "https://cdn.matomo.cloud/portfoliovasumittalvercelapp.matomo.cloud/matomo.js";
      s.parentNode.insertBefore(g, s);
    })();
  }, []);

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
