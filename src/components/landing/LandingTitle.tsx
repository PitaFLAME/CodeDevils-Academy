import Backpack from "../Backpack"


const LandingTitle = () => {
    return (
        <div className="text-black">
            
            <Backpack />

            <h1 className="flex flex-row 
                text-7xl font-black font-neue-haas-black">
                <div className="flex flex-col" >
                    <h1><span className="text-asumaroon">CodeDevils </span>Academ</h1>
                    <div className="bg-asumaroon w-full h-1.5 -mt-2" />
                    <div className="bg-black w-[80%] h-1.5 mt-1" />
                </div>
                <span>y</span>
            </h1>
            <p className="mt-16 font-neue-haas-bold text-xl">
                <span className="ml-12">Welcome</span> to CodeDevils Academy! 
                &nbsp;This is your gateway to a wealth of knowledge and resources 
                curated by Arizona State University&apos;s premier programming 
                club, CodeDevils. &nbsp;Here, you can enroll in our expertly designed 
                courses and access a wide array of supplemental materials to 
                enhance your learning experience. &nbsp;Whether you&apos;re a beginner 
                or looking to sharpen your skills, CodeDevils Academy is here to 
                support your journey in the world of coding. &nbsp;Dive in and start 
                learning today!
            </p>



        </div>
    )
}

export default LandingTitle