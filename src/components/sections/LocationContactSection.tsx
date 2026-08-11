import { motion } from 'framer-motion';
import { sectionLabel, sectionHeading, staggerContainer, staggerRow } from '../../utils/animations';
import { societyData } from '../../data/society';
import { MapPin } from 'lucide-react';

export default function LocationContactSection() {
  return (
    <section id="contact" className="py-[64px] md:py-[96px] bg-[var(--color-paper)]">
      <div className="max-w-[1360px] mx-auto px-[20px] md:px-[32px] lg:px-[48px] xl:px-[56px] w-full">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-[48px] lg:gap-[64px] items-start">
          
          {/* Left Column: Contact Details */}
          <div className="lg:col-span-5 flex flex-col justify-between h-full">
            <div>
              <motion.div
                initial="initial"
                whileInView="whileInView"
                viewport="viewport"
                variants={sectionLabel}
              >
                <span className="block text-[11px] md:text-[12px] font-semibold tracking-[0.16em] uppercase text-[var(--color-muted)] mb-6">
                  Contact
                </span>
              </motion.div>
              
              <motion.h2 
                className="font-display text-[42px] md:text-[52px] leading-[1.05] text-[var(--color-ink)] mb-[40px] md:mb-[48px]"
                initial="initial"
                whileInView="whileInView"
                viewport="viewport"
                variants={sectionHeading}
              >
                Visit or get in touch.
              </motion.h2>

              <motion.div 
                className="flex flex-col gap-[32px]"
                initial="initial"
                whileInView="whileInView"
                viewport="viewport"
                variants={staggerContainer}
              >
                <motion.div variants={staggerRow}>
                  <h4 className="text-[11px] font-semibold tracking-[0.16em] uppercase text-[var(--color-muted)] mb-2">Society Office</h4>
                  <p className="text-[15px] md:text-[16px] leading-[1.65] text-[var(--color-ink)]">
                    Lloyds Garden, Appasaheb Marathe Marg,<br />
                    near Century Bazar, Prabhadevi,<br />
                    Mumbai, Maharashtra 400025
                  </p>
                </motion.div>

                <motion.div variants={staggerRow}>
                  <h4 className="text-[11px] font-semibold tracking-[0.16em] uppercase text-[var(--color-muted)] mb-2">Contact Details</h4>
                  <p className="text-[15px] md:text-[16px] leading-[1.65] text-[var(--color-ink)]">
                    {societyData.email}<br />
                    {societyData.phone}
                  </p>
                </motion.div>

                <motion.div variants={staggerRow}>
                  <h4 className="text-[11px] font-semibold tracking-[0.16em] uppercase text-[var(--color-muted)] mb-2">Office Timings</h4>
                  <p className="text-[15px] md:text-[16px] leading-[1.65] text-[var(--color-ink)]">
                    Monday – Saturday<br />
                    10:00 AM – 6:00 PM
                  </p>
                </motion.div>
              </motion.div>
            </div>
          </div>

          {/* Right Column: Visual */}
          <div className="lg:col-span-7">
            <motion.div 
              className="relative w-full aspect-[4/3] md:aspect-[16/9] lg:aspect-[16/10] overflow-hidden rounded-[4px] bg-[var(--color-rule)] group"
              initial={{ clipPath: 'inset(0 0 0 100%)' }}
              whileInView={{ clipPath: 'inset(0 0 0 0)', transition: { duration: 0.9, ease: [0.22, 1, 0.36, 1] } }}
              viewport={{ once: true, margin: "-10%" }}
            >
              <img 
                loading="lazy"
                decoding="async"
                src="https://images.unsplash.com/photo-1524661135-423995f22d0b?auto=format&fit=crop&q=80" 
                alt="Global map visual" 
                className="w-full h-full object-cover transition-transform duration-[1200ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[3.5]"
                style={{ transformOrigin: '72% 48%' }}
              />
              
              <div className="absolute inset-0 bg-black/10 transition-opacity duration-500 group-hover:opacity-0" />
              
              <div className="absolute bottom-[16px] right-[16px] md:bottom-[20px] md:right-[20px]">
                <a 
                  href="https://maps.app.goo.gl/jbMopq4skxRQTiWLA"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-[rgba(250,248,243,0.95)] backdrop-blur-sm text-[var(--color-ink)] px-[18px] py-[14px] rounded-[4px] text-[13px] font-semibold tracking-wide flex items-center gap-2 hover:bg-[#FAF8F3] transition-colors duration-300 h-[46px] md:h-[48px] shadow-lg"
                >
                  View on Google Maps
                  <span className="ml-[12px] group-hover/cta:translate-x-1 transition-transform duration-200">→</span>
                </a>
              </div>
            </motion.div>
          </div>
          
        </div>
      </div>
    </section>
  );
}
