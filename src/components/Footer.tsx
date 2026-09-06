export default function Footer() {
  return (
    <footer className="border-t border-[#1E1E2E] bg-[#0A0A0F] pt-14 pb-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
          {/* Col 1: Brand Info */}
          <div className="col-span-2 md:col-span-1">
            <a href="#home" className="flex items-center gap-2 mb-4">
              <img
                src="/images/athletica.svg"
                alt="Athletica"
                className="h-6 w-auto filter drop-shadow-[0_0_10px_rgba(90,11,251,0.5)]"
              />
              <span className="font-['Cervino'] font-black text-lg tracking-[0.14em] text-white">
                ATHLETICA
              </span>
            </a>
            <p className="text-[#8B8B9E] text-xs leading-relaxed mb-4 max-w-[220px]">
              Where Fitness Coaches Build Real Businesses.
            </p>
            <a
              href="mailto:hello@athleticaapp.com"
              className="text-xs text-[#8B8B9E] hover:text-[#5A0BFB] transition-colors"
            >
              hello@athleticaapp.com
            </a>
          </div>

          {/* Col 2: Product */}
          <div>
            <h4 className="font-bold text-white text-xs uppercase tracking-wider mb-4">
              Product
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <a href="#features" className="text-[#8B8B9E] hover:text-white transition-colors">
                  Features
                </a>
              </li>
              <li>
                <a href="#solution" className="text-[#8B8B9E] hover:text-white transition-colors">
                  Before vs After
                </a>
              </li>
              <li>
                <a href="#waitlist" className="text-[#8B8B9E] hover:text-white transition-colors">
                  Pilot Program
                </a>
              </li>
              <li>
                <a href="#faq" className="text-[#8B8B9E] hover:text-white transition-colors">
                  FAQ
                </a>
              </li>
            </ul>
          </div>

          {/* Col 3: Company */}
          <div>
            <h4 className="font-bold text-white text-xs uppercase tracking-wider mb-4">
              Regions
            </h4>
            <ul className="space-y-2 text-xs text-[#8B8B9E]">
              <li>🇪🇬 Egypt (Cairo & Ismailia)</li>
              <li>🇸🇦 Saudi Arabia</li>
              <li>🇦🇪 UAE</li>
              <li>🇯🇴 Jordan</li>
            </ul>
          </div>

          {/* Col 4: Social */}
          <div>
            <h4 className="font-bold text-white text-xs uppercase tracking-wider mb-4">
              Connect
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <a
                  href="https://www.instagram.com/athleticaapp_"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#8B8B9E] hover:text-[#5A0BFB] transition-colors"
                >
                  Instagram @athleticaapp_
                </a>
              </li>
              <li>
                <a
                  href="https://www.tiktok.com/@athleticaapp_"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#8B8B9E] hover:text-[#5A0BFB] transition-colors"
                >
                  TikTok @athleticaapp_
                </a>
              </li>
              <li>
                <a href="#" className="text-[#8B8B9E] hover:text-white transition-colors">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="text-[#8B8B9E] hover:text-white transition-colors">
                  Terms of Service
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-[#1E1E2E] flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-[#8B8B9E] text-xs">
            © {new Date().getFullYear()} Athletica. All rights reserved. Built for coaches in MENA.
          </p>
          <a
            href="https://athletica.fit"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs text-[#8B8B9E] hover:text-[#5A0BFB] transition-colors"
          >
            athletica.fit
          </a>
        </div>
      </div>
    </footer>
  );
}
