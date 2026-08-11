import { motion } from 'framer-motion';
import { sectionLabel, sectionHeading, staggerContainer, staggerRow, ruleDraw } from '../../utils/animations';

export default function CooperativeLivingSection() {
  const principles = [
    {
      title: 'Member Participation',
      desc: 'Members form the foundation of the cooperative community.'
    },
    {
      title: 'Responsible Administration',
      desc: 'Society affairs are coordinated through an organised management structure.'
    },
    {
      title: 'Shared Stewardship',
      desc: 'Common spaces and responsibilities are cared for collectively.'
    }
  ];

  return (
    <section id="cooperative" className="py-[72px] md:py-[96px] bg-[var(--color-canvas)]">
      <div className="max-w-[1360px] mx-auto px-[20px] md:px-[32px] lg:px-[48px] xl:px-[56px] w-full">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-[48px] lg:gap-0 items-start">
          
          <div className="lg:col-span-5">
            <motion.div
              initial="initial"
              whileInView="whileInView"
              viewport="viewport"
              variants={sectionLabel}
            >
              <span className="block text-[11px] md:text-[12px] font-semibold tracking-[0.16em] uppercase text-[var(--color-muted)] mb-6">
                Co-operative Living
              </span>
            </motion.div>
            
            <motion.h2 
              className="font-display text-[42px] md:text-[52px] leading-[1.05] text-[var(--color-ink)] mb-8"
              initial="initial"
              whileInView="whileInView"
              viewport="viewport"
              variants={sectionHeading}
            >
              Managed together.<br />Maintained together.
            </motion.h2>

            <motion.div 
              className="text-[16px] md:text-[17px] leading-[1.65] text-[#6F6B65] space-y-4 max-w-[480px]"
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0, transition: { duration: 0.6, delay: 0.2 } }}
              viewport={{ once: true, margin: "-10%" }}
            >
              <p>
                As a Co-operative Housing Society, Llyods is governed through the participation of its members and an elected Managing Committee.
              </p>
              <p>
                The committee supports society administration, coordinates common responsibilities and represents the interests of the residential community in accordance with the society’s framework.
              </p>
            </motion.div>
          </div>

          <div className="hidden lg:block lg:col-span-1" />

          <div className="lg:col-span-6 lg:mt-[32px]">
            <motion.div 
              className="flex flex-col"
              initial="initial"
              whileInView="whileInView"
              viewport="viewport"
              variants={staggerContainer}
            >
              {principles.map((principle, idx) => (
                <motion.div 
                  key={idx} 
                  className="relative py-8 md:py-10 flex flex-col group"
                  variants={staggerRow}
                >
                  <motion.div 
                    className="absolute top-0 left-0 right-0 h-[1px] bg-[var(--color-rule)] origin-left"
                    variants={ruleDraw}
                  />
                  <div className="flex gap-6 items-start">
                    <span className="text-[13px] md:text-[14px] font-semibold tracking-[0.08em] uppercase text-[var(--color-muted)] mt-[2px]">
                      0{idx + 1}
                    </span>
                    <div>
                      <h3 className="text-[13px] md:text-[14px] font-semibold tracking-[0.08em] uppercase text-[var(--color-ink)] mb-3">
                        {principle.title}
                      </h3>
                      <p className="text-[15px] md:text-[16px] leading-[1.65] text-[#6F6B65]">
                        {principle.desc}
                      </p>
                    </div>
                  </div>
                  
                  {idx === principles.length - 1 && (
                    <motion.div 
                      className="absolute bottom-0 left-0 right-0 h-[1px] bg-[var(--color-rule)] origin-left"
                      variants={ruleDraw}
                    />
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
