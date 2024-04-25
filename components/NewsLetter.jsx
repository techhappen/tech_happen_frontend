import Image from 'next/image'
import React from 'react'

export default function NewsLetter() {
  return (
    <div className='text-center mx-auto my-4 lg:m-auto border rounded-3xl shadow-lg h-fit w-[360px] overflow-hidden'> 
        <Image src="/assets/images/newsletter.svg" alt='newsLetter' height={167} width={360} className='w-full' />
        <div className='grid gap-3 p-5'>
            <h1 className='my-2 text-xl'>SUBSCRIBE TO OUR NEWSLETTER</h1>
            <p className='font-thin text-[#AFAFAF]'>Subscribe to our newsletter to get hot news & updates happening in the TECH space!</p>
            <form action="submit" className='grid gap-3 mt-5'>
                <input type="text" placeholder='Email address' className='w-full p-3 border rounded-lg outline-none' />
                <button type="button" className='page-transition bg-[#000775] hover:bg-[#020075e4] animate-pulse p-3 w-full border rounded-lg text-white' >Subscribe</button>
            </form>
        </div>
    </div>
  )
}
