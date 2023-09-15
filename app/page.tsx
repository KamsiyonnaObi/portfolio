import Image from 'next/image'
import {Button} from '@nextui-org/button'; 
export default function Home() {
  return (
    <main className="flex min-h-screen bg-white-800 flex-col items-center justify-between p-24 dark:bg-black-200">
      <div>
        <Button>Click me</Button>
      </div>
    </main>
  )
}
