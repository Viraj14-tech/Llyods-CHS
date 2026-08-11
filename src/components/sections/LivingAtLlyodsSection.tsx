import { motion } from 'framer-motion';
import { sectionLabel, sectionHeading, staggerContainer, staggerColumn } from '../../utils/animations';

export default function LivingAtLlyodsSection() {
  const themes = [
    {
      number: '01',
      title: 'Community',
      desc: 'Neighbours, families and residents together form the everyday character of Llyods.'
    },
    {
      number: '02',
      title: 'Shared Responsibility',
      desc: 'A cooperative society works through participation, mutual respect and shared responsibility towards common spaces.'
    },
    {
      number: '03',
      title: 'Continuity',
      desc: 'Thoughtful administration and resident involvement help maintain the society for both present and future members.'
    }
  ];

  return (
    <section id="community" className="py-[72px] md:py-[88px] bg-[var(--color-paper)]">
      <div className="max-w-[1360px] mx-auto px-[20px] md:px-[32px] lg:px-[48px] xl:px-[56px] w-full">
        
        <div className="mb-[64px] md:mb-[80px]">
          <motion.div
            initial="initial"
            whileInView="whileInView"
            viewport="viewport"
            variants={sectionLabel}
          >
            <span className="block text-[11px] md:text-[12px] font-semibold tracking-[0.16em] uppercase text-[var(--color-muted)] mb-6">
              Our Community
            </span>
          </motion.div>
          <motion.h2 
            className="font-display text-[42px] md:text-[52px] leading-[1.05] text-[var(--color-ink)]"
            initial="initial"
            whileInView="whileInView"
            viewport="viewport"
            variants={sectionHeading}
          >
            Life at Llyods.
          </motion.h2>
        </div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-3 gap-y-12 md:gap-y-0"
          initial="initial"
          whileInView="whileInView"
          viewport="viewport"
          variants={staggerContainer}
        >
          {themes.map((theme, idx) => (
            <motion.div 
              key={theme.number}
              className={`flex flex-col relative md:pr-12 ${idx !== 0 ? 'md:pl-12' : ''}`}
              variants={staggerColumn}
            >
              {/* Vertical Rule (Desktop) / Horizontal Rule (Mobile) */}
              {idx !== 0 && (
                <>
                  <motion.div 
                    className="hidden md:block absolute top-0 bottom-0 left-0 w-[1px] bg-[var(--color-rule)] origin-top"
                    initial={{ scaleY: 0 }}
                    whileInView={{ scaleY: 1, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } }}
                    viewport={{ once: true, margin: "-10%" }}
                  />
                  <motion.div 
                    className="md:hidden absolute -top-6 left-0 right-0 h-[1px] bg-[var(--color-rule)] origin-left"
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } }}
                    viewport={{ once: true, margin: "-10%" }}
                  />
                </>
              )}
              
              <span className="text-[32px] md:text-[36px] font-display text-[var(--color-ink)] opacity-40 mb-4 md:mb-5">
                {theme.number}
              </span>
              <h3 className="text-[13px] md:text-[14px] font-semibold tracking-[0.08em] uppercase text-[var(--color-ink)] mb-3">
                {theme.title}
              </h3>
              <p className="text-[15px] md:text-[16px] leading-[1.65] text-[#6F6B65]">
                {theme.desc}
              </p>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
