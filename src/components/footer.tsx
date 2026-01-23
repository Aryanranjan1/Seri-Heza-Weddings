import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="bg-[#080808] text-white pt-24 pb-8 px-[5%] relative border-t-4 border-[#D4AF37]">
      <div 
        className="absolute inset-0 pointer-events-none opacity-[0.03]"
        style={{
          backgroundImage: "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23D4AF37'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")"
        }}
      ></div>
      
      <div className="max-w-[1400px] mx-auto relative z-10">
        
        <div className="flex flex-col md:flex-row justify-between items-center mb-12 pb-12 border-b border-[rgba(212,175,55,0.2)] text-center md:text-left">
          <div className="mb-8 md:mb-0">
            <h2 className="font-signature text-8xl md:text-9xl leading-[0.8] text-[#D4AF37] font-normal mb-2 -rotate-2 origin-left-center" style={{ textShadow: '0 0 25px rgba(212, 175, 55, 0.3)'}}>Seri Heza</h2>
            <span className="font-serif text-lg tracking-[0.2em] uppercase text-[#999] pl-2">Exquisite Malay Weddings</span>
          </div>

          <div className="max-w-lg text-center md:text-right">
            <p className="font-serif text-xl leading-relaxed">"Your vision, our devotion. From the first sketch to the final vow, we craft flawless celebrations so you can cherish every moment."</p>
            <span className="block font-sans text-xs uppercase tracking-[0.2em] text-[#D4AF37] mt-4">— The Royal Promise</span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-[1fr_1fr_1.2fr] gap-x-16 gap-y-12 pt-12 text-center md:text-left">
          
          <div className="flex flex-col items-center md:items-start">
            <h4 className="font-serif text-2xl mb-6 text-white">The Atelier</h4>
            <address className="text-[#999] not-italic leading-loose text-base mb-8">
              3708 Jalan Abdullah, Seksyen 30<br />
              40460 Shah Alam<br />
              Selangor, Malaysia
            </address>
            
            <div className="mb-8">
              <Link href="tel:+60169772878" className="block text-white text-lg mb-2 font-serif transition-all hover:text-[#D4AF37] hover:pl-2">
                +60 16-977 2878
              </Link>
              <Link href="mailto:hello@seriheza.com" className="block text-white text-lg font-serif transition-all hover:text-[#D4AF37] hover:pl-2">
                hello@seriheza.com
              </Link>
            </div>

            <div className="flex gap-5">
              <Link href="#" aria-label="Facebook" className="w-10 h-10 border border-[#8A7030] rounded-full flex items-center justify-center text-[#D4AF37] transition-all duration-300 hover:bg-[#D4AF37] hover:text-black hover:shadow-[0_0_15px_rgba(212,175,55,0.4)] hover:-translate-y-1">
                <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24"><path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"/></svg>
              </Link>
              <Link href="#" aria-label="Instagram" className="w-10 h-10 border border-[#8A7030] rounded-full flex items-center justify-center text-[#D4AF37] transition-all duration-300 hover:bg-[#D4AF37] hover:text-black hover:shadow-[0_0_15px_rgba(212,175,55,0.4)] hover:-translate-y-1">
                 <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.98 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.949s-.014-3.667-.072-4.948c-.2-4.358-2.618-6.98-6.98-6.98-1.281-.058-1.689-.072-4.948-.072zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4s1.791-4 4-4 4 1.791 4 4-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
              </Link>
              <Link href="https://wa.me/60169772878" aria-label="WhatsApp" className="w-10 h-10 border border-[#8A7030] rounded-full flex items-center justify-center text-[#D4AF37] transition-all duration-300 hover:bg-[#D4AF37] hover:text-black hover:shadow-[0_0_15px_rgba(212,175,55,0.4)] hover:-translate-y-1">
                 <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24"><path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.637 3.891 1.685 5.73l-1.124 4.103 3.928-1.532z"/></svg>
              </Link>
            </div>
          </div>

          <div className="flex flex-col items-center md:items-start">
            <h4 className="font-sans text-xs tracking-[0.2em] uppercase text-[#D4AF37] mb-8">Discover</h4>
            <ul className="list-none space-y-5">
              <li><Link href="#about" className="text-white font-serif text-lg transition-colors hover:text-[#D4AF37]">Our Story</Link></li>
              <li><Link href="#services" className="text-white font-serif text-lg transition-colors hover:text-[#D4AF37]">Packages</Link></li>
              <li><Link href="#portfolio" className="text-white font-serif text-lg transition-colors hover:text-[#D4AF37]">Real Weddings</Link></li>
              <li><Link href="#about" className="text-white font-serif text-lg transition-colors hover:text-[#D4AF37]">Journal</Link></li>
              <li><Link href="#contact" className="text-white font-serif text-lg transition-colors hover:text-[#D4AF37]">Contact</Link></li>
            </ul>
          </div>
          
          <div>
            <div className="w-full h-56 border border-[#8A7030] p-1 bg-[rgba(212,175,55,0.05)]">
              <div className="w-full h-full overflow-hidden group">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3984.146200216148!2d101.5186!3d3.0558!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zM8KwMDMnMjAuOSJOIDEwMcKwMzEnMDcuMCJF!5e0!3m2!1sen!2smy!4v1620000000000!5m2!1sen!2smy" 
                  loading="lazy"
                  className="w-full h-full border-0 grayscale invert-[.92] contrast-[.83] transition-all duration-500 group-hover:grayscale-0 group-hover:invert-0 group-hover:contrast-100"
                ></iframe>
              </div>
            </div>
            <p className="mt-4 text-xs text-[#D4AF37] text-center md:text-right tracking-[0.1em] uppercase">Navigate to Studio</p>
          </div>

        </div>

        <div className="mt-20 border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between text-[0.7rem] text-[#555] uppercase tracking-[0.1em] text-center">
          <span className="mb-2 md:mb-0">© {new Date().getFullYear()} SERI HEZA WEDDINGS.</span>
          <div>
            <Link href="#" className="ml-0 md:ml-4 text-[#555] transition-colors hover:text-[#D4AF37]">Privacy Policy</Link>
            <Link href="#" className="ml-4 text-[#555] transition-colors hover:text-[#D4AF37]">Terms & Conditions</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
