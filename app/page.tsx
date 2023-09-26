import Image from 'next/image'
import Hero from '@/components/Hero';
import Skills from '@/components/Skills';
import Services from '@/components/Services';
import WorkExperience from '@/components/WorkExperience';
import Projects from '@/components/Projects';

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen p-0 m-0 items-center justify-between">
      <div className="flex flex-col w-full">
        {/* Hero Section */}
        <section className="px-6 bg-white-800 sm:py-[72px] lg:px-12 xl:px-[85px] dark:bg-black-300">   
          <Hero />
        </section>
        {/* Skills Section */}
        <section className="px-6 py-12 bg-white-900 lg:px-12 xl:px-[85px] sm:py-[72px] dark:bg-black-200">
          <Skills />
        </section>
        {/* Services Section */}
        <section className="px-6 py-12 bg-white-900 sm:bg-white-800 lg:px-12 xl:px-[85px] sm:py-[72px] dark:bg-black-300">   
          <Services/>
        </section>
        {/* Work Experience */}
        <section className="py-12 bg-white-900 sm:py-[72px] dark:bg-black-200">
          <WorkExperience />
        </section>
        {/* Projects */}
        <section className="px-6 py-12 bg-white-900 sm:px-[85px] sm:py-[72px] dark:bg-black-200">
          <Projects />
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
