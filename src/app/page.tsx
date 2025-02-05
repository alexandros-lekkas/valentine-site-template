import * as React from "react";

import { ScrollProgress } from "@/components/ui/scroll-progress";
import { Main } from "@/components/page/main";
import { Moments } from "@/components/page/moments";
import { WillYou } from "@/components/page/will-you";
import { Note } from "@/components/page/note";

export default function Home() {
  return (
    <>
      <ScrollProgress className="via-red-300 from-pink-600 to-red-600" />

      <Main />
      <Moments />
      <Note />
      <WillYou />
    </>
  );
}
