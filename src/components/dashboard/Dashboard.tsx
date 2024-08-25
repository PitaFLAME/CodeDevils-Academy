import LandingDimmer from "../landing/LandingDimmer"
import LoginOverlay from "../login/LoginOverlay"
import { OverlayProvider } from "../login/OverlayContext"
import MaxWidthWrapper from "../MaxWidthWrapper"
import Navbar from "../Navbar"


const Dashboard = () => {

    return (
        <OverlayProvider>
            <Navbar />
            <div className="h-36" /> {/* Spacer for navbar */}
            <LandingDimmer />
            
            <MaxWidthWrapper>
                <>
                </>
            </MaxWidthWrapper>
            
            <LoginOverlay />
        </OverlayProvider>
    )
}

export default Dashboard