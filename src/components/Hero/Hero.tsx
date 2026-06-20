import { motion } from "framer-motion";
import PhoneScene from "./PhoneScene";
import HeroContent from "./HeroContent";
import logo from "../../assets/logo.png";

export default function Hero() {
  return (
    <section
      className="relative min-h-screen flex flex-col overflow-hidden"
      style={{
        backgroundColor: "#FFD700",
      }}
    >
      <Background />

      <Navbar />

      <div className="relative z-10 flex-1 flex items-center">
        <div className="w-full max-w-page mx-auto px-page-x py-hero-y">
          <div className="grid lg:grid-cols-[46%_54%] gap-10 lg:gap-12 items-center">
            <div className="flex justify-start">
              <HeroContent />
            </div>

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
      {/* Reduce brightness */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: "rgba(17, 17, 17, 0.055)",
        }}
      />

      {/* Subtle warm layer */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: "rgba(184, 134, 11, 0.08)",
        }}
      />

      {/* Soft texture */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.12]"
        style={{
          backgroundImage:
            "radial-gradient(rgba(17,17,17,0.16) 1px, transparent 1px)",
          backgroundSize: "34px 34px",
        }}
      />

      {/* Soft border shade at bottom, not gradient */}
      <div
        className="absolute left-0 right-0 bottom-0 h-[120px] pointer-events-none"
        style={{
          background: "rgba(17, 17, 17, 0.04)",
        }}
      />

      {/* Brand decorative block */}
      <div
        className="absolute pointer-events-none rounded-[48px]"
        style={{
          width: "360px",
          height: "360px",
          right: "-140px",
          top: "130px",
          background: "rgba(17, 17, 17, 0.045)",
          transform: "rotate(18deg)",
        }}
      />

      <div
        className="absolute pointer-events-none rounded-[40px]"
        style={{
          width: "280px",
          height: "280px",
          left: "-120px",
          bottom: "80px",
          background: "rgba(255, 255, 255, 0.12)",
          transform: "rotate(-14deg)",
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
        className="border-b"
        style={{
          background: "rgba(255, 215, 0, 0.88)",
          borderColor: "rgba(17, 17, 17, 0.14)",
          backdropFilter: "blur(12px)",
          WebkitBackdropFilter: "blur(12px)",
          boxShadow: "0 6px 20px rgba(17,17,17,0.08)",
        }}
      >
        <div className="max-w-page mx-auto px-page-x h-nav-h flex items-center justify-between gap-6">
          <div className="flex items-center gap-8 flex-shrink-0">
            <a href="#" className="flex items-center">
              <img
                src={logo}
                alt="JobFree"
                className="h-14 w-auto object-contain"
                draggable={false}
              />
            </a>

            <nav className="hidden lg:flex items-center gap-6">
              {navLinks.map((link) => (
                <a
                  key={link}
                  href="#"
                  className="text-[15px] font-medium tracking-[-0.01em] text-brand-black/80 hover:text-brand-black transition-colors duration-200 whitespace-nowrap"
                >
                  {link}
                </a>
              ))}
            </nav>
          </div>

          <div className="flex items-center gap-3 flex-shrink-0">
            <button className="hidden sm:flex items-center gap-1 text-[0.82rem] font-semibold text-brand-black/75 hover:text-brand-black font-sans px-3 py-2 rounded-full hover:bg-brand-black/[0.08] transition-all">
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

            <button className="text-[0.82rem] font-semibold text-brand-black/75 hover:text-brand-black font-sans px-3 py-2 rounded-full hover:bg-brand-black/[0.08] transition-all">
              Đăng nhập
            </button>

            <motion.button
              className="bg-brand-black text-[#FFD700] font-display font-bold text-[0.8rem] px-5 py-2.5 rounded-full"
              whileHover={{ scale: 1.04, y: -1 }}
              whileTap={{ scale: 0.96 }}
              style={{
                boxShadow:
                  "0 10px 24px rgba(17,17,17,0.22), inset 0 1px 0 rgba(255,255,255,0.12)",
              }}
            >
              Đăng ký pilot
            </motion.button>
          </div>
        </div>
      </div>
    </motion.header>
  );
}
