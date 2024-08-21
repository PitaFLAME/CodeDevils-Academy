import Image from "next/image"
import GetStarted from "../GetStarted"


const LandingImageCards = () => {
    
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
        <div className="grid grid-cols-3 grid-rows-2 gap-4 mt-12" >
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
                <GetStarted />
            </div>
            <div />

        </div>
    )
}

export default LandingImageCards