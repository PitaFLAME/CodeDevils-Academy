import { ArrowRight } from "lucide-react"
import Link from "next/link"

        
const GetStarted = () => {
    return (
        
        <Link href='/'
            className='flex flex-row items-center gap-1 mt-24
                py-4 px-6 rounded-lg text-xl
                text-black font-neue-haas-bold
                shadow-md shadow-zinc-600 
                hover:bg-asugold-800 bg-asugold'>
            <p>Get Started</p>
            <ArrowRight className='h-6 w-6 mt-0.5' />
        </Link>
    )
}

export default GetStarted