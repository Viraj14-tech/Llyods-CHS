import { motion, useReducedMotion, type Variants } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ruleDraw, DUR, EASE_PRIMARY, VIEWPORT_OFFSET } from '../../utils/animations';
import { Lock } from 'lucide-react';

export default function MemberPortalPreview() {
  const shouldReduceMotion = useReducedMotion();

  const portalFeatures = [
    'Notices & Circulars',
    'AGM / SGM Records',
    'Meeting Minutes',
    'Society Documents',
    'Audit Reports',
    'Forms & Downloads',
    'Redevelopment Records'
  ];

  const staggerContainer: Variants = {
    initial: {},
    whileInView: {
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const featureFade: Variants = {
    initial: { opacity: 0 },
    whileInView: { opacity: 1, transition: { duration: DUR.STD } }
  };

  return (
    <section id="member-portal" className="py-[72px] md:py-[96px] bg-[var(--color-graphite)] text-[#FAF8F3]">
      <div className="max-w-[1320px] mx-auto px-[20px] md:px-[32px] lg:px-[48px] xl:px-[56px] w-full">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-[48px] lg:gap-0 items-start">
          
          <div className="lg:col-span-5">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: DUR.STD }}
              viewport={VIEWPORT_OFFSET}
            >
              <span className="block text-[11px] md:text-[12px] font-semibold tracking-[0.16em] uppercase text-[rgba(250,248,243,0.5)] mb-6">
                Member Portal
              </span>
            </motion.div>
            
            <div className="overflow-hidden mb-8 max-w-[480px]">
              <motion.h2 
                className="font-display text-[42px] md:text-[52px] leading-[1.05]"
                initial={{ opacity: 0, y: shouldReduceMotion ? 0 : "100%" }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: DUR.EDITORIAL, delay: 0.1, ease: EASE_PRIMARY }}
                viewport={VIEWPORT_OFFSET}
              >
                Society information,<br />available securely to members.
              </motion.h2>
            </div>

            <motion.div 
              className="text-[16px] md:text-[17px] leading-[1.65] text-[rgba(250,248,243,0.7)] space-y-6 max-w-[440px]"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: DUR.STD, delay: 0.2 }}
              viewport={VIEWPORT_OFFSET}
            >
              <p>
                Registered members can sign in to access society communications, records and member-specific resources.
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
              initial={shouldReduceMotion ? { opacity: 0 } : "initial"}
              whileInView={shouldReduceMotion ? { opacity: 1, transition: { duration: DUR.STD } } : "whileInView"}
              viewport={VIEWPORT_OFFSET}
              variants={staggerContainer}
            >
              {portalFeatures.map((feature, idx) => (
                <motion.div 
                  key={idx} 
                  className="relative py-5 md:py-6 flex items-center justify-between group"
                  variants={shouldReduceMotion ? {} : featureFade}
                >
                  {shouldReduceMotion ? (
                    <div className="absolute top-0 left-0 right-0 h-[1px] bg-[rgba(250,248,243,0.1)]" />
                  ) : (
                    <motion.div 
                      className="absolute top-0 left-0 right-0 h-[1px] bg-[rgba(250,248,243,0.1)] origin-left"
                      variants={ruleDraw}
                    />
                  )}
                  
                  <span className="text-[15px] md:text-[16px] font-medium text-[rgba(250,248,243,0.9)]">
                    {feature}
                  </span>
                  
                  {idx === portalFeatures.length - 1 && (
                    shouldReduceMotion ? (
                      <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-[rgba(250,248,243,0.1)]" />
                    ) : (
                      <motion.div 
                        className="absolute bottom-0 left-0 right-0 h-[1px] bg-[rgba(250,248,243,0.1)] origin-left"
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
