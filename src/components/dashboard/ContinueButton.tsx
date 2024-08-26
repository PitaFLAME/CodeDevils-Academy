import { ArrowRight } from "lucide-react"
import Link from "next/link"


const ContinueButton = () => {

    return (
        <Link href="/"
            className="flex flex-row justify-center items-center gap-1
            h-36 w-40 rounded-xl ml-auto mr-40 my-auto 
            font-neue-haas-medium text-lg
            bg-black border-4 border-zinc-700
            hover:bg-zinc-800 hover:border-zinc-600
            cursor-pointer">
            Continue <ArrowRight className="h-5 w-5" />
        </Link>
    )
}

export default ContinueButton