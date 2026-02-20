import { motion } from "framer-motion";

const HeroSection = () => {
  const scrollToNext = () => {
    document.getElementById("antes-de-voce")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden bg-background">
      <div className="relative z-10 px-6 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="font-display text-4xl font-light tracking-wide text-foreground sm:text-5xl md:text-7xl"
        >
          Marcia de Melo Basílio,
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.8, ease: "easeOut" }}
          className="mx-auto mt-8 max-w-xl font-body text-lg font-light leading-relaxed text-muted-foreground sm:text-xl"
        >
          Se um dia eu tiver que explicar o que é amor,
          <br />
          eu vou falar do que eu sinto por você.
        </motion.p>

        <motion.button
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.6 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.97 }}
          onClick={scrollToNext}
          className="mt-12 rounded-full border border-primary/30 bg-primary/10 px-8 py-3 font-body text-sm font-medium tracking-widest text-foreground uppercase backdrop-blur-sm transition-all duration-500 hover:border-primary/60 hover:bg-primary/20 animate-pulse-glow"
        >
          Lê isso até o final.
        </motion.button>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.5, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="h-10 w-6 rounded-full border border-foreground/20 flex items-start justify-center pt-2"
        >
          <div className="h-2 w-1 rounded-full bg-primary/60" />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
