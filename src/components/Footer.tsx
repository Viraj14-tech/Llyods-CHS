import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-[var(--color-charcoal)] text-[#FAF8F3] pt-[64px] md:pt-[72px] pb-[32px] md:pb-[40px]">
      <div className="max-w-[1320px] mx-auto px-[20px] md:px-[32px] lg:px-[48px] xl:px-[56px]">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-[48px] md:gap-[32px]">
          
          {/* Brand */}
          <div className="md:col-span-5">
            <Link to="/" className="inline-block mb-6">
              <img 
                src="/logo.png" 
                alt="Llyods CHSL" 
                className="w-[145px] md:w-[165px] object-contain brightness-0 invert opacity-90"
              />
            </Link>
            <p className="text-[14px] text-white/60 max-w-[280px] leading-relaxed">
              Official website of Llyods Garden Co-operative Housing Society Ltd.
            </p>
          </div>

          {/* Public Navigation */}
          <div className="md:col-span-2">
            <h4 className="text-[11px] font-semibold tracking-[0.16em] uppercase text-white/40 mb-6">Explore</h4>
            <ul className="flex flex-col gap-4 text-[14px] text-white/70">
              <li><a href="/#home" className="hover:text-white transition-colors">Home</a></li>
              <li><a href="/#about" className="hover:text-white transition-colors">About</a></li>
              <li><a href="/#committee" className="hover:text-white transition-colors">Committee</a></li>
              <li><a href="/#gallery" className="hover:text-white transition-colors">Gallery</a></li>
              <li><a href="/#location" className="hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Member Access */}
          <div className="md:col-span-2">
            <h4 className="text-[11px] font-semibold tracking-[0.16em] uppercase text-white/40 mb-6">Members</h4>
            <ul className="flex flex-col gap-4 text-[14px] text-white/70">
              <li><Link to="/login" className="hover:text-[var(--color-bronze)] transition-colors">Member Login</Link></li>
            </ul>
          </div>

          {/* Location */}
          <div className="md:col-span-3">
            <h4 className="text-[11px] font-semibold tracking-[0.16em] uppercase text-white/40 mb-6">Location</h4>
            <ul className="flex flex-col gap-4 text-[14px] text-white/70">
              <li>
                <a 
                  href="https://maps.app.goo.gl/jbMopq4skxRQTiWLA" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:text-[var(--color-bronze)] transition-colors inline-flex items-center gap-1 group"
                >
                  View on Google Maps
                  <span className="transition-transform duration-200 group-hover:translate-x-1">→</span>
                </a>
              </li>
            </ul>
          </div>
          
        </div>

        <div className="mt-[64px] md:mt-[88px] pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-[12px] text-white/40">
          <p>&copy; 2026 Llyods Garden Co-operative Housing Society Ltd. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
}
