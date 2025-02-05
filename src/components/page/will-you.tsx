"use client";

import * as React from "react";

import { motion } from "framer-motion";
import confetti from "canvas-confetti";

import { BlurFade } from "../ui/blur-fade";

export function WillYou() {
  const [yesShake, setYesShake] = React.useState(false);
  const [noShake, setNoShake] = React.useState(false);

  const handleClick = () => {
    setYesShake(true);

    const scalar = 6;

    const heartSparkle = confetti.shapeFromText({ text: "💖", scalar });
    const heart = confetti.shapeFromText({ text: "❤️", scalar });
    const star = confetti.shapeFromText({ text: "⭐", scalar });

    const defaults = {
      spread: 360,
      ticks: 60,
      gravity: 0,
      decay: 0.96,
      startVelocity: 20,
      shapes: [heartSparkle, heart, star],
      scalar,
    };

    const shoot = () => {
      confetti({
        ...defaults,
        particleCount: 30,
      });
    };

    setTimeout(shoot, 0);
    setTimeout(shoot, 100);
    setTimeout(shoot, 200);

    setTimeout(() => setYesShake(false), 300);
  };

  return (
    <div className="container mx-auto justify-center my-36">
      <BlurFade delay={0.25} inView>
        <h2 className="sm:text-4xl text-3xl font-bold text-center mb-4">
          Will you be my valentine?
        </h2>

        <div className="flex flex-row gap-4 justify-center">
          <motion.button
            className="rounded-full bg-green-400 px-12 py-2 font-semibold text-xl"
            animate={yesShake ? { y: [-5, 5, -5, 5, 0] } : {}}
            onClick={handleClick}
          >
            Yes
          </motion.button>

          <motion.button
            className="px-12 py-2 text-white bg-red-500 rounded-full text-lg font-semibold"
            animate={noShake ? { x: [-5, 5, -5, 5, 0] } : {}}
            transition={{ duration: 0.3, repeat: 1 }}
            onClick={() => {
              setNoShake(true);
              setTimeout(() => setNoShake(false), 300);
            }}
          >
            No
          </motion.button>
        </div>
      </BlurFade>
    </div>
  );
}
