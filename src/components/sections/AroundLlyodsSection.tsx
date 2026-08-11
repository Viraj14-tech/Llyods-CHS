import { motion } from 'framer-motion';
import { sectionLabel, staggerContainer } from '../../utils/animations';
import { MapPin, HeartPulse, GraduationCap, ShoppingBag, Store, Trees, ArrowUpRight } from 'lucide-react';

const cardVariants = {
  initial: { opacity: 0, y: 24 },
  whileInView: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } 
  }
};

export default function AroundLlyodsSection() {
  const features = [
    {
      id: '01',
      title: 'Connectivity',
      desc: 'Convenient access to major roads and public transport makes travelling to different parts of Mumbai straightforward.',
      detail: 'Railway & Road Connectivity\nApprox. 10–15 min*',
      icon: MapPin
    },
    {
      id: '02',
      title: 'Healthcare',
      desc: 'Multi-speciality hospitals, clinics and everyday healthcare services are available within the surrounding neighbourhood.',
      detail: 'Hospitals & Clinics\nApprox. 10–20 min*',
      icon: HeartPulse
    },
    {
      id: '03',
      title: 'Education',
      desc: 'Schools, colleges and educational institutions in the surrounding area provide convenient options for families and students.',
      detail: 'Schools & Colleges\nWithin the neighbourhood*',
      icon: GraduationCap
    },
    {
      id: '04',
      title: 'Daily Essentials',
      desc: 'Supermarkets, pharmacies, banks and essential neighbourhood services are accessible for everyday requirements.',
      detail: 'Daily Convenience\nWithin easy reach*',
      icon: ShoppingBag
    },
    {
      id: '05',
      title: 'Shopping & Leisure',
      desc: 'Shopping, dining and recreational options around the area add convenience to everyday residential life.',
      detail: 'Shopping & Dining\nNearby*',
      icon: Store
    },
    {
      id: '06',
      title: 'The Neighbourhood',
      desc: 'A connected urban neighbourhood gives residents access to everyday conveniences and the wider city.',
      detail: 'Mumbai\nUrban Residential Neighbourhood',
      icon: Trees
    }
  ];

  return (
    <section id="around-llyods" className="bg-[#F7F3EC] py-[64px] md:py-[88px]">
      <div className="max-w-[1360px] mx-auto px-[20px] md:px-[32px] lg:px-[48px] xl:px-[56px] w-full">
        
        <div className="max-w-[640px] mb-[40px] md:mb-[56px]">
          <motion.div
            initial="initial"
            whileInView="whileInView"
            viewport="viewport"
            variants={sectionLabel}
          >
            <span className="block text-[11px] md:text-[12px] font-semibold tracking-[0.16em] uppercase text-[var(--color-muted)] mb-6">
              Around Llyods
            </span>
          </motion.div>
          
          <motion.h2 
            className="font-display text-[42px] md:text-[52px] leading-[1.05] text-[var(--color-ink)] mb-[24px]"
            initial={{ opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0, transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] } }}
            viewport={{ once: true, margin: "-10%" }}
          >
            Everything you need,<br />close to home.
          </motion.h2>

          <motion.p 
            className="text-[16px] md:text-[17px] leading-[1.65] text-[#6F6B65] max-w-[560px]"
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0, transition: { duration: 0.6, delay: 0.1 } }}
            viewport={{ once: true, margin: "-10%" }}
          >
            Llyods is connected to the everyday essentials of city life, with access to transport, healthcare, education, shopping and neighbourhood conveniences.
          </motion.p>
        </div>

        {/* Architectural Grid */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 bg-[#F8F4ED] border border-[rgba(22,22,22,0.10)] rounded-[6px] overflow-hidden mb-[48px] md:mb-[64px]"
          initial="initial"
          whileInView="whileInView"
          viewport="viewport"
          variants={staggerContainer}
        >
          {features.map((feature, idx) => (
            <motion.div 
              key={idx} 
              variants={cardVariants}
              className={`group p-[32px] flex flex-col justify-between transition-colors duration-[220ms] hover:bg-white/40 min-h-[240px]
                ${idx !== 0 && idx !== 3 ? 'md:border-l border-[rgba(22,22,22,0.08)]' : ''} 
                ${idx > 2 ? 'lg:border-t border-[rgba(22,22,22,0.08)]' : ''}
                ${idx > 1 && idx < 3 ? 'md:border-t lg:border-t-0 border-[rgba(22,22,22,0.08)]' : ''}
                ${idx > 0 && idx < 2 ? 'border-t md:border-t-0 border-[rgba(22,22,22,0.08)]' : ''}
                ${idx > 1 ? 'border-t md:border-t-0 lg:border-t-0 border-[rgba(22,22,22,0.08)]' : ''}
              `}
              style={{
                borderTopWidth: idx > 0 ? '1px' : '0',
                borderLeftWidth: '0' // Handled by responsive classes
              }}
            >
              {/* Reset inline style hack for borders using Tailwind arbitrarily where needed */}
              <style>{`
                @media (min-width: 768px) {
                  #around-llyods .grid > div:nth-child(n+3) { border-top-width: 1px; }
                  #around-llyods .grid > div:nth-child(2n) { border-left-width: 1px; }
                  #around-llyods .grid > div:nth-child(2n+1) { border-left-width: 0; }
                }
                @media (min-width: 1024px) {
                  #around-llyods .grid > div:nth-child(n+4) { border-top-width: 1px; }
                  #around-llyods .grid > div:nth-child(n+1) { border-top-width: 0; }
                  #around-llyods .grid > div:nth-child(n+4) { border-top-width: 1px; }
                  #around-llyods .grid > div:nth-child(3n+2),
                  #around-llyods .grid > div:nth-child(3n+3) { border-left-width: 1px; }
                  #around-llyods .grid > div:nth-child(3n+1) { border-left-width: 0; }
                }
              `}</style>
              
              <div>
                <div className="flex items-start justify-end mb-[24px]">
                  <div className="text-[var(--color-muted)] group-hover:text-[var(--color-bronze)] transition-colors duration-300">
                    <feature.icon strokeWidth={1.5} size={20} />
                  </div>
                </div>

                <h3 className="text-[13px] md:text-[14px] font-semibold tracking-[0.08em] uppercase text-[var(--color-ink)] mb-3">
                  {feature.title}
                </h3>
                <p className="text-[14px] md:text-[15px] leading-[1.6] text-[#6F6B65] mb-6 font-manrope">
                  {feature.desc}
                </p>
              </div>

              <div className="pt-4 border-t border-[rgba(22,22,22,0.06)] flex items-end justify-between mt-auto">
                <p className="text-[11px] md:text-[12px] leading-[1.5] font-medium text-[var(--color-muted)] whitespace-pre-line font-manrope uppercase tracking-[0.05em]">
                  {feature.detail}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Wide Contextual Image */}
        <motion.div 
          className="w-full h-[240px] md:h-[300px] rounded-[4px] overflow-hidden bg-[var(--color-rule)]"
          initial={{ opacity: 0, clipPath: 'inset(0 0 10% 0)' }}
          whileInView={{ opacity: 1, clipPath: 'inset(0 0 0 0)', transition: { duration: 0.9, ease: [0.22, 1, 0.36, 1] } }}
          viewport={{ once: true }}
        >
          <img 
            loading="lazy"
            decoding="async"
            src="/society-images/llyods5.png" 
            alt="Llyods Garden context view" 
            className="w-full h-full object-cover object-[center_55%]"
          />
        </motion.div>

        <motion.p 
          className="mt-[24px] text-[11px] md:text-[12px] text-[var(--color-ink)] opacity-55 text-right font-medium"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 0.55, transition: { duration: 0.8, delay: 0.2 } }}
          viewport={{ once: true }}
        >
          *Indicative information for website preview. Detailed neighbourhood information will be updated shortly.
        </motion.p>

      </div>
    </section>
  );
}
