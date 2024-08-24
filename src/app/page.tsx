import Dashboard from "@/components/Dashboard";
import LandingPage from "@/components/landing/LandingPage";


export default function Home() {
  const user = true;
  return (
    <main className="w-full bg-white overflow-hidden">
      
        
      { user ?
        <LandingPage /> : <Dashboard />
      }
      


    </main>
  );
}
