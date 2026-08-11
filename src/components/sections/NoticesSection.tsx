import { motion } from 'framer-motion';
import { noticesData } from '../../data/notices';
import { fadeUp, staggerContainer, staggerItem } from '../../utils/animations';

export default function NoticesSection() {
  return (
    <section id="notices" className="py-[80px] md:py-[120px]">
      <div className="max-w-[1320px] mx-auto px-[20px] md:px-[40px] lg:px-[64px]">
        
        <motion.div 
          className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12"
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, margin: "-10%" }}
          variants={fadeUp}
        >
          <div>
            <span className="block text-[11px] font-semibold tracking-[0.16em] uppercase text-[var(--color-stone)] mb-4">
              Latest Notices
            </span>
            <h2 className="font-display text-[34px] md:text-[42px] text-[var(--color-ink)]">
              Announcements & Updates
            </h2>
          </div>
          
          <a 
            href="#" 
            className="inline-flex items-center gap-2 text-[13px] font-semibold tracking-wide text-[var(--color-ink)] hover:text-[var(--color-accent)] transition-colors group"
          >
            View all notices
            <span className="transition-transform duration-200 group-hover:translate-x-1">→</span>
          </a>
        </motion.div>

        <motion.div
          className="border-t border-[var(--color-border-subtle)]"
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, margin: "-10%" }}
          variants={staggerContainer}
        >
          {noticesData.map((notice) => (
            <motion.a
              key={notice.id}
              href={`#notice-${notice.id}`}
              className="group flex flex-col md:flex-row md:items-center py-6 md:py-8 border-b border-[var(--color-border-subtle)] hover:bg-[var(--color-paper)] transition-colors duration-300 px-4 -mx-4 md:px-6 md:-mx-6"
              variants={staggerItem}
            >
              <div className="w-full md:w-[120px] lg:w-[160px] flex md:flex-col items-baseline md:items-start gap-2 md:gap-0 mb-4 md:mb-0 shrink-0">
                <span className="font-display text-[28px] md:text-[32px] text-[var(--color-ink)] leading-none">{notice.day}</span>
                <span className="text-[11px] font-semibold tracking-widest text-[var(--color-stone)] uppercase mt-1">{notice.monthYear}</span>
              </div>
              
              <div className="flex-grow pr-6">
                <h3 className="text-[18px] md:text-[20px] font-medium text-[var(--color-ink)] mb-1 group-hover:text-[var(--color-accent)] transition-colors duration-200">
                  {notice.title}
                </h3>
              </div>
              
              <div className="w-full md:w-[140px] shrink-0 flex justify-between items-center mt-4 md:mt-0 text-[var(--color-stone)]">
                <span className="text-[13px]">{notice.category}</span>
                <span className="transition-transform duration-200 group-hover:translate-x-1">→</span>
              </div>
            </motion.a>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
