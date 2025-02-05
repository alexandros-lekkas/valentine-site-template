import * as React from "react";

import { BlurFade } from "../ui/blur-fade";

export function WillYou() {
  return (
    <div className="container mx-auto justify-center my-36">
      <BlurFade delay={0.25} inView>
        <h2 className="text-4xl font-bold text-center mb-4">Will you be my valentine?</h2>

        <div className="flex flex-row gap-3 justify-center">

        </div>
      </BlurFade>
    </div>
  );
}
