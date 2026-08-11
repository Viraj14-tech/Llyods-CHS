import { motion } from 'framer-motion';
import { documentResources } from '../../data/documents';
import { fadeUp, staggerContainer, staggerItem } from '../../utils/animations';

export default function ResourcesSection() {
  return (
    <section id="documents" className="py-[80px] md:py-[120px]">
      <div className="max-w-[1320px] mx-auto px-[20px] md:px-[40px] lg:px-[64px]">
        
        <motion.div
          className="max-w-[600px] mb-12"
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, margin: "-10%" }}
          variants={fadeUp}
        >
          <span className="block text-[11px] font-semibold tracking-[0.16em] uppercase text-[var(--color-stone)] mb-4">
            Members Area
          </span>
          <h2 className="font-display text-[34px] md:text-[42px] text-[var(--color-ink)]">
            Member Resources
          </h2>
        </motion.div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 gap-x-12 lg:gap-x-24 gap-y-0"
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, margin: "-10%" }}
          variants={staggerContainer}
        >
          {documentResources.map((doc) => (
            <motion.a
              key={doc.id}
              href="/login"
              className="group flex justify-between items-center py-5 border-b border-[var(--color-border-subtle)] hover:border-[var(--color-ink)] transition-colors duration-300"
              variants={staggerItem}
            >
              <span className="text-[16px] font-medium text-[var(--color-ink)]">
                {doc.title}
              </span>
              <span className="text-[var(--color-stone)] transition-transform duration-200 group-hover:translate-x-1">
                →
              </span>
            </motion.a>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
