import LandingTitle from "@/components/LandingTitle";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import Image from "next/image";

export default function Home() {
  return (
    <main className="w-screen h-[200vh] bg-white ">
      <div className="h-36" />
      <MaxWidthWrapper>
        <LandingTitle />
        


      </MaxWidthWrapper>
    </main>
  );
}
