import Image from 'next/image'


const Backpack = () => {
    return (
        <div className="absolute right-0 -mt-6">
            <Image 
                src="/assets/backpack.svg"
                alt="Backpack"
                width={100}
                height={100}
                />
        </div>
    )
}

export default Backpack;