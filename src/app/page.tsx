import LandingPage from "@/components/landing/LandingPage";


export default function Home() {
  const user = true;
  return (
    <main className="w-full bg-white overflow-hidden">
      <div className="h-36" /> {/* Spacer for navbar */}
        
      { user?
        <LandingPage /> : <></>
      }
      


    </main>
  );
}
