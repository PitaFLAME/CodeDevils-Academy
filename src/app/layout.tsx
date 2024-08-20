import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import localfont from "next/font/local";






const arial = localfont({
  variable: "--font-arial",
  src: '../../public/fonts/ARIAL.ttf',
  style: 'normal',
});

const arialBold = localfont({
  variable: "--font-arial-bold",
  src: '../../public/fonts/ARIALBD.ttf',
  style: 'bold',
});

const arialBlack = localfont({
  variable: "--font-arial-black",
  src: '../../public/fonts/ARIBLK.ttf',
  style: 'black',
});

const arialItalic = localfont({
  variable: "--font-arial-italic",
  src: '../../public/fonts/ARIALI.ttf',
  style: 'italic',
});

const arialBoldItalic = localfont({
  variable: "--font-arial-bold-italic",
  src: '../../public/fonts/ARIALBI.ttf',
  style: 'bold-italic',
});

const arialBlackItalic = localfont({
  variable: "--font-arial-black-italic",
  src: '../../public/fonts/ARIALBLACKITALIC.ttf',
  style: 'black-italic',
});



const neueHaasBlack = localfont({
  variable: "--font-neue-haas-black",
  src: '../../public/fonts/NeueHaasDisplayBlack.ttf',
  style: 'black',
});

const neueHaasBlackItalic = localfont({
  variable: "--font-neue-haas-black-italic",
  src: '../../public/fonts/NeueHaasDisplayBlackItalic.ttf',
  style: 'black-italic',
});

const neueHaasBold = localfont({
  variable: "--font-neue-haas-bold",
  src: '../../public/fonts/NeueHaasDisplayBold.ttf',
  style: 'bold',
});

const neueHaasBoldItalic = localfont({
  variable: "--font-neue-haas-bold-italic",
  src: '../../public/fonts/NeueHaasDisplayBoldItalic.ttf',
  style: 'bold-italic',
});

const neueHaasLight = localfont({
  variable: "--font-neue-haas-light",
  src: '../../public/fonts/NeueHaasDisplayLight.ttf',
  style: 'light',
});

const neueHaasLightItalic = localfont({
  variable: "--font-neue-haas-light-italic",
  src: '../../public/fonts/NeueHaasDisplayLightItalic.ttf',
  style: 'light-italic',
});

const neueHaasMedium = localfont({
  variable: "--font-neue-haas-medium",
  src: '../../public/fonts/NeueHaasDisplayMediu.ttf',
  style: 'medium',
});

const neueHaasMediumItalic = localfont({
  variable: "--font-neue-haas-medium-italic",
  src: '../../public/fonts/NeueHaasDisplayMediumItalic.ttf',
  style: 'medium-italic',
});

const neueHaasRoman = localfont({
  variable: "--font-neue-haas-roman",
  src: '../../public/fonts/NeueHaasDisplayRoman.ttf',
  style: 'roman',
});

const neueHaasRomanItalic = localfont({
  variable: "--font-neue-haas-roman-italic",
  src: '../../public/fonts/NeueHaasDisplayRomanItalic.ttf',
  style: 'roman-italic',
});

const neueHaasThin = localfont({
  variable: "--font-neue-haas-thin",
  src: '../../public/fonts/NeueHaasDisplayThin.ttf',
  style: 'thin',
});

const neueHaasThinItalic = localfont({
  variable: "--font-neue-haas-thin-italic",
  src: '../../public/fonts/NeueHaasDisplayThinItalic.ttf',
  style: 'thin-italic',
});

const neueHaasXThin = localfont({
  variable: "--font-neue-haas-xthin",
  src: '../../public/fonts/NeueHaasDisplayXThin.ttf',
  style: 'thin-xs',
});

const neueHaasXThinItalic = localfont({
  variable: "--font-neue-haas-xthin-italic",
  src: '../../public/fonts/NeueHaasDisplayXThinItalic.ttf',
  style: 'thin-xs-italic',
});

const neueHaasXXThin = localfont({
  variable: "--font-neue-haas-xxthin",
  src: '../../public/fonts/NeueHaasDisplayXXThin.ttf',
  style: 'thin-xxs',
});

const neueHaasXXThinItalic = localfont({
  variable: "--font-neue-haas-xxthin-italic",
  src: '../../public/fonts/NeueHaasDisplayXXThinItalic.ttf',
  style: 'thin-xxs-italic',
});

const inter = Inter({ subsets: ["latin"] });


export const metadata: Metadata = {
  title: "CodeDevils Academy Website",
  description: "Course Material and Resources for leveling up your coding skills",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`
        ${neueHaasBlack.variable}
        ${neueHaasBlackItalic.variable}
        ${neueHaasBold.variable}
        ${neueHaasBoldItalic.variable}
        ${neueHaasLight.variable}
        ${neueHaasLightItalic.variable}
        ${neueHaasMedium.variable}
        ${neueHaasMediumItalic.variable}
        ${neueHaasRoman.variable}
        ${neueHaasRomanItalic.variable}
        ${neueHaasThin.variable}
        ${neueHaasThinItalic.variable}
        ${neueHaasXThin.variable}
        ${neueHaasXThinItalic.variable}
        ${neueHaasXXThin.variable}
        ${neueHaasXXThinItalic.variable}

        ${arial.variable}
        ${arialBold.variable}
        ${arialBlack.variable}
        ${arialItalic.variable}
        ${arialBoldItalic.variable}
        ${arialBlackItalic.variable}
        `}>
      <Navbar />
        {children}</body>
    </html>
  );
}
