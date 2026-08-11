import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

export default function AboutSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [40, -40]);

  return (
    <section id="about" className="bg-[var(--color-paper)] pt-[40px] md:pt-[56px] pb-[72px] md:pb-[96px]" ref={containerRef}>
      <div className="max-w-[1360px] mx-auto px-[20px] md:px-[32px] lg:px-[48px] xl:px-[56px] w-full">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-[48px] lg:gap-0 items-start">
          
          {/* Image (5 cols) */}
          <div className="lg:col-span-5 order-2 lg:order-1 lg:mt-0">
            <motion.div style={{ y }}>
              <motion.div 
                className="aspect-[4/5] overflow-hidden rounded-[4px] bg-[var(--color-rule)]"
                initial={{ clipPath: 'inset(0 100% 0 0)' }}
                whileInView={{ clipPath: 'inset(0 0% 0 0)', transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } }}
                viewport={{ once: true }}
              >
                <motion.img 
                  loading="lazy"
                  decoding="async"
                  src="/society-images/llyods2.png" 
                  alt="Entrance to Llyods Garden Co-operative Housing Society" 
                  className="w-full h-full object-cover object-center"
                  initial={{ scale: 1.025 }}
                  whileInView={{ scale: 1, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } }}
                  viewport={{ once: true }}
                />
              </motion.div>
            </motion.div>
          </div>

          {/* Spacer (1 col) */}
          <div className="hidden lg:block lg:col-span-1 lg:order-2" />

          {/* Text (6 cols) */}
          <div className="lg:col-span-6 flex flex-col order-1 lg:order-3 lg:pt-[80px]">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1, transition: { duration: 0.6 } }}
              viewport={{ once: true, margin: "-10%" }}
            >
              <span className="block text-[11px] md:text-[12px] font-semibold tracking-[0.16em] uppercase text-[var(--color-muted)] mb-6">
                About Llyods
              </span>
            </motion.div>
            
            <motion.h2 
              className="font-display text-[42px] md:text-[52px] leading-[1.05] text-[var(--color-ink)] mb-8 max-w-[500px]"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0, transition: { duration: 0.6, delay: 0.08, ease: [0.22, 1, 0.36, 1] } }}
              viewport={{ once: true, margin: "-10%" }}
            >
              Built around community.
            </motion.h2>
            
            <motion.div 
              className="text-[16.5px] md:text-[18px] leading-[1.7] text-[#6F6B65] max-w-[580px] space-y-4"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0, transition: { duration: 0.6, delay: 0.16, ease: [0.22, 1, 0.36, 1] } }}
              viewport={{ once: true, margin: "-10%" }}
            >
              <p>
                At Llyods, residential living extends beyond individual homes. The society is shaped by the participation of its members and the shared responsibility of maintaining common spaces, community standards and society affairs.
              </p>
              <p>
                The Managing Committee works together with residents to support the day-to-day administration of the society while preserving an organised, respectful and community-focused environment.
              </p>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
