import { motion } from 'framer-motion';
import { sectionHeading, sectionLabel } from '../../utils/animations';

export default function WelcomeSection() {
  return (
    <section id="welcome" className="bg-[var(--color-paper)] pt-[80px] md:pt-[96px] pb-[40px] md:pb-[56px]">
      <div className="max-w-[1360px] mx-auto px-[20px] md:px-[32px] lg:px-[48px] xl:px-[56px] w-full">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-[48px] lg:gap-0 items-start">
          
          {/* Text Content (6 columns) */}
          <div className="lg:col-span-6 flex flex-col pt-4">
            <motion.div
              initial="initial"
              whileInView="whileInView"
              viewport="viewport"
              variants={sectionLabel}
            >
              <span className="block text-[11px] md:text-[12px] font-semibold tracking-[0.16em] uppercase text-[var(--color-muted)] mb-6">
                Welcome to Llyods
              </span>
            </motion.div>

            <motion.h2 
              className="font-display text-[42px] md:text-[56px] leading-[1.05] text-[var(--color-ink)] mb-8 max-w-[500px]"
              initial="initial"
              whileInView="whileInView"
              viewport="viewport"
              variants={sectionHeading}
            >
              A community we call home.
            </motion.h2>

            <motion.div 
              className="text-[16px] md:text-[17px] leading-[1.65] text-[#6F6B65] space-y-4 max-w-[560px]"
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0, transition: { duration: 0.6, delay: 0.2 } }}
              viewport={{ once: true, margin: "-10%" }}
            >
              <p>
                <strong className="font-medium text-[var(--color-ink)]">Llyods Garden Co-operative Housing Society Ltd.</strong> is a residential community built around cooperation, responsible administration and shared ownership of the spaces residents call home.
              </p>
              <p>
                The society brings members together through a structured cooperative framework while maintaining a strong focus on the upkeep, management and long-term well-being of the community.
              </p>
            </motion.div>
          </div>

          {/* Spacer (1 column) */}
          <div className="hidden lg:block lg:col-span-1" />

          {/* Identity Image (5 columns) */}
          <div className="lg:col-span-5 w-full flex lg:mt-[32px]">
            <motion.div 
              className="w-full aspect-[4/5] lg:aspect-[3/4] overflow-hidden rounded-[4px] bg-[var(--color-rule)]"
              initial={{ opacity: 0, clipPath: 'inset(0 0 10% 0)' }}
              whileInView={{ opacity: 1, clipPath: 'inset(0 0 0 0)', transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } }}
              viewport={{ once: true }}
            >
              <motion.img 
                loading="lazy"
                decoding="async"
                src="/society-images/llyods3.png" 
                alt="Llyods Garden society sign surrounded by greenery" 
                className="w-full h-full object-cover"
                initial={{ scale: 1.025 }}
                whileInView={{ scale: 1, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } }}
                viewport={{ once: true }}
              />
            </motion.div>
          </div>

        </div>
        
      </div>
    </section>
  );
}
