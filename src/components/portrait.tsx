"use client";

import Image from "next/image";
import { useState } from "react";
import { profile } from "@/data/cv";

export default function Portrait() {
  const [src, setSrc] = useState("/portrait.jpg");
  const isPhoto = src.endsWith(".jpg");

  return (
    <div className="relative mx-auto w-full max-w-md">
      <div
        className="arch-mask relative aspect-3/4 overflow-hidden bg-accent"
        style={{ boxShadow: "0 30px 80px -40px var(--glow)" }}
      >
        <Image
          src={src}
          alt={`${profile.fullName} portrait`}
          fill
          priority
          sizes="(max-width: 1024px) 90vw, 40vw"
          className={
            isPhoto
              ? "object-cover object-[50%_20%] grayscale contrast-110 brightness-105 mix-blend-multiply"
              : "object-cover"
          }
          onError={() => setSrc("/portrait.svg")}
        />
        {isPhoto && (
          <>
            <div className="dot-grid pointer-events-none absolute inset-0 opacity-15" aria-hidden />
            <div
              className="pointer-events-none absolute inset-0 bg-gradient-to-t from-accent/40 via-transparent to-transparent"
              aria-hidden
            />
          </>
        )}
      </div>
      <span className="absolute bottom-5 left-5 rounded-md bg-background/90 px-3 py-1.5 font-mono text-[10px] uppercase tracking-[0.25em] text-foreground backdrop-blur">
        {profile.photoDate}
      </span>
    </div>
  );
}
