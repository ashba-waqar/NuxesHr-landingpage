"use client";

import React, { useRef, useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import * as THREE from "three";

export interface WovenLightHeroProps {
  headline?: string;
  subheadline?: string;
  primaryButtonText?: string;
  primaryButtonHref?: string;
  secondaryButtonText?: string;
  secondaryButtonHref?: string;
  showNav?: boolean;
  theme?: "brand" | "rainbow";
  className?: string;
}

// --- Main Hero Component ---
export const WovenLightHero: React.FC<WovenLightHeroProps> = ({
  headline = "One workspace for every HR workflow",
  subheadline = "Six integrated modules replace the typical HR tool stack. Built for multi-tenant consulting firms, internal HR teams, and growing companies.",
  primaryButtonText = "Book a discovery call",
  primaryButtonHref = "/book-a-call",
  secondaryButtonText = "Try the demo",
  secondaryButtonHref = "/platform/people",
  showNav = false,
  theme = "brand",
  className = "",
}) => {
  const textControls = useAnimation();
  const buttonControls = useAnimation();

  useEffect(() => {
    // Add Google Fonts
    const link = document.createElement("link");
    link.href =
      "https://fonts.googleapis.com/css2?family=Bricolage+Grotesque:opsz,wght@12..96,600;700;800&family=Figtree:wght@400;500;600&family=Playfair+Display:wght@700&family=Inter:wght@400;600&display=swap";
    link.rel = "stylesheet";
    document.head.appendChild(link);

    textControls.start((i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.08 + 0.3,
        duration: 0.9,
        ease: [0.2, 0.65, 0.3, 0.9],
      },
    }));

    buttonControls.start({
      opacity: 1,
      transition: { delay: 1.2, duration: 0.8 },
    });

    return () => {
      if (document.head.contains(link)) {
        document.head.removeChild(link);
      }
    };
  }, [textControls, buttonControls]);

  return (
    <div
      className={`relative flex min-h-[90vh] md:min-h-screen w-full flex-col items-center justify-center overflow-hidden bg-[var(--bg)] text-[var(--ink)] ${className}`}
    >
      <WovenCanvas theme={theme} />
      {showNav && <HeroNav />}

      <div className="relative z-10 mx-auto flex max-w-4xl flex-col items-center justify-center px-4 pt-20 pb-12 sm:pt-28 sm:pb-16 md:pt-32 text-center">
        <h1
          className="font-display text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-[var(--ink)] max-w-2xl leading-[1.2]"
          style={{
            textShadow:
              "0 0 35px rgba(247, 242, 243, 0.95), 0 2px 14px rgba(168, 92, 68, 0.18)",
          }}
        >
          {headline.split(" ").map((word, i) => (
            <span key={i} className="inline-block whitespace-nowrap">
              {word.split("").map((char, j) => (
                <motion.span
                  key={j}
                  custom={i * 4 + j}
                  initial={{ opacity: 0, y: 25 }}
                  animate={textControls}
                  style={{ display: "inline-block" }}
                >
                  {char}
                </motion.span>
              ))}
              {i < headline.split(" ").length - 1 && <span>&nbsp;</span>}
            </span>
          ))}
        </h1>

        <motion.p
          custom={headline.length}
          initial={{ opacity: 0, y: 20 }}
          animate={textControls}
          className="mx-auto mt-5 max-w-xl text-sm sm:text-base md:text-lg font-semibold leading-relaxed text-[#23121f] dark:text-[#f8eff3]"
          style={{
            fontFamily: "var(--font-body), 'Figtree', 'Inter', sans-serif",
            textShadow:
              "0 0 20px rgba(247, 242, 243, 0.95), 0 1px 4px rgba(247, 242, 243, 0.9)",
          }}
        >
          {subheadline}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={buttonControls}
          className="mt-8 sm:mt-10 flex flex-wrap items-center justify-center gap-4"
        >
          {primaryButtonText && (
            <a
              href={primaryButtonHref}
              className="group relative inline-flex items-center gap-2 overflow-hidden rounded-xl bg-[var(--ink)] px-7 py-3.5 text-sm font-semibold text-[var(--bg)] shadow-lg shadow-[var(--ink)]/10 transition-all hover:scale-[1.02] hover:shadow-xl active:scale-[0.98]"
            >
              <span className="relative z-10 flex items-center gap-2">
                {primaryButtonText}
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  className="transition-transform duration-300 group-hover:translate-x-1"
                >
                  <path
                    d="M3 8h10M9 4l4 4-4 4"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
              <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
            </a>
          )}

          {secondaryButtonText && (
            <a
              href={secondaryButtonHref}
              className="inline-flex items-center gap-2 rounded-xl border border-[var(--line)] bg-[var(--surface)]/85 px-7 py-3.5 text-sm font-semibold text-[var(--ink)] backdrop-blur-md transition-all hover:border-[var(--halo)] hover:bg-[var(--surface)] hover:scale-[1.02] active:scale-[0.98] shadow-sm"
            >
              {secondaryButtonText}
            </a>
          )}
        </motion.div>
      </div>

      {/* Subtle bottom gradient to blend seamlessly into the next page section */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-[var(--bg)] to-transparent z-10" />
    </div>
  );
};

// --- Navigation Component ---
const HeroNav = () => {
  return (
    <motion.nav
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { delay: 0.5, duration: 1 } }}
      className="absolute top-0 left-0 right-0 z-20 p-6"
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <div className="flex items-center gap-2">
          <span className="text-2xl font-bold text-[var(--halo)]">⎎</span>
          <span
            className="font-soria text-2xl font-bold tracking-tight text-[var(--ink)]"
          >
            NexusHR
          </span>
        </div>
      </div>
    </motion.nav>
  );
};

// --- Three.js Canvas Component ---
const WovenCanvas: React.FC<{ theme?: "brand" | "rainbow" }> = ({
  theme = "brand",
}) => {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!mountRef.current) return;
    const currentMount = mountRef.current;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    camera.position.z = 4.8;

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    currentMount.appendChild(renderer.domElement);

    const mouse = new THREE.Vector2(0, 0);
    const clock = new THREE.Clock();

    const isDarkMode =
      window.matchMedia &&
      window.matchMedia("(prefers-color-scheme: dark)").matches;

    // --- Woven Silk Geometry & Particles ---
    const particleCount = 42000;
    const positions = new Float32Array(particleCount * 3);
    const originalPositions = new Float32Array(particleCount * 3);
    const colors = new Float32Array(particleCount * 3);
    const velocities = new Float32Array(particleCount * 3);

    const geometry = new THREE.BufferGeometry();
    const torusKnot = new THREE.TorusKnotGeometry(1.6, 0.48, 220, 32);

    // Halo HR brand color palette: terracotta (#a85c44), rose (#e08d79), warm plum (#5e2e46), amber highlight (#f2ad85)
    const brandPalette = [
      new THREE.Color("#a85c44"), // halo terracotta
      new THREE.Color("#d08466"), // warm glow
      new THREE.Color("#853c48"), // plum rose
      new THREE.Color("#e89f82"), // apricot glow
      new THREE.Color("#562b42"), // deep ink plum
      new THREE.Color("#f7d6cb"), // pearl light highlight
    ];

    for (let i = 0; i < particleCount; i++) {
      const vertexIndex = i % torusKnot.attributes.position.count;
      const x = torusKnot.attributes.position.getX(vertexIndex);
      const y = torusKnot.attributes.position.getY(vertexIndex);
      const z = torusKnot.attributes.position.getZ(vertexIndex);

      // Add gentle organic displacement
      const jitter = 0.05;
      const px = x + (Math.random() - 0.5) * jitter;
      const py = y + (Math.random() - 0.5) * jitter;
      const pz = z + (Math.random() - 0.5) * jitter;

      positions[i * 3] = px;
      positions[i * 3 + 1] = py;
      positions[i * 3 + 2] = pz;
      originalPositions[i * 3] = px;
      originalPositions[i * 3 + 1] = py;
      originalPositions[i * 3 + 2] = pz;

      const color = new THREE.Color();
      if (theme === "brand") {
        const baseColor =
          brandPalette[Math.floor(Math.random() * brandPalette.length)];
        color.copy(baseColor);
        // Subtle luminosity variation
        color.offsetHSL(
          (Math.random() - 0.5) * 0.03,
          (Math.random() - 0.5) * 0.1,
          (Math.random() - 0.5) * 0.1
        );
      } else {
        color.setHSL(Math.random(), 0.8, isDarkMode ? 0.5 : 0.7);
      }

      colors[i * 3] = color.r;
      colors[i * 3 + 1] = color.g;
      colors[i * 3 + 2] = color.b;

      velocities[i * 3] = 0;
      velocities[i * 3 + 1] = 0;
      velocities[i * 3 + 2] = 0;
    }

    geometry.setAttribute("position", new THREE.BufferAttribute(positions, 3));
    geometry.setAttribute("color", new THREE.BufferAttribute(colors, 3));

    const material = new THREE.PointsMaterial({
      size: 0.024,
      vertexColors: true,
      blending: isDarkMode ? THREE.AdditiveBlending : THREE.NormalBlending,
      transparent: true,
      opacity: isDarkMode ? 0.95 : 0.78,
    });

    const points = new THREE.Points(geometry, material);
    scene.add(points);

    let animationFrameId: number;

    const handleMouseMove = (event: MouseEvent) => {
      mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
      mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;
    };
    window.addEventListener("mousemove", handleMouseMove);

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);
      const elapsedTime = clock.getElapsedTime();

      const mouseWorld = new THREE.Vector3(mouse.x * 3.2, mouse.y * 3.2, 0);

      for (let i = 0; i < particleCount; i++) {
        const ix = i * 3;
        const iy = i * 3 + 1;
        const iz = i * 3 + 2;

        const currentPos = new THREE.Vector3(
          positions[ix],
          positions[iy],
          positions[iz]
        );
        const originalPos = new THREE.Vector3(
          originalPositions[ix],
          originalPositions[iy],
          originalPositions[iz]
        );
        const velocity = new THREE.Vector3(
          velocities[ix],
          velocities[iy],
          velocities[iz]
        );

        const dist = currentPos.distanceTo(mouseWorld);
        if (dist < 1.6) {
          const force = (1.6 - dist) * 0.012;
          const direction = new THREE.Vector3()
            .subVectors(currentPos, mouseWorld)
            .normalize();
          velocity.add(direction.multiplyScalar(force));
        }

        // Return to original position
        const returnForce = new THREE.Vector3()
          .subVectors(originalPos, currentPos)
          .multiplyScalar(0.0014);
        velocity.add(returnForce);

        // Damping
        velocity.multiplyScalar(0.94);

        positions[ix] += velocity.x;
        positions[iy] += velocity.y;
        positions[iz] += velocity.z;

        velocities[ix] = velocity.x;
        velocities[iy] = velocity.y;
        velocities[iz] = velocity.z;
      }
      geometry.attributes.position.needsUpdate = true;

      points.rotation.y = elapsedTime * 0.06;
      points.rotation.x = Math.sin(elapsedTime * 0.04) * 0.15;
      renderer.render(scene, camera);
    };
    animate();

    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };
    window.addEventListener("resize", handleResize);

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("mousemove", handleMouseMove);
      if (currentMount.contains(renderer.domElement)) {
        currentMount.removeChild(renderer.domElement);
      }
      geometry.dispose();
      material.dispose();
      torusKnot.dispose();
      renderer.dispose();
    };
  }, [theme]);

  return (
    <div
      ref={mountRef}
      className="absolute inset-0 z-0 pointer-events-auto opacity-80 dark:opacity-90"
      style={{
        maskImage:
          "radial-gradient(circle at 50% 50%, black 60%, transparent 100%)",
        WebkitMaskImage:
          "radial-gradient(circle at 50% 50%, black 60%, transparent 100%)",
      }}
    />
  );
};

export default WovenLightHero;
