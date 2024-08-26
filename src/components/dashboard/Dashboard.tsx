import ScreenDimmer from "../Dimmer"
import LoginOverlay from "../login/LoginOverlay"
import { OverlayProvider } from "../login/OverlayContext"
import MaxWidthWrapper from "../MaxWidthWrapper"
import Navbar from "../loggedin/Navbar"
import DashboardTitle from "./DashboardTitle"
import ContinueContainer from "./ContinueContainer"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import MiscResources from "./MiscResources"


const Dashboard = () => {

    return (
        <OverlayProvider>
            <Navbar />
            <div className="h-36" /> {/* Spacer for navbar */}
            <ScreenDimmer />
            
            <DashboardTitle />
            <ContinueContainer />

            <MaxWidthWrapper>
                <Link href="/"
                    className="flex flex-row items-center px-4 py-2 rounded-lg w-fit gap-1
                        bg-asumaroon border-2 border-asumaroon-500
                        hover:bg-asumaroon-800 hover:border-asumaroon-600
                        shadow-xl shadow-zinc-300" >
                        Course Info
                        <ArrowRight className="h-5 w-5 mt-0.5" />
                </Link>

                <MiscResources />

            </MaxWidthWrapper>

            
            <LoginOverlay />
        </OverlayProvider>
    )
}

export default Dashboard