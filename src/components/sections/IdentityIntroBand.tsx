import { motion } from 'framer-motion';
import { sectionHeading, ruleDraw } from '../../utils/animations';

export default function IdentityIntroBand() {
  return (
    <section id="intro" className="bg-[var(--color-paper)] pt-[64px] pb-[88px] md:pt-[88px] md:pb-[112px]">
      <div className="max-w-[1320px] mx-auto px-[20px] md:px-[32px] lg:px-[48px] xl:px-[56px]">
        
        <div className="max-w-[800px]">
          <motion.h2 
            className="font-display text-[28px] md:text-[36px] text-[var(--color-ink)] mb-8"
            initial="initial"
            whileInView="whileInView"
            viewport="viewport"
            variants={sectionHeading}
          >
            Llyods Garden Co-operative Housing Society Ltd.
          </motion.h2>

          <motion.div 
            className="h-[1px] bg-[var(--color-rule)] w-full mb-8"
            initial="initial"
            whileInView="whileInView"
            viewport="viewport"
            variants={ruleDraw}
          />

          <motion.p 
            className="text-[16px] md:text-[18px] leading-[1.65] text-[#6F6B65]"
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0, transition: { duration: 0.6, delay: 0.2 } }}
            viewport={{ once: true, margin: "-10%" }}
          >
            A cooperative residential community with a focus on responsible administration, shared living and long-term stewardship.
          </motion.p>
        </div>
        
      </div>
    </section>
  );
}
