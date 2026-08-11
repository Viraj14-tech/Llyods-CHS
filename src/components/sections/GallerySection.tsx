import { motion } from 'framer-motion';
import { sectionLabel, sectionHeading } from '../../utils/animations';

export default function GallerySection() {
  return (
    <section id="gallery" className="pt-[72px] md:pt-[96px] pb-[80px] md:pb-[96px] bg-[var(--color-canvas)]">
      <div className="max-w-[1360px] mx-auto px-[20px] md:px-[32px] lg:px-[48px] xl:px-[56px] w-full">
        
        {/* Gallery Header */}
        <div className="mb-[44px] md:mb-[56px]">
          <motion.div
            initial="initial"
            whileInView="whileInView"
            viewport="viewport"
            variants={sectionLabel}
          >
            <span className="block text-[11px] md:text-[12px] font-semibold tracking-[0.16em] uppercase text-[var(--color-muted)] mb-[16px]">
              Life at Llyods
            </span>
          </motion.div>
          <motion.h2 
            className="font-display text-[42px] md:text-[52px] leading-[1.05] text-[var(--color-ink)] mb-[24px]"
            initial="initial"
            whileInView="whileInView"
            viewport="viewport"
            variants={sectionHeading}
          >
            A glimpse of Llyods.
          </motion.h2>
          <motion.p 
            className="text-[16px] md:text-[17px] leading-[1.65] text-[#6F6B65] max-w-[480px]"
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0, transition: { duration: 0.6, delay: 0.2 } }}
            viewport={{ once: true, margin: "-10%" }}
          >
            Society spaces, surroundings and moments from the community.
          </motion.p>
        </div>

        {/* Architectural Collage */}
        <div className="flex flex-col gap-[12px] md:gap-[14px] lg:gap-[16px]">
          
          {/* Row 1 */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-[12px] md:gap-[14px] lg:gap-[16px]">
            
            {/* llyods4: cols 1-8 */}
            <div className="lg:col-span-8 group">
              <motion.div 
                className="w-full h-full lg:h-[450px] aspect-[4/3] md:aspect-auto overflow-hidden rounded-[4px] bg-[var(--color-rule)]"
                initial={{ opacity: 0, clipPath: 'inset(0 0 10% 0)' }}
                whileInView={{ opacity: 1, clipPath: 'inset(0 0 0 0)', transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0 } }}
                viewport={{ once: true, margin: "-10%" }}
              >
                <img 
                  loading="lazy"
                  decoding="async"
                  src="/society-images/llyods4.png" 
                  alt="Exterior view of Llyods Garden Co-operative Housing Society" 
                  className="w-full h-full block object-cover object-[50%_38%] transition-transform duration-[500ms] ease-[cubic-bezier(0.22,1,0.36,1)] lg:group-hover:scale-[1.018]"
                />
              </motion.div>
            </div>

            {/* llyods2: cols 9-12 */}
            <div className="lg:col-span-4 group">
              <motion.div 
                className="w-full h-full lg:h-[450px] aspect-[4/5] md:aspect-auto overflow-hidden rounded-[4px] bg-[var(--color-rule)]"
                initial={{ opacity: 0, clipPath: 'inset(0 0 10% 0)' }}
                whileInView={{ opacity: 1, clipPath: 'inset(0 0 0 0)', transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.1 } }}
                viewport={{ once: true, margin: "-10%" }}
              >
                <img 
                  loading="lazy"
                  decoding="async"
                  src="/society-images/llyods2.png" 
                  alt="Entrance to Llyods Garden Co-operative Housing Society" 
                  className="w-full h-full block object-cover object-[50%_52%] transition-transform duration-[500ms] ease-[cubic-bezier(0.22,1,0.36,1)] lg:group-hover:scale-[1.018]"
                />
              </motion.div>
            </div>
            
          </div>

          {/* Row 2 */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-[12px] md:gap-[14px] lg:gap-[16px]">
            
            {/* llyods1: cols 1-5 */}
            <div className="lg:col-span-5 group">
              <motion.div 
                className="w-full h-full lg:h-[380px] aspect-[4/3] md:aspect-auto overflow-hidden rounded-[4px] bg-[var(--color-rule)]"
                initial={{ opacity: 0, clipPath: 'inset(0 0 10% 0)' }}
                whileInView={{ opacity: 1, clipPath: 'inset(0 0 0 0)', transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.16 } }}
                viewport={{ once: true, margin: "-10%" }}
              >
                <img 
                  loading="lazy"
                  decoding="async"
                  src="/society-images/llyods1.png" 
                  alt="Street view of Llyods Garden and its tree-lined entrance" 
                  className="w-full h-full block object-cover object-[50%_40%] transition-transform duration-[500ms] ease-[cubic-bezier(0.22,1,0.36,1)] lg:group-hover:scale-[1.018]"
                />
              </motion.div>
            </div>

            {/* llyods3: cols 6-12 */}
            <div className="lg:col-span-7 group">
              <motion.div 
                className="w-full h-full lg:h-[380px] aspect-[4/5] md:aspect-auto overflow-hidden rounded-[4px] bg-[var(--color-rule)]"
                initial={{ opacity: 0, clipPath: 'inset(0 0 10% 0)' }}
                whileInView={{ opacity: 1, clipPath: 'inset(0 0 0 0)', transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.23 } }}
                viewport={{ once: true, margin: "-10%" }}
              >
                <img 
                  loading="lazy"
                  decoding="async"
                  src="/society-images/llyods3.png" 
                  alt="Llyods Garden society sign surrounded by greenery" 
                  className="w-full h-full block object-cover object-[center_48%] transition-transform duration-[500ms] ease-[cubic-bezier(0.22,1,0.36,1)] lg:group-hover:scale-[1.018]"
                />
              </motion.div>
            </div>
            
          </div>

        </div>

      </div>
    </section>
  );
}
