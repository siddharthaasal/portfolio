"use client";
import { useEffect, useState } from "react";
import { motion } from "motion/react";

let interval: any;

type Card = {
  id: number;
  name: string;
  designation: string;
  content: React.ReactNode;
};

export const CardStack = ({
  items,
  offset,
  scaleFactor,
}: {
  items: Card[];
  offset?: number;
  scaleFactor?: number;
}) => {
  const CARD_OFFSET = offset || 10;
  const SCALE_FACTOR = scaleFactor || 0.06;
  const [cards, setCards] = useState<Card[]>(items);

  useEffect(() => {
    startFlipping();

    return () => clearInterval(interval);
  }, []);
  const startFlipping = () => {
    interval = setInterval(() => {
      setCards((prevCards: Card[]) => {
        const newArray = [...prevCards]; // create a copy of the array
        newArray.unshift(newArray.pop()!); // move the last element to the front
        return newArray;
      });
    }, 5000);
  };

  return (
    <div className="relative w-[90vw] max-w-md mx-auto max-h-[80vh]">
      {cards.map((card, index) => (
        <motion.div
          key={card.id}
          className="absolute bg-gradient-to-br from-[#1a1a1a] to-[#0f0f0f] text-zinc-200 w-full min-h-48 md:min-h-60 rounded-3xl p-5 shadow-xl border border-zinc-800 backdrop-blur-md flex flex-col justify-between transition-all duration-300"
          style={{
            transformOrigin: "top center",
          }}
          animate={{
            top: index * -CARD_OFFSET,
            scale: 1 - index * SCALE_FACTOR,
            zIndex: cards.length - index,
          }}
        >
          <div className="leading-relaxed outfit-font text-sm sm:text-md break-words">
            {card.content}
          </div>
          <div className="pt-4">
            <p className="text-purple-400 font-semibold text-sm outfit-bold">{card.name}</p>
            <p className="text-zinc-500 text-xs outfit-font">{card.designation}</p>
          </div>
        </motion.div>
      ))}
    </div>
  );
};
