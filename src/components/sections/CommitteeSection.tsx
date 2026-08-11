import { motion } from 'framer-motion';
import { committeeData } from '../../data/committee';
import { sectionLabel, sectionHeading, staggerContainer, staggerRow, ruleDraw } from '../../utils/animations';

export default function CommitteeSection() {
  const primaryMembers = committeeData.filter(m => m.isPrimary);
  const regularMembers = committeeData.filter(m => !m.isPrimary);

  return (
    <section id="committee" className="py-[72px] md:py-[96px] bg-[var(--color-paper)]">
      <div className="max-w-[1360px] mx-auto px-[20px] md:px-[32px] lg:px-[48px] xl:px-[56px] w-full">
        
        <div className="mb-[48px] md:mb-[72px]">
          <motion.div
            initial="initial"
            whileInView="whileInView"
            viewport="viewport"
            variants={sectionLabel}
          >
            <span className="block text-[11px] md:text-[12px] font-semibold tracking-[0.16em] uppercase text-[var(--color-muted)] mb-6">
              Administration
            </span>
          </motion.div>
          <motion.h2 
            className="font-display text-[42px] md:text-[52px] leading-[1.05] text-[var(--color-ink)] mb-6"
            initial="initial"
            whileInView="whileInView"
            viewport="viewport"
            variants={sectionHeading}
          >
            Managing Committee
          </motion.h2>
          <motion.p 
            className="text-[16px] md:text-[17px] leading-[1.65] text-[#6F6B65] max-w-[560px]"
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0, transition: { duration: 0.6, delay: 0.2 } }}
            viewport={{ once: true, margin: "-10%" }}
          >
            The Managing Committee represents the society in its administrative and community responsibilities and works with members on matters concerning the society.
          </motion.p>
        </div>

        {/* Primary Bearers */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12 mb-[48px] md:mb-[64px]"
          initial="initial"
          whileInView="whileInView"
          viewport="viewport"
          variants={staggerContainer}
        >
          {primaryMembers.map((member, idx) => (
            <motion.div key={member.id} className="flex flex-col relative pt-6" variants={staggerRow}>
              <motion.div 
                className="absolute top-0 left-0 right-0 h-[1px] bg-[var(--color-rule)] origin-left"
                variants={ruleDraw}
              />
              <span className="text-[11px] md:text-[12px] font-semibold tracking-[0.16em] text-[var(--color-muted)] uppercase mb-3">
                {String(idx + 1).padStart(2, '0')}
              </span>
              <h3 className="text-[16px] md:text-[17px] font-medium text-[var(--color-ink)] mb-1">
                {member.name}
              </h3>
              <span className="text-[14px] text-[var(--color-muted)]">
                {member.role}
              </span>
            </motion.div>
          ))}
        </motion.div>

        {/* Regular Members */}
        <div className="mb-[56px] md:mb-[72px]">
          <motion.div
            initial="initial"
            whileInView="whileInView"
            viewport="viewport"
            variants={sectionLabel}
          >
            <span className="block text-[10px] md:text-[11px] font-semibold tracking-[0.16em] uppercase text-[var(--color-muted)] mb-6">
              COMMITTEE MEMBERS
            </span>
          </motion.div>
          
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 gap-y-4 md:gap-y-6 gap-x-12"
            initial="initial"
            whileInView="whileInView"
            viewport="viewport"
            variants={staggerContainer}
          >
            {regularMembers.map((member) => (
              <motion.div key={member.id} className="flex flex-col sm:flex-row sm:items-baseline gap-1 sm:gap-4 border-b border-[var(--color-rule)] pb-4 md:border-none md:pb-0" variants={staggerRow}>
                <span className="text-[15px] font-medium text-[var(--color-ink)] sm:min-w-[180px]">
                  {member.name}
                </span>
                <span className="text-[14px] text-[var(--color-muted)]">
                  {member.role}
                </span>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Committee Note */}
        <div className="pt-[48px] md:pt-[64px] border-t border-[var(--color-rule)] max-w-[700px]">
          <motion.div
            initial="initial"
            whileInView="whileInView"
            viewport="viewport"
            variants={sectionLabel}
          >
            <span className="block text-[11px] md:text-[12px] font-semibold tracking-[0.16em] uppercase text-[var(--color-muted)] mb-6">
              From the Managing Committee
            </span>
          </motion.div>
          <motion.h3 
            className="font-display text-[32px] md:text-[40px] text-[var(--color-ink)] mb-6"
            initial="initial"
            whileInView="whileInView"
            viewport="viewport"
            variants={sectionHeading}
          >
            Working together for our community.
          </motion.h3>
          <motion.div 
            className="text-[16px] md:text-[17px] leading-[1.65] text-[#6F6B65] space-y-4"
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0, transition: { duration: 0.6, delay: 0.2 } }}
            viewport={{ once: true, margin: "-10%" }}
          >
            <p>
              A well-functioning society is built through communication, participation and cooperation among its members.
            </p>
            <p>
              The Managing Committee remains committed to supporting an organised and responsible community environment at Llyods and encourages members to stay connected through the society’s official channels.
            </p>
          </motion.div>
        </div>

      </div>
    </section>
  );
}
