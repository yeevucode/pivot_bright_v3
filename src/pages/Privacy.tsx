import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import logoCropped from "@/assets/logo-cropped.png";

const Section = ({ title, children }: { title: string; children: React.ReactNode }) => (
  <div className="mb-10">
    <h2 className="font-heading text-xl font-bold text-foreground mb-4">{title}</h2>
    <div className="space-y-3 text-muted-foreground leading-relaxed">{children}</div>
  </div>
);

const Privacy = () => {
  return (
    <div className="min-h-screen bg-background">
      <header className="border-b border-border bg-white/95 backdrop-blur-md">
        <div className="container mx-auto px-6 h-16 flex items-center justify-between">
          <Link to="/">
            <img src={logoCropped} alt="PivotPoint" className="h-10 w-auto" />
          </Link>
          <Link
            to="/"
            className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Home
          </Link>
        </div>
      </header>

      <main className="container mx-auto px-6 py-16 max-w-3xl">
        {/* Page heading */}
        <div className="mb-12">
          <span className="text-secondary font-semibold text-xs uppercase tracking-widest">Legal</span>
          <h1 className="font-heading text-3xl sm:text-4xl font-bold text-foreground mt-3 mb-4">
            Privacy Policy
          </h1>
          <p className="text-muted-foreground text-sm">
            Last updated: March 1, 2026
          </p>
          <div className="h-px bg-border mt-6" />
        </div>

        <Section title="Overview">
          <p>
            PivotPoint Pricing & Legal Ops ("PivotPoint," "we," "us," or "our") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or engage with our consulting services.
          </p>
          <p>
            By using our website or services, you agree to the collection and use of information in accordance with this policy. If you do not agree, please do not use our website or services.
          </p>
        </Section>

        <Section title="Information We Collect">
          <p>We may collect the following categories of information:</p>
          <ul className="list-disc pl-5 space-y-2 mt-2">
            <li>
              <strong className="text-foreground">Contact information</strong> — name, email address, phone number, and organization when you submit a consultation request or contact form.
            </li>
            <li>
              <strong className="text-foreground">Professional information</strong> — your role, firm or company name, and practice area when provided voluntarily in the context of an engagement inquiry.
            </li>
            <li>
              <strong className="text-foreground">Usage data</strong> — browser type, IP address, pages visited, time spent on pages, referring URLs, and device information, collected automatically via standard web technologies.
            </li>
            <li>
              <strong className="text-foreground">Communications</strong> — any content you send to us via email or contact forms.
            </li>
          </ul>
          <p>We do not collect sensitive personal information such as Social Security numbers, financial account credentials, or health information.</p>
        </Section>

        <Section title="How We Use Your Information">
          <p>We use the information we collect to:</p>
          <ul className="list-disc pl-5 space-y-2 mt-2">
            <li>Respond to consultation requests and inquiries</li>
            <li>Deliver, manage, and improve our consulting services</li>
            <li>Send service-related communications (project updates, scheduling)</li>
            <li>Send occasional informational content or newsletters, with your consent</li>
            <li>Analyze website usage to improve user experience</li>
            <li>Comply with applicable legal obligations</li>
          </ul>
          <p>We will not use your information for automated decision-making or profiling in ways that produce legal or similarly significant effects.</p>
        </Section>

        <Section title="Information Sharing and Disclosure">
          <p>
            We do not sell, rent, or trade your personal information to third parties. We may share your information only in the following limited circumstances:
          </p>
          <ul className="list-disc pl-5 space-y-2 mt-2">
            <li>
              <strong className="text-foreground">Service providers</strong> — trusted vendors who assist in operating our website or business (e.g., email delivery, calendar scheduling, analytics) under strict confidentiality obligations.
            </li>
            <li>
              <strong className="text-foreground">Legal requirements</strong> — if required by law, regulation, court order, or to protect the rights and safety of PivotPoint, our clients, or others.
            </li>
            <li>
              <strong className="text-foreground">Business transfers</strong> — in connection with a merger, acquisition, or sale of assets, subject to standard confidentiality protections.
            </li>
          </ul>
        </Section>

        <Section title="Cookies and Tracking Technologies">
          <p>
            Our website may use cookies and similar tracking technologies to enhance your experience. Cookies are small data files stored on your device. We may use:
          </p>
          <ul className="list-disc pl-5 space-y-2 mt-2">
            <li><strong className="text-foreground">Essential cookies</strong> — necessary for the website to function properly.</li>
            <li><strong className="text-foreground">Analytics cookies</strong> — to understand how visitors interact with our site (e.g., Google Analytics).</li>
          </ul>
          <p>
            You can control cookie settings through your browser. Disabling cookies may affect certain website functionality.
          </p>
        </Section>

        <Section title="Data Retention">
          <p>
            We retain personal information for as long as necessary to fulfill the purposes described in this policy, or as required by applicable law. Inquiry data is typically retained for up to 3 years. Engagement-related data is retained for the duration of the engagement plus a reasonable period thereafter in accordance with professional standards.
          </p>
        </Section>

        <Section title="Data Security">
          <p>
            We implement commercially reasonable technical and organizational measures to protect your information against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the internet or electronic storage is 100% secure, and we cannot guarantee absolute security.
          </p>
        </Section>

        <Section title="Your Rights">
          <p>
            Depending on your location, you may have the right to:
          </p>
          <ul className="list-disc pl-5 space-y-2 mt-2">
            <li>Access the personal information we hold about you</li>
            <li>Request correction of inaccurate information</li>
            <li>Request deletion of your personal information</li>
            <li>Opt out of marketing communications at any time</li>
            <li>Lodge a complaint with a relevant data protection authority</li>
          </ul>
          <p>
            To exercise any of these rights, please contact us using the information below.
          </p>
        </Section>

        <Section title="Third-Party Links">
          <p>
            Our website may contain links to third-party websites. We are not responsible for the privacy practices of those sites and encourage you to review their privacy policies before providing any personal information.
          </p>
        </Section>

        <Section title="Changes to This Policy">
          <p>
            We may update this Privacy Policy from time to time. We will notify you of material changes by posting the updated policy on this page with a revised "Last updated" date. Continued use of our website or services after changes constitutes acceptance of the revised policy.
          </p>
        </Section>

        <Section title="Contact Us">
          <p>
            If you have questions, concerns, or requests regarding this Privacy Policy or our data practices, please contact us at:
          </p>
          <div className="mt-4 p-5 bg-muted/30 rounded-xl border border-border text-sm">
            <p className="font-semibold text-foreground">PivotPoint Pricing & Legal Ops</p>
            <p className="mt-1">Attn: Privacy Inquiries</p>
            <p className="mt-1">Email: <a href="mailto:privacy@pivotpointlegalops.com" className="text-secondary hover:underline">privacy@pivotpointlegalops.com</a></p>
          </div>
        </Section>
      </main>

      <footer className="border-t border-border py-6">
        <div className="container mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-muted-foreground text-sm">© 2026 PivotPoint Pricing & Legal Ops. All rights reserved.</p>
          <div className="flex gap-6">
            <Link to="/terms" className="text-muted-foreground hover:text-foreground text-sm transition-colors">
              Terms of Service
            </Link>
            <Link to="/" className="text-muted-foreground hover:text-foreground text-sm transition-colors">
              Home
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Privacy;
