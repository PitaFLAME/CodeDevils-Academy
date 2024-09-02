"use client"

import Dashboard from "@/components/dashboard/Dashboard";
import LandingPage from "@/components/landing/LandingPage";
import { UserProvider, useUser } from "@/components/account/UserContext";


export default function Home() {
  
  return (
    <main className="w-full bg-white overflow-x-hidden">
      
      <UserProvider>
        <LandingPage />
      </UserProvider> 

    </main>
  );
}
