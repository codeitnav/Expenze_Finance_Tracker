"use client";

import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Highlight } from "./ui/hero-highlight";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-background text-foreground">

      {/* Decorative Background Shape */}
      <div className="absolute -top-32 -left-32 w-[600px] h-[600px] rounded-full opacity-30 blur-3xl z-0" />
      
      <div className="flex flex-col-reverse sm:flex-row items-center justify-center relative z-10 w-full max-w-7xl mx-auto px-6 py-12">
        {/* Left Side - Text */}
        <div className="flex-1 flex flex-col items-center sm:items-start text-center sm:text-left space-y-6">
          <h1 className="text-4xl md:text-6xl font-extrabold text-neutral-900 dark:text-white leading-tight">
            Take Control of Your Finances
          </h1>
          <Highlight className="inline-block  dark:text-white text-2xl md:text-4xl px-4 py-2 rounded-lg shadow-md mb-2">
            with Smart Solutions
          </Highlight>
          <Link href="/dashboard">
            <Button
              size="lg"
              className="px-12 py-4 mt-4 text-lg font-semibold bg-purple-700 hover:bg-purple-800 text-white shadow-lg transition"
            >
              Get Started
            </Button>
          </Link>
        </div>
        {/* Right Side - Hero Image */}
        <div className="flex-1 flex justify-center mb-10 sm:mb-0">
          <div className="relative  w-[450px] h-[350px] md:w-[600px] md:h-[480px] lg:w-[650px] lg:h-[520px]">
            <Image
              src="/Hero_img.png"
              alt="Hero Image"
              fill
              className="object-contain drop-shadow-xl"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
