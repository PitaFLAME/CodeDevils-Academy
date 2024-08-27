import { Circle } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'


const DiscordCommunity = ({ className }:{ className?: string }) => {

    const discordLink = "https://discord.gg/2evvzxvS"

    return (
        <div className={`flex flex-row gap-4 mb-24 items-center ${className}`}>
            <Link href={discordLink}
                target="_blank"
                className="flex flex-row ml-12 px-8 py-2 gap-6
                w-[calc(100%-240px)] h-24 group
                rounded-3xl shadow-lg shadow-zinc-400
                bg-gradient-to-br from-discord-400 to-discord-500  border-2 border-discord-300
                hover:from-discord-400 hover:to-zinc-950
                ">
                <div className="flex bg-discord-200 group-hover:bg-discord-100 rounded-3xl p-1
                    transition-colors duration-300">
                    <Image 
                        className=""
                        src="/assets/logos/discord-icon.svg"
                        alt="Discord logo"
                        width={80}
                        height={80}
                    />
                </div>
                <div>
                    <h1 className="font-arial-bold text-xl text-zinc-100 group-hover:underline group-hover:underline-offset-2" >CodeDevils @ ASU</h1>
                    <p className="text-zinc-400" >Welcome to the CodeDevils Discord server! This is the place for all ...</p>
                    <div className="flex flex-row items-center text-zinc-300 gap-2 ml-1.5">
                        <Circle className="fill-green-600 text-green-600 h-2 w-2" />
                        <p className="mr-3" >230 Online</p>
                        <Circle className="fill-zinc-300 text-zinc-300 h-2 w-2" />
                        <p>1,263 Members</p>
                    </div>
                </div>

            </Link>
            
            <Link href={discordLink}
                target="_blank"
                className="relative h-24 w-24 p-2
                rounded-3xl shadow-lg shadow-zinc-400
                bg-gradient-to-br from-discord-400 to-discord-500
                hover:bg-from-discord-400 hover:to-zinc-950
                border-2 border-discord-300
                group">
                <Circle className="absolute top-0 right-0 h-8 w-8 z-10 opacity-0
                    text-transparent bg-gradient-radial from-white to-transparent
                    group-hover:opacity-35" />
                <Image className="rounded-[19px] z-40"
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