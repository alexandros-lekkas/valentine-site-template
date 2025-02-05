"use client";

import { Heart } from "@phosphor-icons/react";

export default function Home() {
  return (
    <>
      <div className="container mx-auto">
        <Heart className="w-72 h-72 text-red-500 hover:animate-ping" weight="fill" />
        <h1 className="text-2xl fo">Valentines Site Template</h1>
      </div>
    </>
  );
}
