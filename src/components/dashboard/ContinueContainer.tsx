import { ArrowRight } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

const ContinueContainer = () => {

    const getLessonText = ({lesson} : { lesson: number }) => { return "Text" }

    const currentLesson = 13
    const lessonText = getLessonText({ lesson: currentLesson })
    const thumbnail = "/assets/video_thumbnails/videothumbnail1.png"
    


    return (
        <div className="ml-auto md:max-w-[calc(60%+640px)] pl-2.5 md:pl-20 w-full">
            <div className="w-full py-6 mb-6
                bg-asugold border-2 border-asugold-600
                shadow-lg shadow-zinc-300" >
                <div className=" w-full ml-20
                    bg-gradient-to-r from-asugold to-asugold-200" >
                    <div className="flex flex-row rounded-lg py-4 gap-8" >
                        <Image 
                            className=" object-cover"
                            src={thumbnail}
                            alt="Video Thumbnail"
                            height={300}
                            width={400} />
                        
                        <p className="text-black font-neue-haas-medium text-lg">
                            {lessonText} </p>

                        <Link href="/"
                            className="flex flex-row justify-center items-center gap-1
                            h-36 w-40 rounded-xl ml-auto mr-40 my-auto 
                            font-neue-haas-medium text-lg
                            bg-black border-4 border-zinc-700
                            hover:bg-zinc-800 hover:border-zinc-600
                            cursor-pointer">
                            Continue <ArrowRight className="h-5 w-5" />
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ContinueContainer