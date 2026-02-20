import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const FinalSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="relative py-28 sm:py-40 overflow-hidden">
      {/* Background glow */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="h-96 w-96 rounded-full bg-primary/5 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-2xl px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1 }}
        >
          <div className="divider-romantic mb-10" />
          <h2 className="font-display text-3xl font-light tracking-wide text-foreground sm:text-4xl md:text-5xl">
            Marcia de Melo Basílio,
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-10 space-y-6"
        >
          <p className="font-body text-lg font-medium text-gradient sm:text-xl">
            Você é o amor da minha vida.
          </p>

          <p className="font-body text-base font-light leading-loose text-foreground/75 sm:text-lg">
            Não porque é perfeito.
            <br />
            Mas porque é verdadeiro.
          </p>

          <p className="font-body text-base font-light leading-loose text-foreground/75 sm:text-lg">
            Eu não te amo só pelo que você é.
          </p>

          <p className="font-body text-base font-light leading-loose text-foreground/75 sm:text-lg">
            Eu te amo pelo que eu me torno quando estou com você.
          </p>

          <p className="font-body text-base font-light leading-loose text-foreground/75 sm:text-lg">
            E se amor for decisão…
            <br />
            eu já decidi.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 1, delay: 1.2 }}
          className="mt-16 space-y-2"
        >
          <p className="font-body text-sm font-light tracking-widest text-muted-foreground uppercase">
            Assinado,
          </p>
          <p className="font-display text-2xl font-light text-gradient sm:text-3xl">
            Seu tigrão!
          </p>
        </motion.div>

        {/* Floating heart */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 2, duration: 1 }}
          className="mt-20 animate-float"
        >
          <span className="text-4xl">❤️</span>
        </motion.div>
      </div>
    </section>
  );
};

export default FinalSection;
