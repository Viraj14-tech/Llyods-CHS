import { motion } from 'framer-motion';
import { Clock, MapPin, ArrowRight } from 'lucide-react';
import { events } from '../../data/events';
import { sectionLabel } from '../../utils/animations';

const headerVariants = {
  initial: { opacity: 0, y: 18 },
  whileInView: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } 
  }
};

const cardVariants = {
  initial: { opacity: 0, y: 18 },
  whileInView: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: { 
      duration: 0.6, 
      delay: index * 0.09, // ~90ms stagger
      ease: [0.22, 1, 0.36, 1] 
    }
  })
};

export default function EventsSection() {
  return (
    <section id="events" className="events-section bg-[#FAF8F3] py-[64px] md:py-[96px]">
      <div className="max-w-[1320px] mx-auto px-[20px] md:px-[32px] lg:px-[48px] xl:px-[56px] w-full">
        
        {/* Section Header */}
        <div className="mb-[48px] md:mb-[56px]">
          <motion.div
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true, margin: "-10%" }}
            variants={sectionLabel}
          >
            <span className="block text-[11px] md:text-[12px] font-semibold tracking-[0.16em] uppercase text-[var(--color-muted)] mb-6">
              Community Calendar
            </span>
          </motion.div>
          
          <motion.h2 
            className="font-display text-[42px] md:text-[52px] leading-[1.05] text-[var(--color-ink)] mb-[20px] md:mb-[24px]"
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true, margin: "-10%" }}
            variants={headerVariants}
          >
            Upcoming events.
          </motion.h2>

          <motion.p 
            className="text-[16px] md:text-[17px] leading-[1.65] text-[#6F6B65] max-w-[560px]"
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0, transition: { duration: 0.6, delay: 0.1, ease: [0.22, 1, 0.36, 1] } }}
            viewport={{ once: true, margin: "-10%" }}
          >
            Moments for residents to come together, participate and stay connected with the community.
          </motion.p>
        </div>

        {/* Events Grid */}
        <div className="events-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[16px] md:gap-[20px]">
          {events.map((event, idx) => (
            <motion.div
              key={event.id}
              custom={idx}
              initial="initial"
              whileInView="whileInView"
              viewport={{ once: true, margin: "-5%" }}
              variants={cardVariants}
              className="event-card group flex flex-col bg-[#FAF8F3] border border-[rgba(22,22,22,0.11)] rounded-[6px] overflow-hidden transition-all duration-[220ms] ease-out hover:-translate-y-[4px] hover:border-[rgba(154,128,101,0.4)] md:min-h-[390px] lg:min-h-[420px]"
            >
              
              {/* Event Header */}
              <div className="event-card__header bg-[#F0E9DE] p-[24px] md:p-[28px] border-b border-[rgba(22,22,22,0.06)]">
                <span className="block font-manrope text-[11px] font-semibold text-[var(--color-bronze)] opacity-80 mb-3">
                  {event.number}
                </span>
                <h3 className="font-manrope text-[20px] md:text-[22px] font-semibold leading-[1.25] text-[var(--color-ink)] mb-4">
                  {event.title}
                </h3>
                <div className="font-manrope text-[12px] md:text-[13px] font-semibold uppercase tracking-[0.08em] text-[var(--color-ink)] opacity-70">
                  {event.date}
                </div>
              </div>

              {/* Event Information */}
              <div className="event-card__body flex flex-col flex-grow p-[24px] md:p-[28px]">
                
                {/* Metadata */}
                <div className="event-card__meta space-y-[10px] mb-[24px]">
                  <div className="flex items-start gap-3">
                    <Clock size={17} className="text-[#9A8065] mt-[2px] flex-shrink-0" />
                    <span className="font-manrope text-[14px] md:text-[15px] font-medium text-[#4A4742]">
                      {event.time}
                    </span>
                  </div>
                  <div className="flex items-start gap-3">
                    <MapPin size={17} className="text-[#9A8065] mt-[2px] flex-shrink-0" />
                    <span className="font-manrope text-[14px] md:text-[15px] font-medium text-[#4A4742]">
                      {event.venue}
                    </span>
                  </div>
                </div>

                {/* Description */}
                <p className="font-manrope text-[15px] md:text-[16px] leading-[1.6] text-[#6F6B65] mb-[32px]">
                  {event.description}
                </p>

                {/* CTA */}
                <div className="event-card__cta mt-auto">
                  <button className="group/cta flex items-center gap-2 font-manrope text-[13px] md:text-[14px] font-semibold text-[var(--color-ink)] transition-colors duration-[180ms] hover:text-[var(--color-bronze)]">
                    {event.cta}
                    <ArrowRight size={15} className="transition-transform duration-[180ms] ease-out group-hover/cta:translate-x-[4px]" />
                  </button>
                </div>

              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
