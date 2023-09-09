import React from 'react'

type Props = {}

const Footer = (props: Props) => {
  return (
    <footer>
        <div>
            <div>
                <p className='text-black-400 text-lg'>2023 Kamsiyonna. All rights reserved.</p>
            </div>
            <div className='flex gap-6'>
                <div className='w-6 h-6 border'></div>
                <div className='w-6 h-6 border'></div>
            </div>
        </div>
    </footer>
  )
}

export default Footer