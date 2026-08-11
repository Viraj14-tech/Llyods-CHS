import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { sectionHeading, sectionLabel, ruleDraw, staggerContainer, staggerRow } from '../../utils/animations';
import { Lock } from 'lucide-react';

export default function MemberPortalPreview() {
  const portalFeatures = [
    'Notices & Circulars',
    'AGM / SGM Records',
    'Meeting Minutes',
    'Society Documents',
    'Audit Reports',
    'Forms & Downloads',
    'Redevelopment Records',
    'Other Member Resources'
  ];

  return (
    <section id="member-portal" className="py-[72px] md:py-[104px] bg-[var(--color-graphite)] text-[#FAF8F3]">
      <div className="max-w-[1360px] mx-auto px-[20px] md:px-[32px] lg:px-[48px] xl:px-[56px] w-full">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-[48px] lg:gap-0 items-start">
          
          <div className="lg:col-span-5">
            <motion.div
              initial="initial"
              whileInView="whileInView"
              viewport="viewport"
              variants={sectionLabel}
            >
              <span className="block text-[11px] md:text-[12px] font-semibold tracking-[0.16em] uppercase text-[rgba(250,248,243,0.5)] mb-6">
                Member Portal
              </span>
            </motion.div>
            
            <motion.h2 
              className="font-display text-[42px] md:text-[52px] leading-[1.05] mb-8 max-w-[480px]"
              initial="initial"
              whileInView="whileInView"
              viewport="viewport"
              variants={sectionHeading}
            >
              Society information,<br />available securely to members.
            </motion.h2>

            <motion.div 
              className="text-[16px] md:text-[17px] leading-[1.65] text-[rgba(250,248,243,0.7)] space-y-6 max-w-[440px]"
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0, transition: { duration: 0.6, delay: 0.2 } }}
              viewport={{ once: true, margin: "-10%" }}
            >
              <p>
                Registered members of Llyods CHSL can sign in to access society communications, records and member-specific resources.
              </p>
              <p className="text-[14px] leading-[1.6]">
                Society records and member communications are available only to authorised members.
              </p>
              
              <Link 
                to="/login"
                className="inline-flex items-center gap-3 bg-[#FAF8F3] text-[var(--color-ink)] px-7 py-4 rounded-[4px] text-[13px] font-semibold tracking-wide transition-colors duration-200 hover:bg-[var(--color-bronze)] hover:text-[#FAF8F3] mt-4 group"
              >
                <Lock size={16} className="transition-colors group-hover:text-[#FAF8F3]" />
                Member Login
                <span className="transition-transform duration-200 group-hover:translate-x-1">→</span>
              </Link>
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
              {portalFeatures.map((feature, idx) => (
                <motion.div 
                  key={idx} 
                  className="relative py-5 md:py-6 flex items-center justify-between group"
                  variants={staggerRow}
                >
                  <motion.div 
                    className="absolute top-0 left-0 right-0 h-[1px] bg-[rgba(250,248,243,0.1)] origin-left"
                    variants={ruleDraw}
                  />
                  <span className="text-[15px] md:text-[16px] font-medium text-[rgba(250,248,243,0.9)]">
                    {feature}
                  </span>
                  
                  {idx === portalFeatures.length - 1 && (
                    <motion.div 
                      className="absolute bottom-0 left-0 right-0 h-[1px] bg-[rgba(250,248,243,0.1)] origin-left"
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
