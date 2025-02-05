import * as React from "react";

import { Heart } from "@phosphor-icons/react/dist/ssr";

import { SparklesText } from "@/components/ui/sparkles-text";
import { BlurFade } from "../ui/blur-fade";

import { main } from "@/config";

export function Main() {
  return (
    <div className="container mx-auto justify-center items-center flex flex-col h-[75vh] pt-20 overflow-hidden">
      <BlurFade delay={0.25} inView>
        <SparklesText
          text={`I Love You ${main.love_who}`}
          colors={{ first: "#F34444", second: "#ED0388" }}
          className="sm:text-7xl text-6xl text-center"
        />
      </BlurFade>

      <BlurFade delay={0.25} inView>
        <Heart
          className="sm:w-72 sm:h-72 w-36 h-36 text-red-500 hover:scale-110 transition-all"
          weight="fill"
        />
      </BlurFade>
    </div>
  );
}
