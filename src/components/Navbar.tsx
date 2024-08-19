import React from 'react'
import Image from 'next/image'
import { kMaxLength } from 'buffer'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

const Navbar = () => {
    return (
        <nav className='flex flex-row h-20 bg-pink-500 items-center'>
            <div className='bg-white'>
                <Link href='/'>
                    <Image src='/assets/CDLogo.svg' 
                        alt='CodeDevils Logo' 
                        width={180} height={200}
                        className='mx-16' />
                </Link>
            </div>
            <div className='ml-auto'>
                <ul className='flex flex-row justify-evenly bg-purple-400 
                    w-[40vw] min-w-[640px] mr-8 items-center'>
                    <li className=''>
                        <Link href='/'>
                            <p>Our Community</p>
                        </Link>
                    </li>
                    <li className=''>
                        <Link href='/'>
                            <p>Additional Resources</p>
                        </Link>
                    </li>
                    <li className=''>
                        <Link href='/' 
                            className='flex flex-row bg-'>
                            <p>Get Started</p>
                            <ArrowRight />
                        </Link>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar