import { useOverlay } from "./account/OverlayContext"



const ScreenDimmer = () => {

    const { isOverlayOpen } = useOverlay();

    return (
        <div className={`fixed w-full h-full -m-20 bg-zinc-600 opacity-35
            transition-opacity duration-500
            ${isOverlayOpen ? '' : 'hidden' }`} /> 
    )
}

export default ScreenDimmer