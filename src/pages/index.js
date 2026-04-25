import Head from "next/head";
import { Geist, Geist_Mono } from "next/font/google";
import Navigation from "@/components/common/Navigation";
import Footer from "@/components/common/Footer";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Projects from "@/components/sections/Projects";
import Journey from "@/components/sections/Journey";
import Skills from "@/components/sections/Skills";
import Contact from "@/components/sections/Contact";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function Home() {
  return (
    <>
      <Head>
        <title>Bambang Solehudin | Frontend Developer</title>
        <meta
          name="description"
          content="Frontend Developer with 3 years of experience building clean, responsive interfaces with React, Next.js, Vue.js, and modern frontend tools."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <div className={`${geistSans.variable} ${geistMono.variable} font-sans`}>
        <Navigation />
        
        <main className="overflow-hidden">
          <Hero />
          <About />
          <Projects />
          <Journey />
          <Skills />
          <Contact />
        </main>

        <Footer />
      </div>
    </>
  );
}
