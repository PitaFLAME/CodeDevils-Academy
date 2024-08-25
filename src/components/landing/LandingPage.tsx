"use client"

import { useState } from "react"
import LoginOverlay from "../login/LoginOverlay"
import MaxWidthWrapper from "../MaxWidthWrapper"
import LandingImageCards from "./LandingImageCards"
import LandingTitle from "./LandingTitle"
import { OverlayProvider } from "../login/OverlayContext"
import LandingDimmer from "./LandingDimmer"
import Navbar from "../Navbar"




const LandingPage = () => {



    return (
        <OverlayProvider>
            <Navbar />
            <div className="h-36" /> {/* Spacer for navbar */}
            <LandingDimmer />
            <MaxWidthWrapper>
                <LandingTitle />
                <LandingImageCards />

                
            </MaxWidthWrapper>
            <LoginOverlay />
            
        </OverlayProvider>
    )
}

export default LandingPage