import * as React from "react";

import { Heart } from "@phosphor-icons/react/dist/ssr";

import { SparklesText } from "@/components/ui/sparkles-text";

import { main } from "@/config";

export function Main() {
  return (
    <div className="relative mx-auto justify-center items-center flex flex-col h-[75vh] pt-20 overflow-hidden">
      <SparklesText
        text={`I Love You ${main.love_who}`}
        colors={{ first: "#F34444", second: "#ED0388" }}
      />

      <Heart
        className="w-72 h-72 text-red-500 hover:scale-110 transition-all"
        weight="fill"
      />
    </div>
  );
}
