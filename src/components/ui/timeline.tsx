"use client";
import React from "react";

interface TimelineEntry {
  title: string;
  content: React.ReactNode;
}

export const HorizontalTimeline = ({ data }: { data: TimelineEntry[] }) => {
  return (
    <div className="overflow-x-auto py-8 px-4 bg-[#0a0a0a]">
      <div className="flex gap-8 min-w-max">
        {data.map((item, index) => (
          <div
            key={index}
            className="flex flex-col items-center text-center text-white min-w-[200px]"
          >
            <div className="w-8 h-8 rounded-full bg-purple-600 mb-4" />
            <h3 className="font-bold text-lg mb-2">{item.title}</h3>
            <div className="text-sm text-neutral-300">{item.content}</div>
          </div>
        ))}
      </div>
    </div>
  );
};
