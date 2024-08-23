'use client'

import LoginOverlay from "../login/LoginOverlay"
import MaxWidthWrapper from "../MaxWidthWrapper"
import LandingImageCards from "./LandingImageCards"
import LandingTitle from "./LandingTitle"


const LandingPage = () => {
    const loginOverlay = true
    return (
        <>
            <div className="absolute w-full h-full -m-20 bg-zinc-600 opacity-35" />
            <MaxWidthWrapper>
                <LandingTitle />
                <LandingImageCards />

                
            </MaxWidthWrapper>
            <LoginOverlay enabled={loginOverlay} />
        </>
    )
}

export default LandingPage