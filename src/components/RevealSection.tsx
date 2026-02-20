import { motion, useInView, AnimatePresence } from "framer-motion";
import { useRef, useState } from "react";

const RevealSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [revealed, setRevealed] = useState(false);

  return (
    <section ref={ref} className="py-24 sm:py-32">
      <div className="mx-auto max-w-2xl px-6 text-center">
        <AnimatePresence mode="wait">
          {!revealed ? (
            <motion.div
              key="button"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.8 }}
              className="flex flex-col items-center"
            >
              <div className="divider-romantic mb-10" />
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.97 }}
                onClick={() => setRevealed(true)}
                className="rounded-full border border-primary/30 bg-primary/10 px-10 py-4 font-body text-base font-light tracking-wider text-foreground backdrop-blur-sm transition-all duration-500 hover:border-primary/60 hover:bg-primary/20 animate-pulse-glow sm:text-lg"
              >
                Se você também sente isso…
              </motion.button>
            </motion.div>
          ) : (
            <motion.div
              key="content"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: "easeOut" }}
              className="space-y-6"
            >
              <h2 className="font-display text-3xl font-light text-gradient sm:text-4xl md:text-5xl">
                Eu escolho você.
              </h2>

              <div className="mt-8 space-y-4">
                {[
                  "Nos dias leves.",
                  "Nos dias difíceis.",
                  "Nos dias em que a vida pesa.",
                ].map((line, i) => (
                  <motion.p
                    key={i}
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.5 + i * 0.2 }}
                    className="font-body text-base font-light text-foreground/75 sm:text-lg"
                  >
                    {line}
                  </motion.p>
                ))}
              </div>

              <div className="mt-8 space-y-4">
                {[
                  "Eu escolho crescer com você.",
                  "Eu escolho construir com você.",
                  "Eu escolho permanecer com você.",
                ].map((line, i) => (
                  <motion.p
                    key={i}
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 1.2 + i * 0.2 }}
                    className="font-body text-lg font-medium text-foreground sm:text-xl"
                  >
                    {line}
                  </motion.p>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default RevealSection;
