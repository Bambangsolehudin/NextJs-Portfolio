import React from 'react'
import About from '../componentsPage/About'

export default function page() {
  return (
    <div className="container md:px-10 px-4 mx-auto">
        <section className="mt-10">
          <About page="about" />
        </section>
    </div>
  )
}
