import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const items = [
  "Eu observo quando você fica em silêncio.",
  "Eu percebo quando você está tentando ser forte.",
  "Eu admiro sua sensibilidade.",
  "Eu admiro sua força.",
  "Eu oro por você.",
  "Eu agradeço a Deus por ter colocado você na minha vida.",
  "Eu tenho medo de te perder porque você é preciosa demais para mim.",
];

const ListSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <section ref={ref} className="py-24 sm:py-32">
      <div className="mx-auto max-w-2xl px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <div className="divider-romantic mb-10" />
          <h2 className="font-display text-2xl font-light tracking-wide text-foreground sm:text-3xl md:text-4xl">
            Tem coisas que talvez você não veja…
          </h2>
        </motion.div>

        <div className="mt-12 space-y-5">
          {items.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -20 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 + i * 0.2, ease: "easeOut" }}
              className="rounded-xl border border-primary/10 bg-card/30 px-6 py-4 backdrop-blur-sm transition-all duration-300 hover:border-primary/25 hover:bg-card/50"
            >
              <p className="font-body text-base font-light text-foreground/80 sm:text-lg">
                {item}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ListSection;
