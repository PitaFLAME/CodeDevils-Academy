import { ArrowRight } from "lucide-react"
import Link from "next/link"
import { useOverlay } from "./account/OverlayContext"

        
const OverlayButton = ({ className, children }:{
    className?: string
    children?: React.ReactNode
}) => {

    const { toggleOverlay } = useOverlay();

    return (
        
        <button
            onClick={toggleOverlay}
            className={`flex flex-row items-center gap-1 
                ${className}`}>
            {children}
        </button>
    )
}

export default OverlayButton