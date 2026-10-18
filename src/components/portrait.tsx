"use client";

import Image from "next/image";
import { useState } from "react";
import { profile } from "@/data/cv";

const PORTRAIT_SOURCES = ["/portrait-cut.webp", "/portrait.svg"];

export default function Portrait() {
  const [sourceIndex, setSourceIndex] = useState(0);
  const src = PORTRAIT_SOURCES[sourceIndex];

  return (
    <div className="relative mx-auto w-full max-w-md">
      <div
        className="arch-mask relative aspect-3/4 overflow-hidden bg-accent"
        style={{ boxShadow: "0 30px 80px -40px var(--glow)" }}
      >
        <div className="dot-grid absolute inset-0 opacity-25" aria-hidden />
        <Image
          src={src}
          alt={`${profile.fullName} portrait`}
          fill
          priority
          sizes="(max-width: 1024px) 90vw, 40vw"
          className="relative object-cover object-[50%_15%]"
          onError={() =>
            setSourceIndex((index) => Math.min(index + 1, PORTRAIT_SOURCES.length - 1))
          }
        />
      </div>
      <span className="absolute bottom-5 left-5 rounded-md bg-background/90 px-3 py-1.5 font-mono text-[10px] uppercase tracking-[0.25em] text-foreground backdrop-blur">
        {profile.photoDate}
      </span>
    </div>
  );
}
