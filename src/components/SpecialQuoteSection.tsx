import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const SpecialQuoteSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="relative py-24 sm:py-32 overflow-hidden">
      {/* Subtle background glow */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="h-64 w-64 rounded-full bg-primary/5 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-2xl px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <div className="divider-romantic mb-10" />
          <h2 className="font-display text-2xl font-light tracking-wide text-foreground sm:text-3xl md:text-4xl">
            O tipo de amor que eu quero viver com você
          </h2>
        </motion.div>

        <motion.blockquote
          initial={{ opacity: 0, scale: 0.95 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 1, delay: 0.4 }}
          className="mt-12 rounded-2xl border border-primary/15 bg-card/50 p-8 backdrop-blur-sm glow-soft sm:p-10"
        >
          <p className="font-display text-xl font-light italic leading-relaxed text-foreground sm:text-2xl">
            "Tudo sofre, tudo crê, tudo espera, tudo suporta."
          </p>
          <cite className="mt-4 block font-body text-sm font-light tracking-wider text-muted-foreground not-italic">
            — 1 Coríntios 13:7
          </cite>
        </motion.blockquote>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-10 space-y-6"
        >
          <p className="font-body text-base font-light leading-loose text-foreground/75 sm:text-lg">
            É esse o amor que eu quero construir com você.
          </p>
          <p className="font-body text-base font-light leading-loose text-foreground/75 sm:text-lg">
            Um amor que permanece firme nas fases difíceis.
            <br />
            Que acredita mesmo quando existe insegurança.
            <br />
            Que espera o tempo certo das coisas.
            <br />
            Que suporta os desafios sem desistir.
          </p>
          <p className="font-body text-base font-light leading-loose text-foreground/75 sm:text-lg">
            Eu não quero algo frágil.
          </p>
          <p className="font-body text-lg font-medium text-foreground sm:text-xl">
            Eu quero algo eterno.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default SpecialQuoteSection;
