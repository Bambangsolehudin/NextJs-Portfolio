import React from "react";
import Head from "next/head";
import Navigation from "@/components/common/Navigation";
import Footer from "@/components/common/Footer";
import ContactList from "@/components/sections/ContactList";

export default function ContactListPage() {
  return (
    <>
      <Head>
        <title>Contact Messages - Bambang Solehudin</title>
        <meta name="description" content="View all contact messages" />
        <meta name="robots" content="noindex" />
      </Head>


      <main className="pt-16">
        <ContactList />
      </main>

      <Footer />
    </>
  );
}
