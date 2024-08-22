import LandingImageCards from "@/components/landing/LandingImageCards";
import LandingTitle from "@/components/landing/LandingTitle";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import { ArrowRight, Backpack } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="w-full bg-white">
      <div className="h-36" />
      <MaxWidthWrapper>
        
        <LandingTitle />
        <LandingImageCards />

        

      </MaxWidthWrapper>
    </main>
  );
}
