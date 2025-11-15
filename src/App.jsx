import React, { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import YasirAzad from "./assets/Yasir Azad.webp";

// PLACEHOLDER — replace this after you say: "Bro send full Base64 audio"
const birthdayMusic = ""; 

const BirthdayWishForYasir = ({
  friendName = "Yasir Azad",
  photoUrl = YasirAzad,
}) => {
  const [step, setStep] = useState(1);
  const [showEffects, setShowEffects] = useState(false);
  const audioRef = useRef(null);

  const balloons = Array.from({ length: 10 });
  const confettiPieces = Array.from({ length: 60 });

  const handleFinalClick = () => {
    setStep(10);
    setShowEffects(true);

    if (audioRef.current) {
      audioRef.current.volume = 0.6;
      audioRef.current.currentTime = 0;
      audioRef.current.play().catch(() => {});
    }

    setTimeout(() => setShowEffects(false), 5000);
  };

  return (
    <div className="relative min-h-screen w-full bg-slate-950 text-white overflow-hidden flex flex-col items-center justify-center px-4">

      {/* MUSIC */}
      <audio ref={audioRef} src={birthdayMusic} preload="auto" loop />

      {/* FLOATING SPARKLES */}
      <div className="pointer-events-none absolute inset-0 z-0">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute text-yellow-300 opacity-30 text-xl"
            style={{ left: `${Math.random() * 100}%`, top: `${Math.random() * 100}%` }}
            animate={{ opacity: [0.1, 1, 0.1] }}
            transition={{ duration: 3 + Math.random() * 2, repeat: Infinity }}
          >
            
          </motion.div>
        ))}
      </div>

      {/* ================= BUTTON STEPS ================= */}
      <div className="w-full max-w-md flex flex-col items-center">

        {step === 1 && (
          <motion.button
            onClick={() => setStep(2)}
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center justify-center gap-2 px-10 py-4 rounded-full bg-pink-600 hover:bg-pink-700 text-white text-lg font-bold shadow-lg active:scale-95 transition whitespace-nowrap"
          >
            🎉 Wanna Celebrate Your Birthday? 🫣
          </motion.button>
        )}

        {step === 2 && (
          <motion.div initial={{ opacity: 0, y: 25 }} animate={{ opacity: 1, y: 0 }} className="flex flex-col items-center gap-4">
            <div className="text-lg font-semibold">Wait… really? 🤨</div>
            <motion.button
              onClick={() => setStep(3)}
              className="px-10 py-4 rounded-full bg-purple-500 hover:bg-purple-600 text-lg font-semibold shadow-lg"
            >
              Yes really 🙂
            </motion.button>
          </motion.div>
        )}

        {step === 3 && (
          <motion.div initial={{ opacity: 0, y: 25 }} animate={{ opacity: 1, y: 0 }} className="flex flex-col items-center gap-4">
            <div className="text-lg font-semibold">Are you THAT excited? 😳</div>
            <motion.button
              onClick={() => setStep(4)}
              className="px-10 py-4 rounded-full bg-yellow-500 hover:bg-yellow-600 text-black text-lg font-bold shadow-lg"
            >
              YES bro hurry up 😭🔥
            </motion.button>
          </motion.div>
        )}

        {step === 4 && (
          <motion.div initial={{ opacity: 0, y: 25 }} animate={{ opacity: 1, y: 0 }} className="flex flex-col items-center gap-4">
            <div className="text-xl font-bold">Are you sure? 😏</div>
            <motion.button
              onClick={() => setStep(5)}
              className="px-10 py-4 rounded-full bg-yellow-400 hover:bg-yellow-500 text-black text-lg font-semibold shadow-lg"
            >
              Yes, I'm sure ✅
            </motion.button>
          </motion.div>
        )}

        {step === 5 && (
          <motion.div initial={{ opacity: 0, y: 25 }} animate={{ opacity: 1, y: 0 }} className="flex flex-col items-center gap-4">
            <div className="text-xl font-bold">Hmm… think again 😈</div>
            <motion.button
              onClick={() => setStep(6)}
              className="px-10 py-4 rounded-full bg-purple-600 hover:bg-purple-700 text-lg font-semibold shadow-lg"
            >
              Think again 😂
            </motion.button>
          </motion.div>
        )}

        {step === 6 && (
          <motion.div initial={{ opacity: 0, y: 25 }} animate={{ opacity: 1, y: 0 }} className="flex flex-col items-center gap-4">
            <div className="text-xl font-bold">Last chance… sure na? 🤨</div>
            <motion.button
              onClick={() => setStep(7)}
              className="px-10 py-4 rounded-full bg-red-500 hover:bg-red-600 text-lg font-semibold shadow-lg"
            >
              I SAID YES! SHOW IT 😤😂
            </motion.button>
          </motion.div>
        )}

        {step === 7 && (
          <motion.div initial={{ opacity: 0, y: 25 }} animate={{ opacity: 1, y: 0 }} className="flex flex-col items-center gap-4">
            <div className="text-xl font-bold">Okay but… 100% sure? 🧐</div>
            <motion.button
              onClick={() => setStep(8)}
              className="px-10 py-4 rounded-full bg-green-600 hover:bg-green-700 text-lg font-semibold shadow-lg"
            >
              100% sure, final ✅
            </motion.button>
          </motion.div>
        )}

        {step === 8 && (
          <motion.div initial={{ opacity: 0, y: 25 }} animate={{ opacity: 1, y: 0 }} className="flex flex-col items-center gap-4">
            <div className="text-xl font-bold">Final final confirmation? 😹</div>
            <motion.button
              onClick={() => setStep(9)}
              className="px-10 py-4 rounded-full bg-blue-600 hover:bg-blue-700 text-lg font-semibold shadow-lg"
            >
              Yaar bas bhi karo 💀
            </motion.button>
          </motion.div>
        )}

        {step === 9 && (
          <motion.div initial={{ opacity: 0, y: 25 }} animate={{ opacity: 1, y: 0 }} className="flex flex-col items-center gap-4">
            <div className="text-xl font-bold">Okay okay, AB SACH ME LAST… ready? 🎬</div>
            <motion.button
              onClick={handleFinalClick}
              className="px-10 py-4 rounded-full bg-orange-500 hover:bg-orange-600 text-lg font-semibold shadow-lg"
            >
              Ready, START PARTY 🎊🔥
            </motion.button>
          </motion.div>
        )}
      </div>

      {/* ===================== STEP 10 — CARD ===================== */}
      {step === 10 && (
        <>
          {/* BALLOONS */}
          <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden">
            {balloons.map((_, i) => (
              <motion.div
                key={i}
                className="absolute bottom-[-120px] text-4xl md:text-5xl"
                style={{ left: `${i * 10}%` }}
                initial={{ y: 0, opacity: 0 }}
                animate={{ y: -900, opacity: [0, 1, 1, 0] }}
                transition={{
                  duration: 10 + i * 0.4,
                  repeat: Infinity,
                  delay: i * 0.25,
                  ease: "easeInOut",
                }}
              >
                🎈
              </motion.div>
            ))}
          </div>

          {/* CONFETTI */}
          {showEffects && (
            <div className="pointer-events-none absolute inset-0 z-40 overflow-hidden">
              {confettiPieces.map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute top-[-50px] text-3xl"
                  style={{ left: `${Math.random() * 100}%` }}
                  initial={{ y: -50, opacity: 0 }}
                  animate={{ y: "110%", opacity: [0, 1, 1, 0] }}
                  transition={{ duration: 2.6 + Math.random(), ease: "easeOut" }}
                >
                  {["🎉", "✨", "🎊"][i % 3]}
                </motion.div>
              ))}
            </div>
          )}

          {/* FIREWORKS */}
          {showEffects && (
            <>
              <motion.div
                className="absolute top-8 left-8 text-5xl z-30"
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: [0, 1.3, 1], opacity: [0, 1, 0] }}
                transition={{ duration: 1.5, repeat: Infinity, repeatDelay: 1 }}
              >
                🎆
              </motion.div>

              <motion.div
                className="absolute top-8 right-8 text-5xl z-30"
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: [0, 1.3, 1], opacity: [0, 1, 0] }}
                transition={{ duration: 1.5, delay: 0.5, repeat: Infinity, repeatDelay: 1 }}
              >
                🎇
              </motion.div>
            </>
          )}

          {/* CARD */}
          <motion.div
            className="relative z-20 w-full max-w-md md:max-w-xl bg-white/10 backdrop-blur-xl border border-white/10 rounded-3xl shadow-xl px-6 py-8 mt-6"
            initial={{ opacity: 0, scale: 0.7, y: 40 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="flex flex-col items-center gap-4">

              <motion.div initial={{ scale: 0.5 }} animate={{ scale: 1 }} transition={{ delay: 0.3 }}>
                <div className="w-28 h-28 rounded-3xl overflow-hidden border-2 border-yellow-300 shadow-lg">
                  <img src={photoUrl} alt={friendName} className="w-full h-full object-cover" />
                </div>
              </motion.div>

              <motion.h1
                className="text-3xl md:text-4xl font-extrabold text-center"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6 }}
              >
                Happy Birthday <span className="text-yellow-300">{friendName}</span> 🎉
              </motion.h1>

              <motion.p
                className="text-sm md:text-base text-center text-slate-200"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.9 }}
              >
                Wishing you endless happiness, success & blessings ahead!
              </motion.p>
            </div>

            <div className="mt-6 space-y-3">
              {[
                "✨ More wins, more growth, bigger dreams.",
                "💛 A peaceful heart with positive energy.",
                "🚀 Dreams turning into reality.",
                "😊 Smiles that never fade.",
              ].map((text, i) => (
                <motion.div
                  key={i}
                  className="bg-black/40 px-4 py-3 rounded-xl text-sm md:text-base border border-white/10"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 1.1 + i * 0.2 }}
                >
                  {text}
                </motion.div>
              ))}
            </div>

            <motion.p
              className="mt-6 text-center text-slate-300 italic text-sm"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 2.4 }}
            >
              — With love, from your friend{" "}
              <span className="text-pink-300 font-semibold">Umar Awais</span> 💖😉
            </motion.p>
          </motion.div>
        </>
      )}
    </div>
  );
};

export default BirthdayWishForYasir;
