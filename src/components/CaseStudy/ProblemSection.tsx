import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] },
  }),
};

/* ── Left card helpers ── */
function ChatBubble({
  text,
  time,
  seen,
  sent,
  warning,
}: {
  text: string;
  time: string;
  seen?: boolean;
  sent?: boolean;
  warning?: boolean;
}) {
  return (
    <div
      className={`flex flex-col ${sent ? "items-end" : "items-start"} gap-0.5`}
    >
      {!sent && (
        <div className="w-6 h-6 rounded-full bg-gray-300 flex items-center justify-center mb-0.5">
          <svg
            className="w-3 h-3 text-gray-400"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M12 12c2.7 0 4.8-2.1 4.8-4.8S14.7 2.4 12 2.4 7.2 4.5 7.2 7.2 9.3 12 12 12zm0 2.4c-3.2 0-9.6 1.6-9.6 4.8v2.4h19.2v-2.4c0-3.2-6.4-4.8-9.6-4.8z" />
          </svg>
        </div>
      )}
      <div
        className={`relative px-3 py-2 rounded-2xl text-xs font-medium max-w-[200px] ${
          warning
            ? "bg-red-50 border border-red-200 text-red-700"
            : sent
              ? "bg-gray-800 text-white rounded-br-sm"
              : "bg-white text-gray-800 rounded-bl-sm shadow-sm border border-gray-100"
        }`}
      >
        {warning && (
          <span className="inline-block mr-1">
            <svg
              className="w-3 h-3 text-red-500 inline"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                fillRule="evenodd"
                d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z"
                clipRule="evenodd"
              />
            </svg>
          </span>
        )}
        {text}
      </div>
      <div className="flex items-center gap-1 px-1">
        <span className="text-[10px] text-gray-400">{time}</span>
        {seen && <span className="text-[10px] text-gray-400">· Đã xem</span>}
      </div>
    </div>
  );
}

function TimelineRow({
  time,
  label,
  type,
}: {
  time: string;
  label: string;
  type: "ok" | "warn" | "fail";
}) {
  const colors = {
    ok: "bg-gray-200 text-gray-600",
    warn: "bg-amber-100 text-amber-700 border border-amber-200",
    fail: "bg-red-100 text-red-700 border border-red-200",
  };
  const dots = { ok: "bg-gray-300", warn: "bg-amber-400", fail: "bg-red-500" };
  return (
    <div className="flex items-center gap-2">
      <span className="text-[10px] text-gray-400 w-10 shrink-0 font-mono">
        {time}
      </span>
      <div className={`w-2 h-2 rounded-full shrink-0 ${dots[type]}`} />
      <span
        className={`text-[11px] font-medium px-2 py-0.5 rounded-full ${colors[type]}`}
      >
        {label}
      </span>
    </div>
  );
}

function TraditionalCard() {
  return (
    <div className="relative flex flex-col h-full bg-[#F5F5F4] rounded-[28px] p-5 overflow-hidden">
      <div className="mb-5">
        <div className="flex items-center gap-2 mb-1">
          <div className="w-7 h-7 rounded-full bg-gray-300 flex items-center justify-center">
            <svg
              className="w-4 h-4 text-gray-500"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2z" />
            </svg>
          </div>
          <div>
            <p className="text-[13px] font-bold text-gray-900 font-display">
              Tuyển thủ công
            </p>
            <p className="text-[10px] text-gray-400 uppercase tracking-wide">
              Zalo · Facebook · Gọi điện
            </p>
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-2 mb-5">
        <TimelineRow time="08:00" label="Đăng bài" type="ok" />
        <TimelineRow time="09:30" label="Chưa đủ người" type="warn" />
        <TimelineRow time="11:00" label="Worker hủy phút chót" type="fail" />
        <TimelineRow time="12:00" label="Gọi điện tìm người thay" type="warn" />
        <TimelineRow
          time="14:00"
          label="Sự kiện bắt đầu với nhân sự thiếu"
          type="fail"
        />
      </div>

      <div className="flex flex-col gap-3 bg-white rounded-2xl p-3 mb-4 border border-gray-100 shadow-sm">
        <ChatBubble
          text="Bạn có thể làm ca ngày mai không?"
          time="22:10"
          sent
        />
        <div className="flex items-center gap-1 self-end">
          <div className="text-[10px] text-gray-400 italic">
            Đã xem · 23:02 · Không trả lời
          </div>
          <svg
            className="w-3.5 h-3.5 text-red-400"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path
              fillRule="evenodd"
              d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"
              clipRule="evenodd"
            />
          </svg>
        </div>
        <ChatBubble text="Xin lỗi, tôi bận rồi ạ 😅" time="07:45" />
        <ChatBubble text="Worker hủy ca phút chót" time="07:50" warning />
      </div>

      <div className="grid grid-cols-2 gap-2 mt-auto">
        {[
          { icon: "⏱", label: "2–3 giờ tìm người" },
          { icon: "⚠️", label: "Không biết ai sẽ đến" },
          { icon: "💸", label: "Mất tiền vì thiếu người" },
          { icon: "😓", label: "Stress mỗi sự kiện" },
        ].map(({ icon, label }) => (
          <div
            key={label}
            className="flex items-center gap-1.5 bg-white rounded-xl px-2.5 py-2 border border-gray-100 shadow-sm"
          >
            <span className="text-sm">{icon}</span>
            <span className="text-[11px] text-gray-600 font-medium leading-tight">
              {label}
            </span>
          </div>
        ))}
      </div>

      <div className="absolute -top-8 -right-8 w-32 h-32 rounded-full bg-red-100 opacity-40 blur-2xl pointer-events-none" />
    </div>
  );
}

/* ── Center connector ── */
function CenterConnector() {
  return (
    <div className="flex lg:flex-col items-center justify-center gap-3 py-4 lg:py-0 lg:px-0 relative z-10">
      {/* Floating badge */}
      <motion.div
        animate={{ y: [0, -6, 0] }}
        transition={{ duration: 2.8, repeat: Infinity, ease: "easeInOut" }}
        className="relative flex flex-col items-center gap-3"
      >
        {/* Glow ring */}
        <div
          className="absolute inset-0 rounded-full pointer-events-none"
          style={{
            background:
              "radial-gradient(circle, rgba(255,212,0,0.35) 0%, transparent 70%)",
            transform: "scale(2.2)",
          }}
        />

        {/* Yellow circle with arrow */}
        <div
          className="relative w-14 h-14 rounded-full bg-[#FFD400] flex items-center justify-center shadow-lg"
          style={{
            boxShadow:
              "0 0 0 6px rgba(255,212,0,0.18), 0 8px 24px rgba(255,212,0,0.45)",
          }}
        >
          {/* Arrow icon – points right on desktop, down on mobile */}
          <svg
            className="w-6 h-6 text-black hidden lg:block"
            fill="none"
            stroke="currentColor"
            strokeWidth={2.5}
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
            />
          </svg>
          <svg
            className="w-6 h-6 text-black lg:hidden"
            fill="none"
            stroke="currentColor"
            strokeWidth={2.5}
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M19.5 13.5 12 21m0 0-7.5-7.5M12 21V3"
            />
          </svg>
        </div>

        {/* Label */}
        <div className="text-center">
          <p className="font-display font-black text-[13px] text-brand-black leading-snug whitespace-nowrap">
            Từ tuyển dụng thụ động
          </p>
          <p
            className="font-display font-black text-[13px] text-[#FFD400] leading-snug whitespace-nowrap"
            style={{ WebkitTextStroke: "0.3px #C8A800" }}
          >
            đến vận hành chủ động
          </p>
        </div>
      </motion.div>
    </div>
  );
}

/* ── Right card helpers ── */
function WorkerAvatar({
  initials,
  active,
  score,
}: {
  initials: string;
  active: boolean;
  score?: number;
}) {
  return (
    <div className="relative flex flex-col items-center gap-1">
      <div className="relative">
        <div className="w-8 h-8 rounded-full bg-black/20 flex items-center justify-center text-xs font-bold text-black border-2 border-black/30">
          {initials}
        </div>
        {active && (
          <span className="absolute -bottom-0.5 -right-0.5 w-3 h-3 rounded-full bg-green-500 border-2 border-[#FFD400]" />
        )}
      </div>
      {score !== undefined && (
        <span className="text-[9px] font-bold text-black/70">{score}★</span>
      )}
    </div>
  );
}

/* Mini avatar used in the confirmed-workers dashboard (smaller, glassmorphism bg) */
function MiniAvatar({ initials }: { initials: string }) {
  return (
    <div className="relative">
      <div className="w-7 h-7 rounded-full bg-white/30 border border-white/50 flex items-center justify-center text-[9px] font-bold text-black">
        {initials}
      </div>
      <span className="absolute -bottom-0.5 -right-0.5 w-2.5 h-2.5 rounded-full bg-green-500 border-[1.5px] border-[#FFD400]" />
    </div>
  );
}

function ConfirmedWorkersDashboard() {
  const allInitials = [
    "MT",
    "LA",
    "PN",
    "DH",
    "TN",
    "BV",
    "KH",
    "QT",
    "HL",
    "NK",
  ];

  return (
    <div
      className="rounded-2xl p-3.5 mb-3"
      style={{
        background: "rgba(255,255,255,0.28)",
        backdropFilter: "blur(14px)",
        WebkitBackdropFilter: "blur(14px)",
        border: "1px solid rgba(255,255,255,0.55)",
        boxShadow: "0 4px 20px rgba(0,0,0,0.08)",
      }}
    >
      {/* Header row */}
      <div className="flex items-center justify-between mb-2.5">
        <div>
          <p className="text-[12px] font-bold text-black leading-none">
            Confirmed Workers
          </p>
          <p className="text-[10px] text-black/50 mt-0.5">All workers ready</p>
        </div>
        <div className="flex items-center gap-1.5">
          <div className="text-right">
            <p className="font-display font-black text-xl text-black leading-none">
              10/10
            </p>
          </div>
          {/* Success badge */}
          <div className="flex items-center gap-1 bg-green-500 rounded-full px-2 py-0.5">
            <svg
              className="w-3 h-3 text-white"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                fillRule="evenodd"
                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                clipRule="evenodd"
              />
            </svg>
            <span className="text-[9px] font-bold text-white uppercase tracking-wide">
              Ready
            </span>
          </div>
        </div>
      </div>

      {/* Avatar row */}
      <div className="flex items-center gap-1.5 flex-wrap mb-3">
        {allInitials.map((i) => (
          <MiniAvatar key={i} initials={i} />
        ))}
      </div>

      {/* Progress bar – 100% */}
      <div>
        <div className="h-2 rounded-full overflow-hidden bg-black/15">
          <div
            className="h-full rounded-full bg-black"
            style={{ width: "100%" }}
          />
        </div>
        <div className="flex justify-between items-center mt-1">
          <span className="text-[9px] text-black/50">Tiến độ xác nhận</span>
          <span className="text-[9px] font-black text-black">100% READY</span>
        </div>
      </div>
    </div>
  );
}

function JobFreeCard() {
  return (
    <div className="relative flex flex-col h-full bg-[#FFD400] rounded-[28px] p-5 overflow-hidden">
      {/* Header */}
      <div className="mb-5">
        <div className="flex items-center gap-2 mb-1">
          <div className="w-7 h-7 rounded-full bg-black flex items-center justify-center">
            <svg
              className="w-4 h-4 text-[#FFD400]"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <div>
            <p className="text-[13px] font-bold text-black font-display">
              Với JobFree
            </p>
            <p className="text-[10px] text-black/60 uppercase tracking-wide">
              Vận hành tự động
            </p>
          </div>
        </div>
      </div>

      {/* Timeline */}
      <div className="flex flex-col gap-2 mb-4">
        {[
          { time: "08:00", label: "Đăng ca", icon: "✓" },
          { time: "08:03", label: "Worker phù hợp nhận việc", icon: "✓" },
          { time: "08:05", label: "Xác nhận hoàn tất", icon: "✓" },
          { time: "13:00", label: "QR Check-In", icon: "⊞" },
          { time: "14:00", label: "Ca làm bắt đầu", icon: "✓" },
        ].map(({ time, label, icon }) => (
          <div key={time} className="flex items-center gap-2">
            <span className="text-[10px] text-black/50 w-10 shrink-0 font-mono">
              {time}
            </span>
            <div className="w-2 h-2 rounded-full shrink-0 bg-black/30" />
            <div className="flex items-center gap-1.5 bg-black/10 rounded-full px-2.5 py-0.5 flex-1">
              <span className="text-[11px] font-semibold text-black/80">
                {icon}
              </span>
              <span className="text-[11px] font-medium text-black/80">
                {label}
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* Worker roster (compact) */}
      <div className="bg-black/10 backdrop-blur-sm rounded-2xl p-3 mb-3 border border-black/10">
        <div className="flex items-center justify-between mb-2">
          <span className="text-xs font-bold text-black">Workers xác nhận</span>
          <span className="text-xs font-black text-black">7/10</span>
        </div>
        <div className="flex items-center gap-1.5 flex-wrap mb-2.5">
          {[
            { i: "MT", a: true, s: 4.9 },
            { i: "LA", a: true, s: 4.8 },
            { i: "PN", a: true, s: 4.7 },
            { i: "DH", a: true, s: 5.0 },
            { i: "TN", a: true, s: 4.9 },
            { i: "BV", a: true, s: 4.8 },
            { i: "KH", a: true, s: 4.6 },
            { i: "+3", a: false },
          ].map(({ i, a, s }) => (
            <WorkerAvatar key={i} initials={i} active={a} score={s} />
          ))}
        </div>
        <div className="h-1.5 rounded-full bg-black/20 overflow-hidden">
          <div className="h-full rounded-full bg-black w-[70%]" />
        </div>
        <div className="flex items-center justify-between mt-1">
          <span className="text-[9px] text-black/50">Tiến độ</span>
          <span className="text-[9px] font-bold text-black">70% READY</span>
        </div>
      </div>

      {/* Confirmed workers dashboard */}
      <ConfirmedWorkersDashboard />

      {/* Badges row */}
      <div className="grid grid-cols-2 gap-2 mt-auto">
        {[
          { icon: "⚡", label: "Đăng ca 30 giây" },
          { icon: "🛡", label: "Reliability Score" },
          { icon: "📲", label: "QR Check-in" },
          { icon: "💳", label: "Thanh toán minh bạch" },
        ].map(({ icon, label }) => (
          <div
            key={label}
            className="flex items-center gap-1.5 bg-black rounded-xl px-2.5 py-2"
          >
            <span className="text-sm">{icon}</span>
            <span className="text-[11px] text-[#FFD400] font-semibold leading-tight">
              {label}
            </span>
          </div>
        ))}
      </div>

      {/* Decorative blobs */}
      <div className="absolute -top-6 -right-6 w-28 h-28 rounded-full bg-white/20 blur-2xl pointer-events-none" />
      <div className="absolute -bottom-10 left-1/2 w-40 h-24 rounded-full bg-[#E6BF00]/50 blur-3xl pointer-events-none" />
    </div>
  );
}

/* ── Main export ── */
export default function ProblemSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      ref={ref}
      className="relative bg-white py-section-y px-page-x overflow-hidden"
    >
      {/* Background texture */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 rounded-full bg-[#FFD400]/6 blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-80 h-80 rounded-full bg-gray-100 blur-3xl" />
      </div>

      <div className="relative max-w-content mx-auto">
        {/* Section heading */}
        <motion.div
          className="text-center mb-10"
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={fadeUp}
        >
          <motion.p
            className="inline-block text-xs font-bold uppercase tracking-widest text-brand-gray bg-gray-100 px-4 py-1.5 rounded-full mb-5"
            variants={fadeUp}
            custom={0}
          >
            Thực tế vs Giải pháp
          </motion.p>
          <motion.h2
            className="font-display font-black text-3xl sm:text-4xl lg:text-5xl text-brand-black leading-tight"
            variants={fadeUp}
            custom={1}
          >
            Một sự kiện cần 10 người.
            <br />
            <span className="relative">
              Bạn không thể chỉ{" "}
              <span className="relative inline-block">
                hy vọng
                <span className="absolute inset-x-0 bottom-0.5 h-3 bg-[#FFD400]/40 -z-10 rounded" />
              </span>{" "}
              tất cả sẽ xuất hiện.
            </span>
          </motion.h2>
        </motion.div>

        {/* Cards + connector */}
        <div className="flex flex-col lg:flex-row items-stretch gap-8 lg:gap-10">
          {/* Left card */}
          <motion.div
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            variants={fadeUp}
            custom={2}
            className="flex-1 rounded-[28px]"
            style={{
              boxShadow:
                "0 8px 40px rgba(0,0,0,0.08), 0 2px 8px rgba(0,0,0,0.04)",
            }}
          >
            <TraditionalCard />
          </motion.div>

          {/* Center connector */}
          <motion.div
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            variants={fadeUp}
            custom={3}
            className="flex items-center justify-center px-0 py-5 lg:py-0 lg:px-4 shrink-0"
          >
            <CenterConnector />
          </motion.div>

          {/* Right card */}
          <motion.div
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            variants={fadeUp}
            custom={4}
            className="flex-1 rounded-[28px]"
            style={{
              boxShadow:
                "0 16px 60px rgba(255,212,0,0.35), 0 4px 16px rgba(0,0,0,0.08)",
            }}
          >
            <JobFreeCard />
          </motion.div>
        </div>

        {/* Bottom stat bar */}
        <motion.div
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={fadeUp}
          custom={5}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8"
        >
          <div className="flex items-center gap-5 bg-brand-black text-white rounded-2xl px-7 py-4 shadow-lg">
            <div className="text-center">
              <p className="font-display font-black text-4xl text-[#FFD400] leading-none">
                80%
              </p>
              <p className="text-xs text-white/60 mt-1 uppercase tracking-widest">
                Nhanh hơn
              </p>
            </div>
            <div className="w-px h-10 bg-white/15" />
            <p className="text-sm text-white/80 max-w-[200px] leading-snug">
              Giảm thời gian tìm người từ{" "}
              <span className="text-white font-semibold">vài giờ</span> xuống
              chỉ <span className="text-[#FFD400] font-semibold">vài phút</span>
            </p>
          </div>

          <div className="flex gap-3">
            {[
              { value: "2–3 giờ", label: "Tiết kiệm mỗi ca" },
              { value: "<5%", label: "Tỉ lệ bùng ca" },
            ].map(({ value, label }) => (
              <div
                key={label}
                className="flex flex-col items-center bg-gray-50 border border-gray-100 rounded-2xl px-5 py-3.5 shadow-sm"
              >
                <span className="font-display font-black text-xl text-brand-black leading-none">
                  {value}
                </span>
                <span className="text-[11px] text-brand-gray mt-1 whitespace-nowrap">
                  {label}
                </span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
