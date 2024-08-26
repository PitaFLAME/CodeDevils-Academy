"use client"

import { useState } from "react"
import LoginOverlay from "../login/LoginOverlay"
import MaxWidthWrapper from "../MaxWidthWrapper"
import LandingImageCards from "./LandingImageCards"
import LandingTitle from "./LandingTitle"
import { OverlayProvider } from "../login/OverlayContext"
import ScreenDimmer from "../Dimmer"
import Navbar from "../login/Navbar"
import DiscordCommunity from "../DiscordCommunity"




const LandingPage = () => {



    return (
        <OverlayProvider>
            <Navbar />
            <div className="h-36" /> {/* Spacer for navbar */}
            <ScreenDimmer />
            <MaxWidthWrapper>
                <LandingTitle />
                <LandingImageCards />
                
                <DiscordCommunity />

            </MaxWidthWrapper>
            <LoginOverlay />
            
            
            
        </OverlayProvider>
    )
}

export default LandingPage