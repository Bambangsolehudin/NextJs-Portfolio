import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en" className="scroll-smooth">
      <Head>
        <meta charSet="utf-8" />
        <meta name="description" content="Full-Stack Developer & Designer | Building elegant digital experiences" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#1f2937" />
        
        {/* Open Graph */}
        <meta property="og:title" content="Portfolio | Full-Stack Developer" />
        <meta property="og:description" content="Crafting elegant digital experiences with 8+ years of expertise" />
        <meta property="og:type" content="website" />
        
        {/* Preconnect to external resources */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </Head>
      <body className="antialiased bg-white dark:bg-black transition-colors">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
