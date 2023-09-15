import './globals.css'
import type { Metadata } from 'next'
import { Poppins } from 'next/font/google'

import NavigationBar from '@/components/NavigationBar';
import Footer from '@/components/Footer';
import { Providers } from "./providers";


const poppins = Poppins({
  subsets: ['latin'],
  weight: ["100", "200", "300", "400", "500", "600", "700" , "800" , "900"]
})

export const metadata: Metadata = {
  title: 'Kamsiyonna',
  description: 'Portfolio site of a Software Engineer',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">  
      <body className={poppins.className}>
          <Providers>
            <NavigationBar />
            {children}
            <Footer />
          </Providers>    
      </body>
    </html>
  )
}
