import MaxWidthWrapper from "../MaxWidthWrapper"


const DashboardTitle = () => {

    {/* TODO: Fetch username from auth user */}
    const username = "{name}"

    return (
        <MaxWidthWrapper className="mb-20">
            <h1 className="text-asumaroon text-7xl font-neue-haas-black">
                Welcome, &nbsp;{username}
            </h1>
        </MaxWidthWrapper>
    )
}

export default DashboardTitle