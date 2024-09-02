"use client"


import { UserProvider } from "@/components/account/UserContext"
import Dashboard from "@/components/dashboard/Dashboard"



const Home = () => {

    return (
        <main className="w-full bg-white overflow-x-hidden">

            <UserProvider>
                <Dashboard />
            </UserProvider>

        </main>
    )
}

export default Home