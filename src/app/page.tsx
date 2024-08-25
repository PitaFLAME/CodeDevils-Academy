"use client"

import Dashboard from "@/components/dashboard/Dashboard";
import LandingPage from "@/components/landing/LandingPage";
import { UserProvider, useUser } from "@/components/login/UserContext";

const ContentSwitcher = () => {
  const { hasUser } = useUser();
  return hasUser ? <Dashboard /> : <LandingPage />;
};


export default function Home() {
  
  return (
    <main className="w-full bg-white overflow-x-hidden">
      
      <UserProvider>
        <ContentSwitcher />
      </UserProvider> 

    </main>
  );
}
