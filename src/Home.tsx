import profile_image from "./assets/profile.jpg";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import AnimatedBackground from "./AnimatedBackground";

export default function Home() {
  const desc = [
    "Informatics Fresh Graduate from President University",
    "Concentrated in Artificial Intelligence",
    "in Loved with Colour and Design",
    "Interested Web / App Development",
  ];
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % desc.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [desc.length]);

  return (
    <div
      id="home"
      className="relative bg-black h-screen flex justify-center items-center"
    >
      <AnimatedBackground group="flower" />
      <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-[40px] justify-center items-center text-center md:text-left">
        <div className="flex justify-center">
          <div className="w-[300px] h-[300px] md:w-[400px] md:h-[400px] rounded-full overflow-hidden">
            <img src={profile_image} alt="Profile Image" />
          </div>
        </div>
        <div className="content-center mb-4">
          <h2 className="text-base md:text-2xl text-pink-100">Hi! I'm</h2>
          <h1 className="text-2xl md:text-5xl coral font-bold">
            Yustina Yunita
          </h1>
          <AnimatePresence mode="wait">
            <motion.p
              key={index}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1 }}
              className=" italic text-base md:text-xl text-pink-100 w-[300px] md:w-[700px] h-[150px] md:h-0 text-center md:text-left"
            >
              {desc[index]}
            </motion.p>
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}
