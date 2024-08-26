import { Circle } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'


const DiscordCommunity = () => {

    return (
        <div className="flex flex-row gap-4 -mt-8 mb-24 items-center">
            <Link href="https://discord.gg/2evvzxvS"
                target="_blank"
                className="flex flex-row ml-12 px-8 py-2 gap-6
                w-[calc(100%-240px)] h-24 group
                rounded-3xl shadow-lg shadow-zinc-400
                bg-discord-400 border-2 border-discord-300
                ">
                <div className="flex bg-discord-200 rounded-3xl p-1 ">
                    <Image 
                        className=""
                        src="/assets/logos/discord-icon.svg"
                        alt="Discord logo"
                        width={80}
                        height={80}
                    />
                </div>
                <div className="" >
                    <h1 className="font-arial-bold text-xl text-zinc-100 group-hover:underline group-hover:underline-offset-2" >CodeDevils @ ASU</h1>
                    <p className="text-zinc-400" >Welcome to the CodeDevils Discord server! This is the place for all ...</p>
                    <div className="flex flex-row items-center text-zinc-300 gap-2">
                        <Circle className="fill-green-600 text-green-600 h-2 w-2" />
                        <p>230 Online</p>
                        <Circle className="fill-zinc-300 text-zinc-300 h-2 w-2" />
                        <p>1,263 Members</p>
                    </div>
                </div>

            </Link>
            
            <Link href="https://discord.gg/2evvzxvS"
                target="_blank"
                className="h-24 w-24 p-2
                rounded-3xl shadow-lg shadow-zinc-400
                bg-discord-400 border-2 border-discord-300">
                <Image 
                    className="rounded-[19px]"
                    src="/assets/logos/CodeDevils-Discord.png"
                    alt="CodeDevils Discord Logo"
                    width={80}
                    height={80}

                />
            </Link>
        </div>
    )
}

export default DiscordCommunity