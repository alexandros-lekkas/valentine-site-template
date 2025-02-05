import * as React from "react";

import { Heart } from "@phosphor-icons/react/dist/ssr";

import { ScrollProgress } from "@/components/ui/scroll-progress";

export default function Home() {
  return (
    <>
      <ScrollProgress className="from-red-200 via-pink-600 to-red-600"/>
      <div className="container mx-auto">
        <Heart className="w-72 h-72 text-red-500 hover:animate-ping" weight="fill" />
        <h1 className="text-2xl fo">Valentines Site Template</h1>
      </div>
    </>
  );
}
