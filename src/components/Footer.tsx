"use client";

import { Compass, ArrowUp } from "lucide-react";

const Instagram = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 24 24"
    width="24"
    height="24"
    stroke="currentColor"
    strokeWidth="2"
    fill="none"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
  </svg>
);

const Facebook = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 24 24"
    width="24"
    height="24"
    stroke="currentColor"
    strokeWidth="2"
    fill="none"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
  </svg>
);

const Youtube = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 24 24"
    width="24"
    height="24"
    stroke="currentColor"
    strokeWidth="2"
    fill="none"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z" />
    <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02" />
  </svg>
);

const Linkedin = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 24 24"
    width="24"
    height="24"
    stroke="currentColor"
    strokeWidth="2"
    fill="none"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect x="2" y="9" width="4" height="12" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const quickLinks = [
    { name: "About Us", href: "#why-choose-us" },
    { name: "Packages", href: "#packages" },
    { name: "Destinations", href: "#destinations" },
    { name: "Gallery", href: "#gallery" },
    { name: "Testimonials", href: "#testimonials" },
    { name: "Contact", href: "#contact" },
  ];

  const policyLinks = [
    { name: "Privacy Policy", href: "#" },
    { name: "Terms of Service", href: "#" },
    { name: "Refund Policy", href: "#" },
  ];

  return (
    <footer className="bg-slate-950 text-slate-400 py-16 border-t border-slate-900 relative">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        
        {/* Top Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 pb-12 border-b border-slate-900">
          
          {/* Logo & Description Column */}
          <div className="md:col-span-5 space-y-5">
            <a href="#home" className="flex items-center space-x-2 group w-fit select-none">
              <div className="p-2 bg-white/5 rounded-xl group-hover:bg-white/10 transition-colors">
                <Compass className="h-6 w-6 text-accent" />
              </div>
              <div>
                <span className="font-heading font-bold text-xl tracking-wide text-white block">
                  VOYARA
                </span>
                <span className="block text-[9px] font-sans tracking-[0.25em] uppercase -mt-1 font-medium text-slate-400">
                  Travels
                </span>
              </div>
            </a>
            <p className="font-sans text-xs md:text-sm leading-relaxed max-w-sm">
              Premium travel agency based in Jubilee Hills, Hyderabad. Dedicated to helping travelers discover the soul and grandeur of India through highly personalized domestic itineraries.
            </p>
            {/* Socials */}
            <div className="flex gap-4.5 pt-2">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="h-9 w-9 rounded-full bg-slate-900 border border-slate-800 hover:border-slate-700 text-slate-400 hover:text-white flex items-center justify-center transition-colors"
                aria-label="Follow us on Instagram"
              >
                <Instagram className="h-4 w-4" />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="h-9 w-9 rounded-full bg-slate-900 border border-slate-800 hover:border-slate-700 text-slate-400 hover:text-white flex items-center justify-center transition-colors"
                aria-label="Follow us on Facebook"
              >
                <Facebook className="h-4 w-4" />
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                className="h-9 w-9 rounded-full bg-slate-900 border border-slate-800 hover:border-slate-700 text-slate-400 hover:text-white flex items-center justify-center transition-colors"
                aria-label="Subscribe to our YouTube channel"
              >
                <Youtube className="h-4 w-4" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="h-9 w-9 rounded-full bg-slate-900 border border-slate-800 hover:border-slate-700 text-slate-400 hover:text-white flex items-center justify-center transition-colors"
                aria-label="Connect with us on LinkedIn"
              >
                <Linkedin className="h-4 w-4" />
              </a>
            </div>
          </div>

          {/* Quick Links Column */}
          <div className="md:col-span-3 space-y-5">
            <h4 className="text-white font-heading font-semibold text-sm tracking-wider uppercase">Quick Links</h4>
            <ul className="space-y-2.5 font-sans text-xs md:text-sm">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="hover:text-white transition-colors">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Hyderabad Info / Quick Contact Column */}
          <div className="md:col-span-4 space-y-5 font-sans text-xs md:text-sm leading-relaxed">
            <h4 className="text-white font-heading font-semibold text-sm tracking-wider uppercase">Contact Details</h4>
            <div className="space-y-2 text-slate-400">
              <p>
                <span className="font-semibold text-slate-300">Office:</span> Jubilee Hills, Road No. 36, Hyderabad, Telangana – 500033
              </p>
              <p>
                <span className="font-semibold text-slate-300">Phone:</span> +91 91000 45678
              </p>
              <p>
                <span className="font-semibold text-slate-300">Email:</span> hello@voyara.in
              </p>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between pt-8 text-xs font-sans text-slate-500 gap-4">
          <p>© 2026 Voyara. All Rights Reserved. Designed for domestic Indian excellence.</p>
          
          <div className="flex flex-wrap gap-x-6 gap-y-2">
            {policyLinks.map((link) => (
              <a key={link.name} href={link.href} className="hover:text-white transition-colors">
                {link.name}
              </a>
            ))}
          </div>

          {/* Scroll back to top */}
          <button
            onClick={scrollToTop}
            className="h-10 w-10 rounded-full bg-slate-900 hover:bg-primary border border-slate-800 text-slate-400 hover:text-white flex items-center justify-center transition-colors shadow-lg cursor-pointer"
            aria-label="Scroll to top"
          >
            <ArrowUp className="h-4 w-4" />
          </button>
        </div>

      </div>
    </footer>
  );
}
