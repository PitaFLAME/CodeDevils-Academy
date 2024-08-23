


const LoginOverlay = ({enabled}: {
    enabled?: boolean,
}) => {

    return (
        <div className={`absolute h-[100vh] bg-white right-0 top-0 z-50 border-l-4 border-asumaroon
            md:w-[60vw] lg:w-[616px] xl:w-[860px]
            transition-transform duration-500
            ${enabled ? 'translate-x-0' : 'translate-x-full'} hidden md:block`} >
            <div className="relative h-full w-full">

                <div className="absolute bg-asumaroon-300 right-0 top-0 w-[60%] h-[90%]" />
                <div className="absolute bg-asumaroon-100 left-0 top-0 w-[80%] h-[40%]" />

                <div className="absolute w-full p-12">
                    <h1 className="text-right
                        text-asumaroon md:text-7xl text-5xl font-neue-haas-bold">
                        Level up your</h1>
                    <h1 className="text-right
                        text-asumaroon md:text-7xl text-5xl font-neue-haas-bold">
                        Learning</h1>

                    <div className="mt-40" >
                        <h2 className="text-asumaroon text-lg font-neue-haas-bold" >
                            EMAIL ADDRESS
                        </h2>
                        <input type="email" className="w-full bg-transparent h-8 text-black" />
                        <div className="bg-asumaroon w-full h-1" />
                    </div>
                    
                    <div className="mt-24" >
                        <h2 className="text-asumaroon text-lg font-neue-haas-bold" >
                            PASSWORD
                        </h2>
                        <input type="password" className="w-full bg-transparent h-8 text-black" />
                        <div className="bg-asumaroon w-full h-1" />
                        <div className="flex justify-end w-full">
                            <h2 className="text-asumaroon text-md font-neue-haas-medium text-right
                                hover:underline hover:underline-offset-2 cursor-pointer" >
                                FORGOT PASSWORD
                            </h2>
                        </div>
                    </div>

                    <div className="flex justify-center items-center mt-24 cursor-pointer 
                        w-full h-12 bg-asumaroon text-white text-md font-neue-haas-medium 
                        hover:bg-asumaroon-800 hover:underline hover:underline-offset-2" >
                        Sign In
                    </div>
                    
                    <div className="flex justify-center items-center mt-8 cursor-pointer 
                        w-full h-12 bg-asumaroon-100 text-asumaroon text-md font-neue-haas-medium 
                        hover:bg-zinc-100 hover:underline hover:underline-offset-2" >
                        Create Account
                    </div>




                </div>




            </div>
            
        </div>
    )
}

export default LoginOverlay;
