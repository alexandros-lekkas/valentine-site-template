import * as React from "react";
import { BlurFade } from "../ui/blur-fade";

import { note } from "@/config";

export function Note() {
  return (
    <div className="container mx-auto mb-36">
      <BlurFade delay={0.5} inView>
        <h2 className="text-4xl font-bold text-center mb-4">Note</h2>
      </BlurFade>

      <div className="px-6 font-semibold">
        {note.note.split("\n").map((line, i) => (
          <BlurFade key={i} delay={0.75 + 0.1 * i} inView>
            <React.Fragment>
              {line}
              <br />
              <br />
            </React.Fragment>
          </BlurFade>
        ))}
      </div>
    </div>
  );
}
