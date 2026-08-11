import { motion, useReducedMotion, type Variants } from 'framer-motion';
import { sectionLabel, ruleDraw, DUR, EASE_PRIMARY, VIEWPORT_OFFSET } from '../../utils/animations';

export default function CooperativeLivingSection() {
  const shouldReduceMotion = useReducedMotion();

  const principles = [
    {
      title: 'Member Participation',
      desc: 'Members form the foundation of the co-operative and participate in matters concerning the society.'
    },
    {
      title: 'Responsible Administration',
      desc: 'Day-to-day responsibilities are coordinated through an organised committee and society management structure.'
    },
    {
      title: 'Shared Stewardship',
      desc: 'Common spaces and shared responsibilities are managed with the long-term interests of the community in mind.'
    }
  ];

  const staggerContainer: Variants = {
    initial: {},
    whileInView: { 
      transition: { 
        staggerChildren: 0.12,
        delayChildren: 0.1
      } 
    }
  };

  const staggerRowX: Variants = {
    initial: { opacity: 0, x: 12 },
    whileInView: { 
      opacity: 1, 
      x: 0, 
      transition: { duration: DUR.STD, ease: EASE_PRIMARY } 
    }
  };

  return (
    <section id="cooperative" className="py-[64px] md:py-[88px] bg-[var(--color-canvas)]">
      <div className="max-w-[1320px] mx-auto px-[20px] md:px-[32px] lg:px-[48px] xl:px-[56px] w-full">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-[48px] lg:gap-0 items-start">
          
          <div className="lg:col-span-5">
            <motion.div
              initial="initial"
              whileInView="whileInView"
              viewport={VIEWPORT_OFFSET}
              variants={sectionLabel}
            >
              <span className="block text-[11px] md:text-[12px] font-semibold tracking-[0.16em] uppercase text-[var(--color-muted)] mb-6">
                Co-operative Living
              </span>
            </motion.div>
            
            <motion.h2 
              className="font-display text-[42px] md:text-[52px] leading-[1.05] text-[var(--color-ink)] mb-8"
              initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: DUR.STD, delay: 0.1, ease: EASE_PRIMARY }}
              viewport={VIEWPORT_OFFSET}
            >
              Managed together.<br />Maintained together.
            </motion.h2>

            <motion.div 
              className="text-[16px] md:text-[17px] leading-[1.65] text-[#6F6B65] space-y-4 max-w-[480px]"
              initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: DUR.STD, delay: 0.2, ease: EASE_PRIMARY }}
              viewport={VIEWPORT_OFFSET}
            >
              <p>
                A co-operative housing society works through the participation of its members and an elected Managing Committee responsible for coordinating society affairs.
              </p>
            </motion.div>
          </div>

          <div className="hidden lg:block lg:col-span-1" />

          <div className="lg:col-span-6 lg:mt-[32px]">
            <motion.div 
              className="flex flex-col"
              initial={shouldReduceMotion ? { opacity: 0 } : "initial"}
              whileInView={shouldReduceMotion ? { opacity: 1, transition: { duration: DUR.STD } } : "whileInView"}
              viewport={VIEWPORT_OFFSET}
              variants={staggerContainer}
            >
              {principles.map((principle, idx) => (
                <motion.div 
                  key={idx} 
                  className="relative py-6 md:py-8 flex flex-col group"
                  variants={shouldReduceMotion ? {} : staggerRowX}
                >
                  {shouldReduceMotion ? (
                    <div className="absolute top-0 left-0 right-0 h-[1px] bg-[var(--color-rule)]" />
                  ) : (
                    <motion.div 
                      className="absolute top-0 left-0 right-0 h-[1px] bg-[var(--color-rule)] origin-left"
                      variants={ruleDraw}
                    />
                  )}
                  
                  <div className="flex gap-6 items-start">
                    <span className="text-[13px] md:text-[14px] font-semibold tracking-[0.08em] uppercase text-[var(--color-muted)] mt-[2px] transition-transform duration-[240ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:translate-x-[3px]">
                      0{idx + 1}
                    </span>
                    <div className="transition-transform duration-[240ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:translate-x-[4px]">
                      <h3 className="text-[13px] md:text-[14px] font-semibold tracking-[0.08em] uppercase text-[var(--color-ink)] mb-3 transition-colors duration-[240ms] group-hover:text-[var(--color-bronze)]">
                        {principle.title}
                      </h3>
                      <p className="text-[15px] md:text-[16px] leading-[1.65] text-[#6F6B65]">
                        {principle.desc}
                      </p>
                    </div>
                  </div>
                  
                  {idx === principles.length - 1 && (
                    shouldReduceMotion ? (
                      <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-[var(--color-rule)]" />
                    ) : (
                      <motion.div 
                        className="absolute bottom-0 left-0 right-0 h-[1px] bg-[var(--color-rule)] origin-left"
                        variants={ruleDraw}
                      />
                    )
                  )}
                </motion.div>
              ))}
            </motion.div>
          </div>
          
        </div>

      </div>
    </section>
  );
}
