import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import logo from "../assets/logo.png";

const navLinks = [
  { label: "Giải pháp", href: "#solutions", hasDropdown: true },
  { label: "Cách hoạt động", href: "#how-it-works", hasDropdown: true },
  { label: "Bảng giá", href: "#pricing", hasDropdown: false },
  { label: "Đối tượng", href: "#audience", hasDropdown: false },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 16);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.header
      className={`fixed left-0 top-0 z-50 w-full transition-all duration-300 ${
        isScrolled
          ? "border-b border-ink/10 bg-surface-cream-strong/72 shadow-[0_18px_50px_rgba(16,16,16,0.10)] backdrop-blur-2xl"
          : "border-b border-transparent bg-white/10 backdrop-blur-[6px]"
      }`}
      initial={{ opacity: 0, y: -14 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.42, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="grid h-nav-h w-full grid-cols-[1fr_auto] items-center gap-4 px-page-x lg:grid-cols-[minmax(180px,1fr)_auto_minmax(180px,1fr)]">
        <a
          href="#top"
          className="inline-flex w-fit items-center transition-transform duration-200 hover:-translate-y-0.5"
          aria-label="JobFree homepage"
        >
          <img
            src={logo}
            alt="JobFree"
            className="h-10 w-auto object-contain sm:h-11 lg:h-12 xl:h-[62px]"
            draggable={false}
          />
        </a>

        <nav className="hidden items-center justify-center gap-8 lg:flex xl:gap-10">
          {navLinks.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="group inline-flex items-center gap-1.5 text-nav-link font-extrabold text-ink-soft transition-colors duration-200 hover:text-ink"
            >
              <span>{item.label}</span>

              {item.hasDropdown && (
                <svg
                  className="h-3.5 w-3.5 transition-transform duration-200 group-hover:translate-y-0.5"
                  viewBox="0 0 16 16"
                  fill="none"
                  aria-hidden="true"
                >
                  <path
                    d="M4 6L8 10L12 6"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              )}
            </a>
          ))}
        </nav>

        <div className="flex items-center justify-end gap-3">
          <a
            href="#pilot"
            className="hidden items-center gap-2 rounded-pill bg-brand-yellow px-6 py-3 text-nav-link font-black text-ink shadow-[0_8px_22px_rgba(16,16,16,0.12)] transition-all duration-200 hover:-translate-y-0.5 hover:bg-brand-yellow-soft sm:inline-flex"
          >
            Đăng ký pilot
            <svg
              className="h-4 w-4"
              viewBox="0 0 16 16"
              fill="none"
              aria-hidden="true"
            >
              <path
                d="M3 8H12"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              />
              <path
                d="M8.5 4.5L12 8L8.5 11.5"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </a>

          <button
            type="button"
            className={`inline-flex h-11 w-11 items-center justify-center rounded-full border text-ink transition-all duration-200 hover:-translate-y-0.5 lg:hidden ${
              isScrolled
                ? "border-ink/15 bg-white/55 shadow-[0_8px_24px_rgba(16,16,16,0.10)]"
                : "border-ink/15 bg-white/25"
            }`}
            aria-label={isOpen ? "Đóng menu" : "Mở menu"}
            aria-expanded={isOpen}
            onClick={() => setIsOpen((value) => !value)}
          >
            <span className="relative h-4 w-5">
              <span
                className={`absolute left-0 h-0.5 w-5 rounded-full bg-current transition-all duration-200 ${
                  isOpen ? "top-2 rotate-45" : "top-0"
                }`}
              />
              <span
                className={`absolute left-0 top-2 h-0.5 w-5 rounded-full bg-current transition-all duration-200 ${
                  isOpen ? "opacity-0" : "opacity-100"
                }`}
              />
              <span
                className={`absolute left-0 h-0.5 w-5 rounded-full bg-current transition-all duration-200 ${
                  isOpen ? "top-2 -rotate-45" : "top-4"
                }`}
              />
            </span>
          </button>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="border-t border-ink/10 bg-surface-cream-strong/88 px-page-x py-4 shadow-[0_18px_45px_rgba(16,16,16,0.12)] backdrop-blur-2xl lg:hidden"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.24, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="grid gap-2">
              {navLinks.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="flex items-center justify-between rounded-2xl border border-ink/10 bg-white/45 px-4 py-3 text-body-sm font-extrabold text-ink transition-colors hover:bg-white"
                  onClick={() => setIsOpen(false)}
                >
                  <span>{item.label}</span>

                  {item.hasDropdown && (
                    <svg
                      className="h-4 w-4"
                      viewBox="0 0 16 16"
                      fill="none"
                      aria-hidden="true"
                    >
                      <path
                        d="M4 6L8 10L12 6"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  )}
                </a>
              ))}
            </div>

            <div className="mt-4 grid gap-2">
              <a
                href="#partner"
                className="rounded-2xl border border-ink/10 bg-white/45 px-4 py-3 text-center text-body-sm font-extrabold text-ink"
                onClick={() => setIsOpen(false)}
              >
                Trở thành đối tác
              </a>

              <a
                href="#login"
                className="rounded-2xl border border-ink/10 bg-white/45 px-4 py-3 text-center text-body-sm font-extrabold text-ink"
                onClick={() => setIsOpen(false)}
              >
                Đăng nhập
              </a>

              <a
                href="#pilot"
                className="rounded-2xl bg-brand-yellow px-4 py-3 text-center text-body-sm font-black text-ink shadow-[0_8px_22px_rgba(16,16,16,0.12)]"
                onClick={() => setIsOpen(false)}
              >
                Đăng ký pilot →
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
