import Image from "next/image";
import { profile } from "@/data/cv";

export default function Portrait() {
  return (
    <div className="relative mx-auto w-full max-w-md">
      <div className="arch-mask relative aspect-3/4 overflow-hidden bg-accent">
        <Image
          src="/portrait.svg"
          alt={`${profile.fullName} portrait`}
          fill
          priority
          sizes="(max-width: 1024px) 90vw, 40vw"
          className="object-cover"
        />
      </div>
      <span className="absolute bottom-5 left-5 rounded-md bg-background/90 px-3 py-1.5 font-mono text-[10px] uppercase tracking-[0.25em] text-foreground backdrop-blur">
        {profile.photoDate}
      </span>
    </div>
  );
}
