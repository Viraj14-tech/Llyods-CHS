import { motion } from 'framer-motion';
import { fadeUp, imageReveal } from '../../utils/animations';

export default function RedevelopmentSection() {
  return (
    <section id="redevelopment" className="bg-[var(--color-graphite)] text-[#F4F1EA] py-[112px] md:py-[144px]">
      <div className="max-w-[1320px] mx-auto px-[20px] md:px-[40px] lg:px-[64px]">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-[64px] items-center">
          
          <div className="lg:col-span-5">
            <motion.div
              initial="initial"
              whileInView="animate"
              viewport={{ once: true, margin: "-15%" }}
              variants={fadeUp}
            >
              <span className="block text-[11px] font-semibold tracking-[0.16em] uppercase text-white/50 mb-6">
                Future Planning
              </span>
              
              <h2 className="font-display text-[46px] md:text-[56px] lg:text-[64px] leading-[1] mb-8">
                Redevelopment
              </h2>
              
              <p className="text-[16px] md:text-[18px] leading-[1.7] text-white/70 max-w-[480px] mb-10">
                Llyods CHSL is currently in the preliminary stages of exploring structural redevelopment to enhance the safety, amenities, and value of our shared property.
              </p>

              <a 
                href="#" 
                className="inline-flex items-center gap-2 text-[13px] font-semibold tracking-wide text-white hover:text-[var(--color-accent)] transition-colors group"
              >
                View redevelopment updates
                <span className="transition-transform duration-200 group-hover:translate-x-1">→</span>
              </a>
            </motion.div>
          </div>

          <div className="lg:col-span-7">
            <motion.div 
              className="aspect-[4/3] md:aspect-[16/10] overflow-hidden rounded-[4px] bg-white/5"
              initial="initial"
              whileInView="animate"
              viewport={{ once: true, margin: "-15%" }}
              variants={imageReveal}
            >
              {/* Replace with actual redevelopment planning image or render */}
              <img 
                src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80" 
                alt="Architectural Planning" 
                className="w-full h-full object-cover opacity-80"
              />
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
