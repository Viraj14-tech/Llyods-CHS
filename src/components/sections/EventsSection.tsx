import { motion, useReducedMotion } from 'framer-motion';
import { Clock, MapPin, ArrowRight } from 'lucide-react';
import { events } from '../../data/events';
import { sectionLabel, DUR, EASE_PRIMARY, VIEWPORT_EARLY } from '../../utils/animations';

export default function EventsSection() {
  const shouldReduceMotion = useReducedMotion();

  // Helper to generate precise, absolute delays based on the card index
  const getDelays = (cardIdx: number) => {
    const base = cardIdx * 0.11;
    return {
      headerBg: base,
      headerText: base + 0.05,
      bodyBase: base + 0.12
    };
  };

  return (
    <section id="events" className="events-section bg-[#FAF8F3] py-[64px] md:py-[88px]">
      <div className="max-w-[1320px] mx-auto px-[20px] md:px-[32px] lg:px-[48px] xl:px-[56px] w-full">
        
        {/* Section Header */}
        <div className="mb-[44px] md:mb-[48px]">
          <motion.div
            initial="initial"
            whileInView="whileInView"
            viewport={VIEWPORT_EARLY}
            variants={sectionLabel}
          >
            <span className="block text-[11px] md:text-[12px] font-semibold tracking-[0.16em] uppercase text-[var(--color-muted)] mb-6">
              Community Calendar
            </span>
          </motion.div>
          
          <div className="overflow-hidden mb-[20px] md:mb-[24px]">
            <motion.h2 
              className="font-display text-[42px] md:text-[52px] leading-[1.05] text-[var(--color-ink)]"
              initial={{ opacity: 0, y: shouldReduceMotion ? 0 : "100%" }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: DUR.EDITORIAL, delay: 0.05, ease: EASE_PRIMARY }}
              viewport={VIEWPORT_EARLY}
            >
              Upcoming events.
            </motion.h2>
          </div>

          <motion.p 
            className="text-[16px] md:text-[17px] leading-[1.65] text-[#6F6B65] max-w-[560px]"
            initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: DUR.STD, delay: 0.15, ease: EASE_PRIMARY }}
            viewport={VIEWPORT_EARLY}
          >
            Moments for residents to come together, participate and stay connected with the community.
          </motion.p>
        </div>

        {/* Events Grid */}
        <div className="events-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[16px] md:gap-[20px]">
          {events.map((event, idx) => {
            const delays = getDelays(idx);
            
            return (
              <motion.div
                key={event.id}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: DUR.STD, delay: delays.headerBg }}
                viewport={VIEWPORT_EARLY}
                className="event-card group flex flex-col bg-[#FAF8F3] border border-[rgba(22,22,22,0.11)] rounded-[6px] overflow-hidden transition-all duration-[220ms] ease-out hover:-translate-y-[3px] hover:border-[rgba(154,128,101,0.4)] md:min-h-[390px] lg:min-h-[420px]"
              >
                
                {/* STAGE A: Event Header */}
                <motion.div 
                  className="event-card__header relative p-[24px] md:p-[28px] border-b border-[rgba(22,22,22,0.06)] overflow-hidden"
                >
                  {/* Background Wipe */}
                  <motion.div 
                    className="absolute inset-0 bg-[#F0E9DE] transition-colors duration-[220ms] group-hover:bg-[#EBE2D3]"
                    initial={shouldReduceMotion ? { opacity: 1 } : { clipPath: 'inset(0 100% 0 0)' }}
                    whileInView={shouldReduceMotion ? {} : { clipPath: 'inset(0 0% 0 0)' }}
                    transition={{ duration: DUR.EDITORIAL, delay: delays.headerBg, ease: EASE_PRIMARY }}
                    viewport={VIEWPORT_EARLY}
                  />
                  
                  {/* Content (relative to sit above background) */}
                  <div className="relative z-10">
                    <motion.span 
                      className="block font-manrope text-[11px] font-semibold text-[var(--color-bronze)] opacity-80 mb-3"
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      transition={{ duration: DUR.STD, delay: delays.headerText, ease: EASE_PRIMARY }}
                      viewport={VIEWPORT_EARLY}
                    >
                      {event.number}
                    </motion.span>
                    
                    <div className="overflow-hidden mb-4">
                      <motion.h3 
                        className="font-manrope text-[20px] md:text-[22px] font-semibold leading-[1.25] text-[var(--color-ink)]"
                        initial={{ opacity: 0, y: shouldReduceMotion ? 0 : "100%" }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: DUR.STD, delay: delays.headerText + 0.04, ease: EASE_PRIMARY }}
                        viewport={VIEWPORT_EARLY}
                      >
                        {event.title}
                      </motion.h3>
                    </div>
                    
                    <motion.div 
                      className="font-manrope text-[12px] md:text-[13px] font-semibold uppercase tracking-[0.08em] text-[var(--color-ink)] opacity-70"
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      transition={{ duration: DUR.STD, delay: delays.headerText + 0.08, ease: EASE_PRIMARY }}
                      viewport={VIEWPORT_EARLY}
                    >
                      {event.date}
                    </motion.div>
                  </div>
                </motion.div>

                {/* STAGE B: Event Information */}
                <div className="event-card__body flex flex-col flex-grow p-[24px] md:p-[28px]">
                  
                  {/* Metadata */}
                  <div className="event-card__meta space-y-[10px] mb-[24px]">
                    <motion.div 
                      className="flex items-start gap-3"
                      initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 6 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: DUR.STD, delay: delays.bodyBase, ease: EASE_PRIMARY }}
                      viewport={VIEWPORT_EARLY}
                    >
                      <Clock size={17} className="text-[#9A8065] mt-[2px] flex-shrink-0" />
                      <span className="font-manrope text-[14px] md:text-[15px] font-medium text-[#4A4742]">
                        {event.time}
                      </span>
                    </motion.div>
                    <motion.div 
                      className="flex items-start gap-3"
                      initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 6 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: DUR.STD, delay: delays.bodyBase + 0.04, ease: EASE_PRIMARY }}
                      viewport={VIEWPORT_EARLY}
                    >
                      <MapPin size={17} className="text-[#9A8065] mt-[2px] flex-shrink-0" />
                      <span className="font-manrope text-[14px] md:text-[15px] font-medium text-[#4A4742]">
                        {event.venue}
                      </span>
                    </motion.div>
                  </div>

                  {/* Description */}
                  <motion.p 
                    className="font-manrope text-[15px] md:text-[16px] leading-[1.6] text-[#6F6B65] mb-[32px]"
                    initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 6 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: DUR.STD, delay: delays.bodyBase + 0.08, ease: EASE_PRIMARY }}
                    viewport={VIEWPORT_EARLY}
                  >
                    {event.description}
                  </motion.p>

                  {/* CTA */}
                  <motion.div 
                    className="event-card__cta mt-auto"
                    initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 6 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: DUR.STD, delay: delays.bodyBase + 0.12, ease: EASE_PRIMARY }}
                    viewport={VIEWPORT_EARLY}
                  >
                    <button className="group/cta flex items-center gap-2 font-manrope text-[13px] md:text-[14px] font-semibold text-[var(--color-ink)] transition-colors duration-[180ms] hover:text-[var(--color-bronze)]">
                      {event.cta}
                      <ArrowRight size={15} className="transition-transform duration-[180ms] ease-out group-hover/cta:translate-x-[4px]" />
                    </button>
                  </motion.div>

                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
