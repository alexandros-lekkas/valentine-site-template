import * as React from "react";

import { Marquee } from "../ui/marquee";

const moments = [
  {
    img: "/moments/1.webp",
    caption: "I Love You",
  },
];

const firstRow = moments.slice(0, moments.length / 2);
const secondRow = moments.slice(moments.length / 2);

function MomentCard({ img, caption }: { img: string; caption: string }) {
  return (
    <div className="relative w-full h-64 md:h-96">
      <img src={img} alt={caption} className="object-cover w-full h-full" />
      <div className="absolute bottom-0 left-0 right-0 p-4 text-xl font-bold text-white bg-black bg-opacity-50">
        {caption}
      </div>
    </div>
  );
}

export function Moments() {
  return (
    <div className="container mx-auto justify-center py-20">
      <Marquee pauseOnHover className="[--duration:20s]">
        {firstRow.map((moment, i) => (
          <MomentCard key={i} {...moment} />
        ))}
      </Marquee>

      <Marquee reverse pauseOnHover className="[--duration:20s]">
        {secondRow.map((moment, i) => (
          <MomentCard key={i} {...moment} />
        ))}
      </Marquee>
    </div>
  );
}
