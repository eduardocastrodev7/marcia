import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

interface TextSectionProps {
  id?: string;
  title: string;
  paragraphs: string[];
  accent?: boolean;
}

const TextSection = ({ id, title, paragraphs, accent }: TextSectionProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id={id} ref={ref} className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-2xl px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div className="divider-romantic mb-10" />
          <h2
            className={`font-display text-2xl font-light tracking-wide sm:text-3xl md:text-4xl ${
              accent ? "text-gradient" : "text-foreground"
            }`}
          >
            {title}
          </h2>
        </motion.div>

        <div className="mt-10 space-y-6">
          {paragraphs.map((text, i) => (
            <motion.p
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.3 + i * 0.15, ease: "easeOut" }}
              className="font-body text-base font-light leading-loose text-foreground/75 sm:text-lg"
            >
              {text}
            </motion.p>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TextSection;
