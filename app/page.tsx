import Image from 'next/image'
import Hero from '@/components/Hero';
import Skills from '@/components/Skills';
import Services from '@/components/Services';
import WorkExperience from '@/components/WorkExperience';
import Projects from '@/components/Projects';
import Link from 'next/link';

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
        <section className="px-6 py-12 bg-white-900 lg:px-12 xl:px-[85px] sm:py-[72px] dark:bg-black-200">
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
        <section className="px-6 py-12 bg-white-900 dark:bg-black-200 sm:px-[85px] sm:py-[72px]">
          <article className="flex flex-col mx-auto max-w-[1270px] gap-4 px-[17px] py-[77px] rounded-[20px] bg-Accent-secondary bg-footer-pattern bg-cover sm:flex-row sm:justify-between sm:px-[70px] sm:py-[83px] sm:bg-footer-pattern-lg">
            <div className="sm:w-[520px]">
              <h1 className="text-black-200 font-bold text-[30px] leading-[31.5px] tracking-[-0.15px] sm:header2">Have a project in mind that requires technical expertise?</h1>
            </div>
            <div className="sm:flex sm:items-end">
              <Link 
              href={"/"}
              className="flex justify-center text-sm font-semibold leading-[22.4px] rounded-full py-[12.5px] bg-Accent-light dark:bg-Accent-dark sm:body-bold sm:px-[54px] sm:py-5"
              >
                Get in Touch with Me 
              </Link>
            </div>
          </article>
        </section>
      </div>
    </main>
  )
}
