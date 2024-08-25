import ContentSwitcher from "@/components/ContentSwitcher";
import Dashboard from "@/components/Dashboard";
import LandingPage from "@/components/landing/LandingPage";
import { UserProvider } from "@/components/login/UserContext";




export default function Home() {
  
  return (
    <main className="w-full bg-white overflow-x-hidden">
      
      <UserProvider>
        <ContentSwitcher />
      </UserProvider> 

    </main>
  );
}
