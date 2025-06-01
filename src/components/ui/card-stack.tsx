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
    <div className="relative w-60  md:w-96">
      {cards.map((card, index) => {
        return (
          <motion.div
            key={card.id}
            className="absolute bg-gradient-to-br from-[#1a1a1a] to-[#0f0f0f] text-zinc-200 h-48 w-60 md:h-60 md:w-96 rounded-3xl p-5 shadow-xl border border-zinc-800 backdrop-blur-md flex flex-col justify-between transition-all duration-300"
            style={{
              transformOrigin: "top center",
            }}
            animate={{
              top: index * -CARD_OFFSET,
              scale: 1 - index * SCALE_FACTOR,
              zIndex: cards.length - index,
            }}
          >
            <div className="leading-relaxed outfit-font text-md">{card.content}</div>
            <div className="pt-4">
              <p className="text-purple-400 font-semibold text-sm outfit-bold">
                {card.name}
              </p>
              <p className="text-zinc-500 text-xs outfit-font">{card.designation}</p>
            </div>
          </motion.div>
        );
      })}
    </div>
  );

};
