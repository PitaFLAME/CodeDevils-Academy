import Image from "next/image"
import OverlayButton from "../OverlayButton"
import { useOverlay } from "../account/OverlayContext";
import { ArrowRight } from "lucide-react";


const LandingImageCards = () => {

    const { isOverlayOpen, toggleOverlay, closeOverlay } = useOverlay();

    const images = [
        (
            <Image key={0}
                className="w-full h-[480px] object-cover"
                src="/assets/marketing/arizona-state-university-palm-tr.png"
                alt="Image of campus"
                width={1000}
                height={1000}
            /> ), (
            <Image key={1}
                className="w-full h-[480px] object-cover"
                src="/assets/marketing/1712866885367.png"
                alt="Image of campus"
                width={1000}
                height={1000}
            /> ), (
            <Image key={2}
                className="w-full h-[480px] object-cover"
                src="/assets/marketing/DZrFFUZXUAAZQ8l.png"
                alt="Image of campus"
                width={1000}
                height={1000}
            /> )
    ]
    
    return (
        <div className="grid grid-cols-3 grid-rows-2 gap-4 mt-12 -mb-20" >
            <div>
                {images[0]}
            </div>
            <div>
                {images[1]}
            </div>
            <div>
                {images[2]}
            </div>

            <div />
            <div className="flex items-start justify-center" >
                <OverlayButton className="mt-24 py-4 px-6 text-black text-lg
                    rounded-lg shadow-md shadow-zinc-600 font-neue-haas-bold
                    hover:bg-asugold-800 bg-asugold" >
                    <p>Get Started</p>
                    <ArrowRight className="h-6 w-6" />
                </OverlayButton>
            </div>
            <div />

        </div>
    )
}

export default LandingImageCards