import './globals.css'
import {Providers} from "./providers";
import type { Metadata } from 'next'

import { Poppins } from 'next/font/google'


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
          {children}
        </Providers>    
      </body>
    </html>
  )
}
