"use client";

import React from 'react'
import dynamic from 'next/dynamic';

const About = dynamic(() => import('./../componentsPage/About'), {
  ssr: false,
})

export default function page() {
  return (
    <div className="container md:px-28 px-4 mx-auto">
        <section className="mt-28 md:mt-10 ">
          <About page="about" />
        </section>
    </div>
  )
}
