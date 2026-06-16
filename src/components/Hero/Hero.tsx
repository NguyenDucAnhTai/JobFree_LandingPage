import { motion } from "framer-motion";

import PhoneScene from "./PhoneScene";
import HeroContent from "./HeroContent";

export default function Hero() {
  return (
    <section
      className="relative min-h-screen flex flex-col overflow-hidden"
      style={{
        background:
          "linear-gradient(180deg, #fff680 0%, #eecf5e 45%, #FFD700 100%)",
      }}
    >
      {/* Background layers */}
      <Background />

      {/* Navbar */}
      <Navbar />

      {/* Hero body */}
      <div className="relative z-10 flex-1 flex items-center">
        <div className="w-full max-w-[1280px] mx-auto px-6 lg:px-12 py-12 lg:py-16">
          <div className="grid lg:grid-cols-[40%_60%] gap-8 lg:gap-4 items-center">
            {/* Left: Content */}
            <div className="flex justify-start">
              <HeroContent />
            </div>

            {/* Right: Phone Scene */}
            <div className="flex justify-center lg:justify-end">
              <div className="w-full max-w-[580px]">
                <PhoneScene />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Background() {
  return (
    <>
      {/* texture */}
      <div
        className="absolute inset-0 pointer-events-none opacity-20"
        style={{
          backgroundImage:
            "radial-gradient(rgba(0,0,0,0.08) 1px, transparent 1px)",
          backgroundSize: "30px 30px",
        }}
      />

      {/* glow top right */}
      <div
        className="absolute rounded-full pointer-events-none"
        style={{
          width: "700px",
          height: "700px",
          top: "-250px",
          right: "-200px",
          background: "rgba(255,255,255,0.12)",
          filter: "blur(160px)",
        }}
      />

      {/* glow bottom left */}
      <div
        className="absolute rounded-full pointer-events-none"
        style={{
          width: "500px",
          height: "500px",
          bottom: "-180px",
          left: "-120px",
          background: "rgba(255,196,0,0.15)",
          filter: "blur(150px)",
        }}
      />
    </>
  );
}

function Navbar() {
  const navLinks = [
    "Giải pháp",
    "Cách hoạt động",
    "Dành cho doanh nghiệp",
    "Dành cho Worker",
    "Bảng giá",
  ];

  return (
    <motion.header
      className="relative z-20 w-full"
      initial={{ opacity: 0, y: -16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
    >
      <div
        className="border-b-2 border-brand-black/15"
        style={{
          background: "#FFD700",
          backdropFilter: "blur(12px)",
        }}
      >
        <div className="max-w-[1280px] mx-auto px-6 lg:px-12 h-16 flex items-center justify-between gap-6">
          {/* Logo */}
          <div className="flex items-center gap-8 flex-shrink-0">
            <a href="#" className="flex items-center gap-2 group">
              <div className="w-8 h-8 bg-brand-black rounded-lg flex items-center justify-center">
                <span className="text-brand-yellow font-display font-black text-sm">
                  J
                </span>
              </div>
              <span className="font-display font-black text-brand-black text-xl tracking-tight">
                JobFree
              </span>
            </a>

            {/* Nav links */}
            <nav className="hidden lg:flex items-center gap-6">
              {navLinks.map((link) => (
                <a
                  key={link}
                  href="#"
                  className="text-[0.82rem] font-semibold text-brand-black/70 hover:text-brand-black font-sans transition-colors duration-150 whitespace-nowrap"
                >
                  {link}
                </a>
              ))}
            </nav>
          </div>

          {/* Right side */}
          <div className="flex items-center gap-3 flex-shrink-0">
            <button className="hidden sm:flex items-center gap-1 text-[0.82rem] font-semibold text-brand-black/75 hover:text-brand-black font-sans px-3 py-2 rounded-full hover:bg-brand-black/8 transition-all">
              Trở thành đối tác
              <svg
                className="w-3.5 h-3.5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2.5}
              >
                <polyline points="6 9 12 15 18 9" />
              </svg>
            </button>
            <button className="text-[0.82rem] font-semibold text-brand-black/75 hover:text-brand-black font-sans px-3 py-2 rounded-full hover:bg-brand-black/8 transition-all">
              Đăng nhập
            </button>
            <motion.button
              className="bg-brand-black text-brand-yellow font-display font-bold text-[0.8rem] px-5 py-2.5 rounded-full"
              whileHover={{ scale: 1.04, y: -1 }}
              whileTap={{ scale: 0.96 }}
              style={{ boxShadow: "0 4px 16px rgba(0,0,0,0.18)" }}
            >
              Đăng ký pilot
            </motion.button>
          </div>
        </div>
      </div>
    </motion.header>
  );
}
