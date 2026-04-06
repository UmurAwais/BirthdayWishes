import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import confetti from "canvas-confetti";
import Hassan from "./assets/Hassan.webp";

// PLACEHOLDER — replace this after you say: "Bro send full Base64 audio"
const birthdayMusic = ""; 

const BirthdayWishForYasir = ({
  friendName = "Hassan Shakeel",
  photoUrl = Hassan,
}) => {
  const [step, setStep] = useState(1);
  const [showEffects, setShowEffects] = useState(false);
  const audioRef = useRef(null);

  const balloons = Array.from({ length: 12 });

  const handleFinalClick = () => {
    setStep(10);
    setShowEffects(true);

    // 🎉 HIGH-FIDELITY CONFETTI POPPER EFFECT
    const duration = 5 * 1000;
    const animationEnd = Date.now() + duration;
    const defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 100 };

    const randomInRange = (min, max) => Math.random() * (max - min) + min;

    const interval = setInterval(function() {
      const timeLeft = animationEnd - Date.now();
      if (timeLeft <= 0) return clearInterval(interval);

      const particleCount = 50 * (timeLeft / duration);
      confetti({ ...defaults, particleCount, origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 } });
      confetti({ ...defaults, particleCount, origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 } });
    }, 250);

    confetti({
      particleCount: 200,
      spread: 90,
      origin: { y: 0.6 },
      zIndex: 100,
      colors: ['#FF69B4', '#DA70D6', '#FFD700', '#00BFFF']
    });

    if (audioRef.current) {
      audioRef.current.volume = 0.5;
      audioRef.current.currentTime = 0;
      audioRef.current.play().catch(() => {});
    }

    setTimeout(() => setShowEffects(false), 5000);
  };

  return (
    <div className="relative min-h-screen w-full bg-slate-950 text-white overflow-hidden flex flex-col items-center justify-center font-sans selection:bg-pink-500/30">
      
      {/* --- PREMIUM ANIMATED BACKGROUND --- */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div 
          animate={{ scale: [1, 1.2, 1], x: [0, 50, 0], y: [0, -50, 0] }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute -top-[10%] -left-[10%] w-[50%] h-[50%] bg-purple-600/20 blur-[120px] rounded-full"
        />
        <motion.div 
          animate={{ scale: [1, 1.3, 1], x: [0, -60, 0], y: [0, 40, 0] }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          className="absolute -bottom-[10%] -right-[10%] w-[60%] h-[60%] bg-pink-600/20 blur-[130px] rounded-full"
        />
        <motion.div 
          animate={{ opacity: [0.1, 0.3, 0.1] }}
          transition={{ duration: 10, repeat: Infinity }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.1),transparent_70%)]"
        />
      </div>

      {/* MUSIC */}
      <audio ref={audioRef} src={birthdayMusic} preload="auto" loop />

      {/* FLOATING SPARKLES (SUBTLE) */}
      <div className="pointer-events-none absolute inset-0 z-0 opacity-40">
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute text-yellow-200/50 text-xl"
            style={{ left: `${Math.random() * 100}%`, top: `${Math.random() * 100}%` }}
            animate={{ 
              opacity: [0, 1, 0],
              scale: [0.5, 1.2, 0.5],
              y: [0, -40, 0]
            }}
            transition={{ duration: 4 + Math.random() * 3, repeat: Infinity, delay: Math.random() * 5 }}
          >
            ✦
          </motion.div>
        ))}
      </div>

      {/* --- CONTENT CONTAINER --- */}
      <main className="relative z-10 w-full max-w-[90%] sm:max-w-md md:max-w-xl lg:max-w-2xl px-4 flex flex-col items-center">
        
        <AnimatePresence mode="wait">
          {step < 10 ? (
            <motion.div 
              key="steps"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 1.1 }}
              className="w-full flex flex-col items-center"
            >
              {/* --- STEP UI --- */}
              <div className="bg-white/5 backdrop-blur-md border border-white/10 p-8 sm:p-10 rounded-[2.5rem] shadow-2xl w-full flex flex-col items-center gap-8">
                
                <div className="relative">
                  <motion.div 
                    animate={{ rotate: 360 }}
                    transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                    className="absolute inset-0 bg-gradient-to-r from-pink-500 to-purple-500 blur-xl opacity-30"
                  />
                  <div className="relative text-7xl sm:text-8xl">
                    {step === 1 && "🎁"}
                    {step === 2 && "🧐"}
                    {step === 3 && "🚀"}
                    {step === 4 && "😼"}
                    {step === 5 && "😈"}
                    {step === 6 && "💀"}
                    {step === 7 && "🤔"}
                    {step === 8 && "🤡"}
                    {step === 9 && "🎂"}
                  </div>
                </div>

                <div className="text-center space-y-4">
                  <h2 className="text-2xl sm:text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-white to-white/70 leading-tight">
                    {step === 1 && "🎉 Kya tujhe sachi party chahiye?"}
                    {step === 2 && "Ruk ruk... pakka na? Zyada umeed toh nahi?"}
                    {step === 3 && "Itna kyun utawla ho raha hai be?"}
                    {step === 4 && "Pakka? Baad mein mat rona..."}
                    {step === 5 && "Ek baar phir soch le... abhi bhi time hai"}
                    {step === 6 && "Aakhri baar puch raha hoon... sure?"}
                    {step === 7 && "Theek hai, par 100% sure hai na?"}
                    {step === 8 && "Bilkul final confirmation?"}
                    {step === 9 && "Acha baba, AB SACH MEIN LAST... ready?"}
                  </h2>
                </div>

                <motion.button
                  key={`btn-${step}`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={step === 9 ? handleFinalClick : () => setStep(step + 1)}
                  className={`
                    w-full py-4 sm:py-5 rounded-2xl text-lg sm:text-xl font-bold shadow-xl transition-all duration-300
                    ${step === 1 ? "bg-pink-600 hover:bg-pink-500" : ""}
                    ${step === 2 ? "bg-purple-600 hover:bg-purple-500" : ""}
                    ${step === 3 ? "bg-yellow-500 hover:bg-yellow-400 text-black" : ""}
                    ${step === 4 ? "bg-blue-600 hover:bg-blue-500" : ""}
                    ${step === 5 ? "bg-indigo-600 hover:bg-indigo-500" : ""}
                    ${step === 6 ? "bg-red-600 hover:bg-red-500" : ""}
                    ${step === 7 ? "bg-green-600 hover:bg-green-500" : ""}
                    ${step === 8 ? "bg-teal-600 hover:bg-teal-500" : ""}
                    ${step === 9 ? "bg-orange-600 hover:bg-orange-500 shadow-orange-500/20" : ""}
                  `}
                >
                  {step === 1 && "Haan bhai, bilkul! 🤩"}
                  {step === 2 && "Oye, dikha ab! 🙂"}
                  {step === 3 && "BHAI JALDI KAR NA! 😭🔥"}
                  {step === 4 && "Haan baba, pakka! ✅"}
                  {step === 5 && "Arre tu dikha toh sahi 😂"}
                  {step === 6 && "ABE HAAN! JALDI KHOL 😤😂"}
                  {step === 7 && "1000% sure, bas kar! ✅"}
                  {step === 8 && "Yaar dimaag mat kha 💀"}
                  {step === 9 && "CHAL SHURU KAR! 🎊🔥"}
                </motion.button>
              </div>
            </motion.div>
          ) : (
            <motion.div 
              key="birthday-card"
              initial={{ opacity: 0, y: 50, scale: 0.8 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ type: "spring", stiffness: 100, damping: 15 }}
              className="w-full flex flex-col items-center py-6"
            >
              <div className="bg-white/10 backdrop-blur-2xl border border-white/20 p-6 sm:p-8 md:p-10 rounded-[3rem] shadow-[0_0_50px_rgba(0,0,0,0.5)] w-full">
                
                <div className="flex flex-col items-center gap-6">
                  {/* PROFILE IMAGE */}
                  <motion.div 
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.3, type: "spring" }}
                    className="relative group cursor-pointer"
                  >
                    <div className="absolute -inset-1.5 bg-gradient-to-tr from-pink-500 via-yellow-300 to-purple-600 rounded-[2.5rem] blur opacity-75 group-hover:opacity-100 transition duration-1000"></div>
                    <div className="relative w-32 h-32 sm:w-40 sm:h-40 rounded-[2.2rem] overflow-hidden border-2 border-white/20">
                      <img src={photoUrl} alt={friendName} className="w-full h-full object-cover scale-110 group-hover:scale-100 transition-transform duration-700" />
                    </div>
                  </motion.div>

                  <div className="text-center space-y-2">
                    <motion.h1 
                      initial={{ opacity: 0 }} 
                      animate={{ opacity: 1 }} 
                      className="text-4xl sm:text-5xl font-black tracking-tight"
                    >
                      Mubarak Ho! <br/>
                      <span className="bg-clip-text text-transparent bg-gradient-to-r from-yellow-300 to-orange-400">
                        {friendName}
                      </span>
                    </motion.h1>
                    <p className="text-slate-400 text-sm sm:text-base font-medium">
                      Ab jaldi se bata party kab de raha hai?<br className="hidden sm:block" /> 
                      Success toh milti rahegi 😂!
                    </p>
                  </div>

                  {/* WISHES LIST */}
                  <div className="w-full grid grid-cols-1 gap-3 sm:gap-4 mt-4">
                    {[
                      { icon: "✨", text: "Agle saal thoda kam hosh khoiyo.", color: "border-pink-500/20 bg-pink-500/5 text-pink-100" },
                      { icon: "💛", text: "Thodi akal aur bohot saara paisa mile.", color: "border-yellow-500/20 bg-yellow-500/5 text-yellow-100" },
                      { icon: "🚀", text: "Dreams toh theek hain, pehle treat de!", color: "border-blue-500/20 bg-blue-500/5 text-blue-100" },
                      { icon: "😊", text: "Hamesha aise hi rota reh (khushi se)!", color: "border-green-500/20 bg-green-500/5 text-green-100" },
                    ].map((wish, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, x: -30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.6 + i * 0.15 }}
                        className={`flex items-center gap-4 p-4 rounded-2xl border backdrop-blur-sm ${wish.color}`}
                      >
                        <span className="text-xl sm:text-2xl">{wish.icon}</span>
                        <span className="text-sm sm:text-base font-semibold italic">{wish.text}</span>
                      </motion.div>
                    ))}
                  </div>

                  <motion.div 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.5 }}
                    className="mt-6 pt-6 border-t border-white/10 w-full text-center"
                  >
                    <p className="text-slate-400 text-xs sm:text-sm italic">
                      — Tera waala dost <span className="text-pink-400 font-bold bg-pink-400/10 px-2 py-0.5 rounded-lg">Yasir Azad (Godli!)</span> 💖😉
                    </p>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* --- BALLOONS & FIREWORKS (RESPONSIVE) --- */}
        {step === 10 && (
          <>
            <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden">
              {balloons.map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute bottom-[-150px] text-5xl sm:text-6xl"
                  style={{ left: `${(i / balloons.length) * 100}%` }}
                  initial={{ y: 0, opacity: 0 }}
                  animate={{ y: -window.innerHeight - 200, opacity: [0, 1, 1, 0] }}
                  transition={{
                    duration: 8 + i * 0.5,
                    repeat: Infinity,
                    delay: i * 0.3,
                    ease: "easeInOut",
                  }}
                >
                  🎈
                </motion.div>
              ))}
            </div>

            {showEffects && (
              <div className="pointer-events-none absolute inset-0 z-50">
                <motion.div className="absolute top-10 left-10 text-5xl sm:text-7xl" animate={{ scale: [0, 1.2, 0], opacity: [0, 1, 0] }} transition={{ duration: 1.8, repeat: Infinity }}>🎆</motion.div>
                <motion.div className="absolute bottom-10 right-10 text-5xl sm:text-7xl" animate={{ scale: [0, 1.2, 0], opacity: [0, 1, 0] }} transition={{ duration: 1.8, delay: 0.9, repeat: Infinity }}>🎇</motion.div>
              </div>
            )}
          </>
        )}
      </main>
    </div>
  );
};

export default BirthdayWishForYasir;
