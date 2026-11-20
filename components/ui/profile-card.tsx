"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import "./profile-card.css";

export default function ProfileCard() {
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const card = cardRef.current;

    if (!card) return;

    const handleMove = (e: MouseEvent) => {
      const rect = card.getBoundingClientRect();

      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      const rotateY = ((x / rect.width) - 0.5) * 18;
      const rotateX = -((y / rect.height) - 0.5) * 18;

      card.style.setProperty("--rotateX", `${rotateX}deg`);
      card.style.setProperty("--rotateY", `${rotateY}deg`);

      card.style.setProperty("--mouseX", `${x}px`);
      card.style.setProperty("--mouseY", `${y}px`);
    };

    const reset = () => {
      card.style.setProperty("--rotateX", "0deg");
      card.style.setProperty("--rotateY", "0deg");

      card.style.setProperty("--mouseX", "50%");
      card.style.setProperty("--mouseY", "50%");
    };

    card.addEventListener("mousemove", handleMove);
    card.addEventListener("mouseleave", reset);

    return () => {
      card.removeEventListener("mousemove", handleMove);
      card.removeEventListener("mouseleave", reset);
    };
  }, []);

  return (
    <div className="profile-wrapper">
      <div className="profile-glow" />

      <div
        ref={cardRef}
        className="profile-card"
      >
        <div className="profile-shine" />

        <Image
          src="/portfolio.jpeg"
          alt="Charan"
          width={430}
          height={434}
          sizes="(max-width: 480px) 280px, (max-width: 768px) 320px, (max-width: 1024px) 360px, 420px"
          priority
          className="profile-image"
        />
      </div>
    </div>
  );
}