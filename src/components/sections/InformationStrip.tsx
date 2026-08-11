import { motion } from 'framer-motion';
import { societyData } from '../../data/society';

export default function InformationStrip() {
  return (
    <section className="border-t border-b border-[var(--color-border-subtle)] bg-[var(--color-paper)]">
      <div className="max-w-[1320px] mx-auto px-[20px] md:px-[40px] lg:px-[64px]">
        
        <motion.div 
          className="grid grid-cols-2 md:grid-cols-4 divide-x divide-y md:divide-y-0 divide-[var(--color-border-subtle)] -mx-[20px] md:mx-0"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-10%" }}
          transition={{ duration: 0.7 }}
        >
          
          <div className="p-6 md:p-8 lg:p-10 flex flex-col justify-center">
            <span className="text-[11px] font-semibold tracking-widest uppercase text-[var(--color-stone)] mb-2 md:mb-3">Established</span>
            <span className="font-display text-[24px] md:text-[32px] text-[var(--color-ink)]">{societyData.established}</span>
          </div>

          <div className="p-6 md:p-8 lg:p-10 flex flex-col justify-center">
            <span className="text-[11px] font-semibold tracking-widest uppercase text-[var(--color-stone)] mb-2 md:mb-3">Location</span>
            <span className="font-display text-[24px] md:text-[32px] text-[var(--color-ink)]">{societyData.location}</span>
          </div>

          <div className="p-6 md:p-8 lg:p-10 flex flex-col justify-center">
            <span className="text-[11px] font-semibold tracking-widest uppercase text-[var(--color-stone)] mb-2 md:mb-3">Registration</span>
            <span className="font-display text-[24px] md:text-[32px] text-[var(--color-ink)]">{societyData.registrationNumber}</span>
          </div>

          <div className="p-6 md:p-8 lg:p-10 flex flex-col justify-center">
            <span className="text-[11px] font-semibold tracking-widest uppercase text-[var(--color-stone)] mb-2 md:mb-3">Members</span>
            <span className="font-display text-[24px] md:text-[32px] text-[var(--color-ink)]">{societyData.memberCount}</span>
          </div>

        </motion.div>
        
      </div>
    </section>
  );
}
