import { Link } from "react-router-dom";
import logoCropped from "@/assets/logo-cropped.png";

const mainLinks = [
  { label: "Services", href: "#services", external: false },
  { label: "How We Work", href: "#engagement", external: false },
  { label: "About", href: "#about", external: false },
  { label: "Contact", href: "#contact", external: false },
];

const legalLinks = [
  { label: "Privacy Policy", to: "/privacy" },
  { label: "Terms of Service", to: "/terms" },
];

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-10">
          <div>
            <a href="/" className="inline-flex items-center mb-4">
              <span className="inline-flex items-center rounded-lg bg-white px-2 py-1">
                <img
                  src={logoCropped}
                  alt="PivotPoint Pricing & Legal Ops"
                  className="h-9 w-auto"
                />
              </span>
            </a>
            <p className="text-primary-foreground/70 text-sm leading-relaxed max-w-xs">
              Strategic legal operations consulting—helping law firms and in-house teams win on pricing, realization, and value delivery.
            </p>
          </div>

          <div>
            <h4 className="text-primary-foreground font-semibold text-sm mb-4">Navigation</h4>
            <nav className="flex flex-col gap-2.5">
              {mainLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="text-primary-foreground/70 hover:text-primary-foreground transition-colors text-sm"
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </div>

          <div>
            <h4 className="text-primary-foreground font-semibold text-sm mb-4">Legal</h4>
            <nav className="flex flex-col gap-2.5">
              {legalLinks.map((link) => (
                <Link
                  key={link.label}
                  to={link.to}
                  className="text-primary-foreground/70 hover:text-primary-foreground transition-colors text-sm"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>
        </div>

        <div className="pt-8 border-t border-primary-foreground/20 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-primary-foreground/72 text-sm">
            © 2026 PivotPoint Pricing & Legal Ops. All rights reserved.
          </p>
          <p className="text-primary-foreground/60 text-xs">
            Memberships: Legal Value Network · True Value Partnership Institute · LMA · Buying Legal Council
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
