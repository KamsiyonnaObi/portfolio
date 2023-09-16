import Image from 'next/image'
import Hero from '@/components/Hero';
import Skills from '@/components/Skills';
import Services from '@/components/Services';
export default function Home() {
  return (
    <main className="flex flex-col min-h-screen p-0 m-0 items-center justify-between">
      <div className="flex flex-col">
        {/* Hero Section */}
        <section className="bg-white-800 sm:pb-12 dark:bg-black-300">   
          <Hero />
        </section>
        {/* Skills Section */}
        <section className="py-12 bg-white-900 dark:bg-black-200">
          <Skills />
        </section>
        {/* Services Section */}
        <section className="py-12 px-6 bg-white-800 sm:pb-12 dark:bg-black-300">   
          <Services/>
        </section>
        {/* Work Experience */}
        <section className="py-12 bg-white-900 dark:bg-black-200">
          <div>Work Experience</div>
          <div>Featured Projects</div>
        </section>
        {/* Testimonials */}
        <section className="bg-white-800 sm:pb-12 dark:bg-black-300">   
          <div>What they say about me</div>
        </section>
        {/* Contact Me */}
        <section className="py-12 bg-white-900 dark:bg-black-200">
          <div>Contact section</div>
        </section>
      </div>
    </main>
  )
}
