import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { fadeUp } from '../../utils/animations';

export default function MemberAccessCTA() {
  return (
    <section className="py-[112px] bg-[var(--color-paper)] border-y border-[var(--color-border-subtle)] text-center">
      <div className="max-w-[800px] mx-auto px-[20px] md:px-[40px]">
        <motion.div
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, margin: "-20%" }}
          variants={fadeUp}
        >
          <h2 className="font-display text-[38px] md:text-[52px] leading-[1.1] text-[var(--color-ink)] mb-6">
            Society documents and updates, in one secure place.
          </h2>
          <p className="text-[16px] md:text-[18px] text-[var(--color-stone)] mb-10 max-w-[500px] mx-auto leading-relaxed">
            Please log in to view personal account details, committee meeting minutes, and financial statements.
          </p>
          <Link 
            to="/login"
            className="inline-block bg-[var(--color-graphite)] text-[#F4F1EA] px-8 py-3.5 rounded-[4px] text-[13px] font-semibold tracking-wide transition-colors hover:bg-[var(--color-ink)]"
          >
            Member Login
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
