import flower_up from "./assets/right.png";
import flower_bottom from "./assets/left-botttom.png";
import { motion } from "framer-motion";

export default function AnimatedBackground({ group = "all" }) {
  return (
    <div className="bg-black overflow-hidden">
      {(group === "flower" || group === "all") && (
        <div className="flower">
          <div className="absolute top-20 md:top-30 right-10 md:right-30 w-[150px] h-[150px] ">
            <motion.img
              src={flower_up}
              alt="Flower"
              initial={{ scale: 0 }}
              animate={{ scale: [0.8, 1.2, 1] }}
              transition={{
                duration: 4,
                repeat: Infinity,
                repeatType: "reverse",
              }}
            />
          </div>

          <div className="absolute bottom-30 left-10 md:left-20 w-[150px] h-[150px] md:w-[200px] md:h-[200px] ">
            <motion.img
              src={flower_bottom}
              alt="Flower"
              initial={{ scale: 0 }}
              animate={{ scale: [0.8, 1.2, 1] }}
              transition={{
                duration: 4,
                repeat: Infinity,
                repeatType: "reverse",
              }}
            />
          </div>
        </div>
      )}
      {(group === "light" || group === "all") && (
        <div className="light-group">
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: [0, 1.2, 1], opacity: [0, 1, 0.8] }}
            transition={{
              duration: 4,
              repeat: Infinity,
              repeatType: "reverse",
            }}
            className="absolute top-50 left-5 md:left-20 w-30 h-30 bg-pink-300 rounded-full blur-2xl opacity-70"
          />

          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: [0, 1.3, 1], opacity: [0, 1, 0.6] }}
            transition={{
              duration: 6,
              repeat: Infinity,
              repeatType: "reverse",
              delay: 1,
            }}
            className="absolute bottom-10 right-10 md:bottom-32 md:right-24 w-40 h-40 bg-pink-300 rounded-full blur-3xl opacity-70"
          />

          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: [0, 1.1, 1], opacity: [0, 0.9, 0.5] }}
            transition={{
              duration: 5,
              repeat: Infinity,
              repeatType: "reverse",
              delay: 2,
            }}
            className="absolute top-0 right-5 md:right-20 w-32 h-32 bg-pink-300 rounded-full blur-2xl opacity-70"
          />
        </div>
      )}
    </div>
  );
}
