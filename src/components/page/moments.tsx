import * as React from "react";

import { Marquee } from "../ui/marquee";
import { BlurFade } from "../ui/blur-fade";

import { moments } from "@/config";

const firstRow = moments.slice(0, moments.length / 2);
const secondRow = moments.slice(moments.length / 2);

function MomentCard({ img, caption }: { img: string; caption: string }) {
  return (
    <div className="relative md:w-full w-64 h-64 md:h-96">
      <img
        src={img}
        alt={caption}
        className="object-cover w-full h-full rounded-xl"
      />
      <div className="absolute bottom-0 left-0 right-0 p-4 text-xl font-bold text-white rounded-lg bg-gradient-to-t from-black/60 to-transparent">
        {caption}
      </div>
    </div>
  );
}

export function Moments() {
  return (
    <div className="container mx-auto justify-center">
      <BlurFade delay={0.75} inView>
        <h2 className="text-4xl font-bold text-center mb-4">Moments</h2>
      </BlurFade>

      <BlurFade delay={0.75} inView>
        <div className="relative flex w-full flex-col items-center justify-center overflow-hidden rounded-lg bg-background">
          <Marquee pauseOnHover className="[--duration:90s]">
            {firstRow.map((moment, i) => (
              <MomentCard key={i} {...moment} />
            ))}
          </Marquee>

          <Marquee reverse pauseOnHover className="[--duration:90s]">
            {secondRow.map((moment, i) => (
              <MomentCard key={i} {...moment} />
            ))}
          </Marquee>

          <div className="pointer-events-none absolute inset-y-0 left-0 w-1/12 bg-gradient-to-r from-background dark:from-background"></div>
          <div className="pointer-events-none absolute inset-y-0 right-0 w-1/12 bg-gradient-to-l from-background dark:from-background"></div>
        </div>
      </BlurFade>
    </div>
  );
}
