"use client";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

export default function ParticlesBackground() {
  const particlesInit = async (main) => {
    await loadFull(main);
  };

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      options={{
        fullScreen: { enable: true, zIndex: -1 },
        background: { color: "#f1f5f9" }, // bg-slate-100
        particles: {
          color: { value: "#000" },
          links: { enable: true, color: "#000", distance: 150 },
          move: { enable: true, speed: 1 },
          number: { value: 60 },
          size: { value: { min: 1, max: 5 } },
        },
      }}
    />
  );
}
