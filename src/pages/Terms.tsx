import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import logoCropped from "@/assets/logo-cropped.png";

const Section = ({ title, children }: { title: string; children: React.ReactNode }) => (
  <div className="mb-10">
    <h2 className="font-heading text-xl font-bold text-foreground mb-4">{title}</h2>
    <div className="space-y-3 text-muted-foreground leading-relaxed">{children}</div>
  </div>
);

const Terms = () => {
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
            Terms of Service
          </h1>
          <p className="text-muted-foreground text-sm">
            Last updated: March 1, 2026
          </p>
          <div className="h-px bg-border mt-6" />
        </div>

        <Section title="Acceptance of Terms">
          <p>
            These Terms of Service ("Terms") govern your access to and use of the website and consulting services provided by PivotPoint Pricing & Legal Ops ("PivotPoint," "we," "us," or "our"). By accessing our website or engaging our services, you agree to be bound by these Terms.
          </p>
          <p>
            If you are entering into these Terms on behalf of an organization, you represent and warrant that you have authority to bind that organization. If you do not agree to these Terms, do not use our website or services.
          </p>
        </Section>

        <Section title="Services Description">
          <p>
            PivotPoint provides legal operations consulting services, including but not limited to: legal pricing strategy, alternative fee arrangement (AFA) design and implementation, legal project management (LPM), pricing operationalization, and fractional legal ops leadership.
          </p>
          <p>
            Specific services, deliverables, timelines, and fees are defined in a separate engagement letter or statement of work ("SOW") agreed upon by both parties prior to commencement of services. These Terms apply to all engagements unless expressly superseded by a signed agreement.
          </p>
          <p>
            Our services constitute business consulting and do not constitute legal advice. We are not a law firm and do not provide legal representation.
          </p>
        </Section>

        <Section title="Engagement and Payment">
          <p>
            All engagements are formalized through a signed SOW or engagement letter specifying the scope, deliverables, timeline, and fees. Payment terms are set forth in each SOW and typically include:
          </p>
          <ul className="list-disc pl-5 space-y-2 mt-2">
            <li>Fixed-project fees due per agreed milestone schedule</li>
            <li>Monthly retainer fees due in advance for ongoing advisory engagements</li>
            <li>Reimbursement of pre-approved out-of-pocket expenses</li>
          </ul>
          <p>
            Invoices are due within thirty (30) days of issuance unless otherwise specified. Late payments may be subject to a finance charge of 1.5% per month on the outstanding balance.
          </p>
        </Section>

        <Section title="Confidentiality">
          <p>
            Both parties acknowledge that during an engagement, each may have access to confidential information belonging to the other. "Confidential Information" includes proprietary data, business strategies, pricing models, client lists, financial information, and any other non-public information designated as confidential.
          </p>
          <p>
            Each party agrees to: (a) hold the other's Confidential Information in strict confidence; (b) use it only for purposes of the engagement; and (c) not disclose it to third parties without prior written consent, except as required by law.
          </p>
          <p>
            These confidentiality obligations survive termination of the engagement for a period of three (3) years.
          </p>
        </Section>

        <Section title="Intellectual Property">
          <p>
            PivotPoint retains ownership of all proprietary methodologies, frameworks, templates, tools, and know-how developed prior to or independently of any engagement ("Background IP").
          </p>
          <p>
            Deliverables specifically created for a client under an SOW ("Work Product") are assigned to the client upon full payment, subject to PivotPoint retaining a license to use underlying Background IP and anonymized learnings for future engagements.
          </p>
          <p>
            Client grants PivotPoint a limited license to use client's data and materials solely to perform the contracted services.
          </p>
        </Section>

        <Section title="Representations and Warranties">
          <p>Each party represents and warrants that:</p>
          <ul className="list-disc pl-5 space-y-2 mt-2">
            <li>It has full legal authority to enter into these Terms and any SOW</li>
            <li>Its performance will not violate any applicable law or third-party obligation</li>
          </ul>
          <p>
            PivotPoint additionally warrants that services will be performed in a professional and workmanlike manner consistent with industry standards.
          </p>
          <p>
            EXCEPT AS EXPRESSLY SET FORTH HEREIN, SERVICES AND DELIVERABLES ARE PROVIDED "AS IS" WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING WARRANTIES OF MERCHANTABILITY OR FITNESS FOR A PARTICULAR PURPOSE.
          </p>
        </Section>

        <Section title="Limitation of Liability">
          <p>
            TO THE MAXIMUM EXTENT PERMITTED BY APPLICABLE LAW, PIVOTPOINT'S TOTAL CUMULATIVE LIABILITY ARISING OUT OF OR RELATED TO THESE TERMS OR ANY ENGAGEMENT SHALL NOT EXCEED THE TOTAL FEES PAID BY THE CLIENT IN THE THREE (3) MONTHS PRECEDING THE CLAIM.
          </p>
          <p>
            IN NO EVENT SHALL EITHER PARTY BE LIABLE FOR INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, INCLUDING LOST PROFITS OR REVENUE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGES.
          </p>
          <p>
            These limitations apply regardless of the form of the claim (contract, tort, strict liability, or otherwise).
          </p>
        </Section>

        <Section title="Termination">
          <p>
            Either party may terminate an engagement: (a) for convenience upon thirty (30) days' written notice; or (b) immediately for material breach that remains uncured after fifteen (15) days' written notice.
          </p>
          <p>
            Upon termination: PivotPoint will deliver all completed Work Product; Client will pay for all services rendered through the termination date plus any non-cancellable expenses; and each party will return or destroy the other's Confidential Information upon request.
          </p>
        </Section>

        <Section title="Governing Law and Dispute Resolution">
          <p>
            These Terms and any disputes arising hereunder shall be governed by and construed in accordance with the laws of the State of [Governing State], without regard to conflict-of-law principles.
          </p>
          <p>
            The parties agree to first attempt to resolve any dispute through good-faith negotiation. If unresolved within thirty (30) days, disputes shall be submitted to binding arbitration administered by JAMS pursuant to its Commercial Arbitration Rules, with proceedings conducted in English.
          </p>
        </Section>

        <Section title="General Provisions">
          <ul className="list-disc pl-5 space-y-2">
            <li><strong className="text-foreground">Entire Agreement:</strong> These Terms, together with any applicable SOW, constitute the entire agreement between the parties regarding the subject matter herein.</li>
            <li><strong className="text-foreground">Amendments:</strong> We may update these Terms from time to time. Material changes will be communicated via our website. Continued use of services after notice constitutes acceptance.</li>
            <li><strong className="text-foreground">Severability:</strong> If any provision is found unenforceable, it will be modified to the minimum extent necessary, and the remaining provisions will remain in full force.</li>
            <li><strong className="text-foreground">Waiver:</strong> Failure to enforce any right under these Terms does not constitute a waiver of that right.</li>
            <li><strong className="text-foreground">Independent Contractors:</strong> The parties are independent contractors; nothing herein creates an employment, partnership, or joint venture relationship.</li>
          </ul>
        </Section>

        <Section title="Contact Us">
          <p>
            Questions or concerns about these Terms should be directed to:
          </p>
          <div className="mt-4 p-5 bg-muted/30 rounded-xl border border-border text-sm">
            <p className="font-semibold text-foreground">PivotPoint Pricing & Legal Ops</p>
            <p className="mt-1">Attn: Legal</p>
            <p className="mt-1">Email: <a href="mailto:rfbrackett@pivotpointpricing.com" className="text-secondary hover:underline">rfbrackett@pivotpointpricing.com</a></p>
          </div>
        </Section>
      </main>

      <footer className="border-t border-border py-6">
        <div className="container mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-muted-foreground text-sm">© 2026 PivotPoint Pricing & Legal Ops. All rights reserved.</p>
          <div className="flex gap-6">
            <Link to="/privacy" className="text-muted-foreground hover:text-foreground text-sm transition-colors">
              Privacy Policy
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

export default Terms;
