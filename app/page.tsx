import Image from 'next/image'
import Hero from '@/components/Hero';
import Skills from '@/components/Skills';
import {Button} from '@nextui-org/button'; 
export default function Home() {
  return (
    <main className="light bg-background flex min-h-screen px-6 flex-col items-center justify-between ">
      <div className="flex flex-col">
        <div className="bg-white-800 sm:mb-12">   
          <Hero />
        </div>
        <section className="py-12 bg-white-900">
          <Skills />
        </section>
      </div>
    </main>
  )
}
