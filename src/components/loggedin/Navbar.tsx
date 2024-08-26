import React from 'react'
import Image from 'next/image'
import { kMaxLength } from 'buffer'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import GetStarted from '../OverlayButton'
import OverlayButton from '../OverlayButton'

const Navbar = () => {
    return (
        <nav className='fixed flex flex-row h-20 w-screen items-center
            bg-white drop-shadow-xl z-40'>
            <div className='bg-white'>
                <Link href='/'>
                    <Image src='/assets/logos/CDLogo.svg' 
                        alt='CodeDevils Logo' 
                        width={180} height={200}
                        className='mx-16' />
                </Link>
            </div>
            <div className='ml-auto'>
                <ul className='flex flex-row justify-evenly text-black font-neue-haas-light
                    w-[40vw] min-w-[640px] mr-8 items-center'>
                    <li className=''>
                        <Link href='/'>
                            <p className='hover:underline'>Our Community</p>
                        </Link>
                    </li>
                    <li className=''>
                        <Link href='/'>
                            <p className='hover:underline'>Saved Resources</p>
                        </Link>
                    </li>
                    <li className=''>
                        <OverlayButton>
                            <p className='hover:underline'>Account</p>
                        </OverlayButton>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar