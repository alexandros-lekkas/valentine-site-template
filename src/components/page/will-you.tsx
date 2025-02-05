"use client";

import * as React from "react";

import { motion } from "framer-motion";
import confetti from "canvas-confetti";

import { BlurFade } from "../ui/blur-fade";

export function WillYou() {
  const [shake, setShake] = React.useState(false);

  const handleClick = () => {
    const scalar = 2;
    const heart = confetti.shapeFromText({ text: "💖", scalar });

    const defaults = {
      spread: 360,
      ticks: 60,
      gravity: 0,
      decay: 0.96,
      startVelocity: 20,
      shapes: [heart],
      scalar,
    };

    const shoot = () => {
      confetti({
        ...defaults,
        particleCount: 30,
      });

      confetti({
        ...defaults,
        particleCount: 5,
      });

      confetti({
        ...defaults,
        particleCount: 15,
        scalar: scalar / 2,
        shapes: ["circle"],
      });
    };

    setTimeout(shoot, 0);
    setTimeout(shoot, 100);
    setTimeout(shoot, 200);
  };

  return (
    <div className="container mx-auto justify-center my-36">
      <BlurFade delay={0.25} inView>
        <h2 className="text-4xl font-bold text-center mb-4">
          Will you be my valentine?
        </h2>

        <div className="flex flex-row gap-4 justify-center">
          <div className="relative justify-center">
            <button
              className="rounded-full bg-green-400 px-12 py-2 font-semibold text-xl"
              onClick={handleClick}
            >
              Yes
            </button>
          </div>
          <motion.button
            className="px-12 py-2 text-white bg-red-500 rounded-full text-lg font-semibold"
            animate={shake ? { x: [-5, 5, -5, 5, 0] } : {}}
            transition={{ duration: 0.3, repeat: 1 }}
            onClick={() => {
              setShake(true);
              setTimeout(() => setShake(false), 300);
            }}
          >
            No
          </motion.button>
        </div>
      </BlurFade>
    </div>
  );
}
