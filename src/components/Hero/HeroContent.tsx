import { motion, type Variants } from "framer-motion";

const trustItems = [
  "Xử lý nhanh",
  "Kết nối đáng tin cậy",
  "Thanh toán an toàn",
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};

const itemVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 24,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

export default function HeroContent() {
  return (
    <motion.div
      className="flex flex-col items-start gap-7 max-w-xl"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {/* Badge */}
      <motion.div variants={itemVariants}>
        <span className="inline-flex items-center gap-2 bg-brand-black text-white text-[11px] font-bold tracking-[0.12em] uppercase px-4 py-1.5 rounded-full font-display">
          <span className="w-1.5 h-1.5 rounded-full bg-brand-yellow" />
          Nền tảng nhân sự ngắn hạn
        </span>
      </motion.div>

      {/* Headline */}
      <motion.h1
        variants={itemVariants}
        className="font-display font-black text-brand-black leading-[1.04] tracking-[-0.035em]"
        style={{ fontSize: "clamp(2.4rem, 4.5vw, 3.8rem)" }}
      >
        Thiếu người
        <br />
        cho ca gấp?
        <br />
        <span className="relative inline-block">
          Tìm worker
          <motion.span
            className="absolute -bottom-1 left-0 h-[5px] bg-brand-black rounded-full"
            initial={{ scaleX: 0, originX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ delay: 0.9, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            style={{ width: "100%" }}
          />
        </span>{" "}
        phù hợp
        <br />
        nhanh hơn cùng{" "}
        <span className="text-brand-black relative">JobFree.</span>
      </motion.h1>

      {/* Description */}
      <motion.p
        variants={itemVariants}
        className="text-[1.05rem] text-brand-black/65 leading-[1.7] max-w-[440px] font-sans"
      >
        Đăng việc chỉ trong vài phút.{" "}
        <span className="text-brand-black/85 font-semibold">
          JobFree giúp kết nối với worker phù hợp,
        </span>{" "}
        theo dõi tiến độ và thanh toán an toàn.
      </motion.p>

      {/* CTA Buttons */}
      <motion.div variants={itemVariants} className="flex flex-wrap gap-3 pt-1">
        <motion.button
          className="group relative overflow-hidden rounded-full bg-brand-black px-8 py-4 font-display font-bold text-[0.92rem] border-2 border-brand-black"
          whileHover={{ scale: 1.03, y: -2 }}
          whileTap={{ scale: 0.97 }}
          transition={{ type: "spring", stiffness: 400, damping: 25 }}
        >
          {/* Nền vàng - Trượt từ trái qua */}
          <motion.div
            className="absolute inset-0 z-0 bg-brand-yellow"
            initial={{ x: "-100%" }}
            // Sử dụng group-hover để trigger thay vì whileHover trên div con
            variants={{
              hover: { x: 0 },
            }}
            whileHover="hover"
            transition={{ duration: 0.4, ease: "easeOut" }}
          />

          {/* Text */}
          <span className="relative z-10 text-brand-yellow group-hover:text-brand-yellow transition-colors duration-300">
            Đăng ký tuyển người
          </span>
        </motion.button>

        <motion.button
          className="border-2 border-brand-black/20 bg-white/50 backdrop-blur-sm text-brand-black font-display font-bold text-[0.92rem] px-8 py-4 rounded-full hover:bg-white/80 hover:border-brand-black/40 transition-all duration-200"
          whileHover={{ scale: 1.02, y: -2 }}
          whileTap={{ scale: 0.97 }}
          transition={{ type: "spring", stiffness: 400, damping: 25 }}
        >
          Tôi muốn nhận việc
        </motion.button>
      </motion.div>

      {/* Trust Items */}
      <motion.div
        variants={itemVariants}
        className="flex flex-wrap items-center gap-x-6 gap-y-2 pt-2"
      >
        {trustItems.map((item, i) => (
          <motion.div
            key={item}
            className="flex items-center gap-2"
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.8 + i * 0.1, duration: 0.5 }}
          >
            <div className="w-5 h-5 rounded-full bg-brand-black flex items-center justify-center flex-shrink-0">
              <svg
                className="w-3 h-3 text-brand-yellow"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={3}
              >
                <polyline points="20 6 9 17 4 12" />
              </svg>
            </div>
            <span className="text-[0.82rem] font-semibold text-brand-black/80 font-sans">
              {item}
            </span>
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
}
