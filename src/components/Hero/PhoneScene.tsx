import { useRef, useState } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";

import {
  WorkerFoundCard,
  RatingCard,
  NearbyWorkerCard,
  MatchTimeCard,
} from "./FloatingCard";
import PhoneMockup, {
  HomeScreenContent,
  MatchingScreenContent,
  TrackingScreenContent,
} from "./PhoneMockup";

export default function PhoneScene() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springX = useSpring(mouseX, { stiffness: 60, damping: 20 });
  const springY = useSpring(mouseY, { stiffness: 60, damping: 20 });

  const rotateX = useTransform(springY, [-0.5, 0.5], [4, -4]);
  const rotateY = useTransform(springX, [-0.5, 0.5], [-6, 6]);

  function handleMouseMove(e: React.MouseEvent<HTMLDivElement>) {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    mouseX.set(x);
    mouseY.set(y);
  }

  function handleMouseLeave() {
    mouseX.set(0);
    mouseY.set(0);
    setIsHovered(false);
  }

  return (
    <div
      ref={containerRef}
      className="relative w-full flex items-center justify-center select-none"
      style={{ height: "600px", perspective: "1200px" }}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
    >
      {/* Radial glow behind center phone */}
      <div
        className="absolute pointer-events-none"
        style={{
          width: "500px",
          height: "500px",
          background:
            "radial-gradient(ellipse at center, rgba(255,212,0,0.25) 0%, rgba(255,212,0,0.15) 50%, transparent 75%)",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          filter: "blur(20px)",
        }}
      />

      {/* Blurred decorative circles */}
      <div
        className="absolute pointer-events-none rounded-full"
        style={{
          width: "200px",
          height: "200px",
          background: "rgba(255,212,0,0.3)",
          top: "5%",
          right: "8%",
          filter: "blur(60px)",
        }}
      />
      <div
        className="absolute pointer-events-none rounded-full"
        style={{
          width: "150px",
          height: "150px",
          background: "rgba(255,255,255,0.5)",
          bottom: "10%",
          left: "5%",
          filter: "blur(50px)",
        }}
      />

      {/* Phones container with parallax */}
      <motion.div
        className="relative"
        style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
      >
        {/* Left phone */}
        <PhoneWithFloat
          delay={0}
          floatDuration={4.2}
          style={{
            position: "absolute",
            width: "175px",
            left: "-220px",
            top: "50%",
            transform: "translateY(-50%)",
            transformStyle: "preserve-3d",
          }}
          motionStyle={{
            rotateY: 25,
            rotateZ: -8,
            scale: 0.85,
            x: isHovered ? -6 : 0,
          }}
          zIndex={10}
        >
          <PhoneMockup>
            <HomeScreenContent />
          </PhoneMockup>
        </PhoneWithFloat>

        {/* Center phone */}
        <PhoneWithFloat
          delay={0.15}
          floatDuration={5}
          style={{
            position: "relative",
            width: "220px",
            transformStyle: "preserve-3d",
          }}
          motionStyle={{
            rotateY: 0,
            rotateZ: 0,
            scale: 1.1,
            z: 40,
          }}
          zIndex={20}
        >
          <PhoneMockup>
            <MatchingScreenContent />
          </PhoneMockup>
        </PhoneWithFloat>

        {/* Right phone */}
        <PhoneWithFloat
          delay={0.3}
          floatDuration={3.8}
          style={{
            position: "absolute",
            width: "175px",
            right: "-220px",
            top: "50%",
            transform: "translateY(-50%)",
            transformStyle: "preserve-3d",
          }}
          motionStyle={{
            rotateY: -25,
            rotateZ: 8,
            scale: 0.85,
            x: isHovered ? 6 : 0,
          }}
          zIndex={10}
        >
          <PhoneMockup>
            <TrackingScreenContent />
          </PhoneMockup>
        </PhoneWithFloat>
      </motion.div>

      {/* Floating Cards */}
      <div className="absolute top-8 left-[8%] z-30 pointer-events-none">
        <WorkerFoundCard delay={0.6} />
      </div>

      <div className="absolute bottom-[22%] left-[2%] z-30 pointer-events-none">
        <RatingCard delay={0.8} />
      </div>

      <div className="absolute top-[18%] right-[6%] z-30 pointer-events-none">
        <NearbyWorkerCard delay={1.0} />
      </div>

      <div className="absolute bottom-[28%] right-[2%] z-30 pointer-events-none">
        <MatchTimeCard delay={1.2} />
      </div>
    </div>
  );
}

interface PhoneWithFloatProps {
  children: React.ReactNode;
  delay: number;
  floatDuration: number;
  style: React.CSSProperties;
  motionStyle: Record<string, number>;
  zIndex: number;
}

function PhoneWithFloat({
  children,
  delay,
  floatDuration,
  style,
  motionStyle,
  zIndex,
}: PhoneWithFloatProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40, scale: 0.9 }}
      animate={{
        opacity: 1,
        y: 0,
        scale: motionStyle.scale ?? 1,
        rotateY: motionStyle.rotateY ?? 0,
        rotateZ: motionStyle.rotateZ ?? 0,
        z: motionStyle.z ?? 0,
        x: motionStyle.x ?? 0,
      }}
      transition={{
        delay,
        duration: 0.9,
        type: "spring",
        stiffness: 100,
        damping: 18,
      }}
      style={{
        ...style,
        zIndex,
        transformStyle: "preserve-3d",
        filter: `drop-shadow(0 35px 60px rgba(0,0,0,0.28)) drop-shadow(0 15px 25px rgba(0,0,0,0.18))`,
      }}
    >
      <motion.div
        animate={{
          y: [0, -14, 0],
          rotateZ: [
            (motionStyle.rotateZ ?? 0) - 0.5,
            (motionStyle.rotateZ ?? 0) + 0.5,
            (motionStyle.rotateZ ?? 0) - 0.5,
          ],
        }}
        transition={{
          y: {
            duration: floatDuration,
            repeat: Infinity,
            ease: "easeInOut",
            delay,
          },
          rotateZ: {
            duration: floatDuration * 1.3,
            repeat: Infinity,
            ease: "easeInOut",
            delay,
          },
        }}
      >
        {children}
      </motion.div>
    </motion.div>
  );
}
