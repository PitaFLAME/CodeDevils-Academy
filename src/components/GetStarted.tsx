import { ArrowRight } from "lucide-react"
import Link from "next/link"
import { useOverlay } from "./login/OverlayContext"

        
const GetStarted = ({ className, children }:{
    className?: string
    children?: React.ReactNode
}) => {

    const { toggleOverlay } = useOverlay();

    return (
        
        <button
            onClick={toggleOverlay}
            className={`flex flex-row items-center gap-1 ${className}
                rounded-lg
                font-neue-haas-bold
                shadow-md shadow-zinc-600`}>
            {children}
        </button>
    )
}

export default GetStarted