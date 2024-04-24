import Link from "next/link";
import React from "react";
import Particles from "./components/particles";

const navigation = [
  { name: "Projects", href: "/projects" },
  { name: "Contact", href: "/contact" },
];

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center w-screen h-screen overflow-hidden bg-gradient-to-tl from-black via-zinc-700/20 to-black">
      <nav className="my-16 animate-fade-in">
        <ul className="flex items-center justify-center gap-4">
          {navigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm duration-500 text-zinc-400 hover:text-zinc-300"
            >
              {item.name}
            </Link>
          ))}
        </ul>
      </nav>
      <div className="hidden w-screen h-px animate-glow md:block animate-fade-left bg-gradient-to-r from-cyan-300/0 via-cyan-300/50 to-cyan-300/0" />
      <Particles
        className="absolute inset-0 -z-10 animate-fade-in"
        quantity={100}
      />
      <h1 className="relative z-10 text-4xl text-transparent duration-1000 bg-gradient-to-tl from-indigo-950 via-cyan-300/20 to-indigo-950 cursor-default text-edge-outline animate-title font-main tracking-tighter sm:text-6xl md:text-9xl whitespace-nowrap bg-clip-text ">
        LEDGIC
        <span className="w-full sm:tracking-[10px] md:tracking-[15px] leading-normal tracking-[5px] text-[6px] md:p-2 text-center bg-gradient-to-tl from-purple-950 font-name via-black/90  to-purple-950  z-10  text-cyan-200 sm:leading-5 sm:text-[8px] p-0 md:text-sm absolute top-[40%] left-0 right-0">
          ANDREAS KONTOS
        </span>
      </h1>

      <div className="hidden w-screen h-px animate-glow md:block animate-fade-right bg-gradient-to-r from-cyan-300/0 via-cyan-300/50 to-cyan-300/0" />
      <div className="my-16 text-center animate-fade-in">
        <h2 className="text-sm text-zinc-400 ">
          An aspring Full-stack developer. My latest creation is the website{" "}
          <Link
            target="_blank"
            href="https://allaboutmoms.vercel.app"
            className="underline duration-500 hover:text-zinc-300"
          >
            allAboutMoms
          </Link>
          .
        </h2>
      </div>
    </div>
  );
}
