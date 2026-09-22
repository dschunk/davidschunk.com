import type { Metadata } from "next";
import { SiteFooter, SiteHeader } from "@/components/site-chrome";

export const metadata: Metadata = {
  title: "Checks and Balances for Artificial Intelligence — David Schunk",
  description:
    "A risk-tiered framework for AI safety, accountability, public trust, and innovation: user rights, deployment controls, independent evidence, and frontier safeguards.",
  alternates: { canonical: "/research/ai-governance" },
  openGraph: {
    url: "https://www.davidschunk.com/research/ai-governance",
    title: "Checks and Balances for Artificial Intelligence",
    description:
      "A practical framework for governing powerful AI without treating every algorithm like a frontier model.",
    type: "article",
  },
};

const sources = [
  ["NIST, Artificial Intelligence Risk Management Framework (AI RMF 1.0) and 2026 revision work", "https://www.nist.gov/itl/ai-risk-management-framework"],
  ["NIST, Artificial Intelligence Risk Management Framework: Generative Artificial Intelligence Profile (NIST AI 600-1)", "https://www.nist.gov/publications/artificial-intelligence-risk-management-framework-generative-artificial-intelligence"],
  ["NIST, Artificial Intelligence Technology Evaluation (AITE) program", "https://www.nist.gov/news-events/news/2026/07/announcing-nists-artificial-intelligence-technology-evaluation-aite"],
  ["NIST, TEVV-Athlon framework for evaluating AI systems", "https://www.nist.gov/artificial-intelligence/ai-research/tevv-athlon-framework-evaluating-ai-systems"],
  ["NTIA, AI Accountability Policy Report", "https://www.ntia.gov/issues/artificial-intelligence/ai-accountability-policy-report"],
  ["European Union, Regulation (EU) 2024/1689 — Artificial Intelligence Act, consolidated text", "https://eur-lex.europa.eu/eli/reg/2024/1689/2026-07-27/eng"],
  ["ISO/IEC 42001:2023 — Artificial intelligence management system", "https://www.iso.org/standard/42001"],
  ["ISO/IEC 23894:2023 — Guidance on risk management for AI", "https://www.iso.org/standard/77304.html"],
  ["OECD, Recommendation of the Council on Artificial Intelligence", "https://legalinstruments.oecd.org/en/instruments/OECD-LEGAL-0449"],
  ["Council of Europe, Framework Convention on Artificial Intelligence and Human Rights, Democracy and the Rule of Law", "https://www.coe.int/en/web/artificial-intelligence/the-framework-convention-on-artificial-intelligence"],
  ["United Nations, Global Digital Compact", "https://www.un.org/pact-for-the-future/en/annex-i-global-digital-compact"],
  ["United Nations, Global Dialogue on AI Governance and Independent International Scientific Panel on AI", "https://www.un.org/global-digital-compact/en/ai"],
  ["Pew Research Center, Americans and AI: 2026", "https://www.pewresearch.org/internet/2026/06/17/americans-and-ai-2026-chatbots-smart-devices-and-views-on-impact/"],
  ["Stanford HAI, 2026 AI Index Report — Public Opinion", "https://hai.stanford.edu/ai-index/2026-ai-index-report/public-opinion"],
  ["C2PA, Content Credentials technical specification 2.4", "https://spec.c2pa.org/specifications/specifications/2.4/specs/C2PA_Specification.html"],
  ["Colorado Attorney General, Artificial Intelligence policy and rulemaking", "https://coag.gov/ai/"],
  ["White House, National AI Legislative Framework, March 20, 2026", "https://www.whitehouse.gov/releases/2026/03/president-donald-j-trump-unveils-national-ai-legislative-framework/"],
  ["OpenAI, Frontier Governance Framework", "https://openai.com/index/openai-frontier-governance-framework/"],
  ["Anthropic, Responsible Scaling Policy", "https://www.anthropic.com/responsible-scaling-policy"],
  ["Google DeepMind, Frontier Safety Framework", "https://deepmind.google/frontier-safety/"],
];

const Toc = () => (
  <nav className="research-toc" aria-label="Paper contents">
    <strong>Contents</strong>
    <a href="#abstract">Abstract</a>
    <a href="#thesis">1. The thesis</a>
    <a href="#trust">2. Public trust is an engineering problem</a>
    <a href="#risk">3. Regulate risk, not the label</a>
    <a href="#tiers">4. Three tiers of obligation</a>
    <a href="#rights">5. Rights at the user layer</a>
    <a href="#deployment">6. Controls at the deployment layer</a>
    <a href="#evidence">7. Evidence at the audit layer</a>
    <a href="#frontier">8. Emergency brakes at the frontier layer</a>
    <a href="#institutions">9. Institutional checks and balances</a>
    <a href="#incidents">10. Incident reporting and learning</a>
    <a href="#provenance">11. Synthetic media and provenance</a>
    <a href="#innovation">12. Innovation, open models, and competition</a>
    <a href="#implementation">13. Implementation roadmap</a>
    <a href="#counterarguments">14. Counterarguments and failure modes</a>
    <a href="#public">15. What the public should be able to expect</a>
    <a href="#conclusion">Conclusion</a>
    <a href="#sources">Sources</a>
  </nav>
);

export default function AIGovernancePaper() {
  return (
    <div className="ds-site research-page">
      <SiteHeader />

      <main>
        <section className="research-hero">
          <div className="ds-shell research-hero-inner">
            <p className="ds-eyebrow">Research Paper · AI Governance · September 18, 2026</p>
            <h1>Checks and Balances for Artificial Intelligence</h1>
            <p className="research-subtitle">
              A risk-tiered framework for safety, accountability, public trust, and innovation
            </p>
            <p className="research-dek">
              Artificial intelligence does not need to be made harmless to be governable. It needs to be
              observable, constrained, testable, contestable, and recoverable. This paper proposes a practical
              system of checks and balances that scales obligations with risk: rights at the user layer,
              controls at the deployment layer, evidence at the audit layer, and stronger safeguards for
              frontier-capability systems.
            </p>
            <div className="research-meta">
              <span><b>David Schunk</b> · IT Engineer &amp; Technology Writer</span>
              <span>Version 1.0 · September 18, 2026</span>
              <span>Independent research and policy analysis</span>
            </div>
            <div className="research-note">
              <b>Scope.</b> This is a governance proposal, not a claim that every AI system creates the same
              danger or that any single jurisdiction has found a complete solution. It draws from existing
              technical standards, legislation, public-opinion research, and frontier-safety programs to
              propose an interoperable model.
            </div>
          </div>
        </section>

        <div className="ds-shell research-grid">
          <Toc />

          <article className="research-prose">
            <section id="abstract">
              <p className="research-eyebrow">Abstract</p>
              <p className="research-lead">
                The central problem in artificial-intelligence governance is not whether society should choose
                innovation or safety. It is whether powerful systems can be deployed while preserving human
                agency, accountability, security, competition, and the ability to correct failure.
              </p>
              <p>
                Public anxiety about AI is often answered with reassurance: the technology will improve,
                companies are testing their systems, regulators are paying attention, and people will adapt.
                Those statements may be sincere, but reassurance is not a control. Trustworthy engineering
                does not depend on optimism. Aviation, cybersecurity, finance, medicine, electrical systems,
                and other mature domains reduce risk through defined responsibilities, independent evidence,
                incident learning, access controls, redundancy, recovery procedures, and consequences when
                obligations are ignored.
              </p>
              <p>
                AI governance should follow the same logic. This paper proposes a risk-tiered model in which
                ordinary low-impact AI faces light baseline duties; systems that materially influence
                employment, credit, education, health, housing, insurance, essential services, or legal rights
                face stronger assessment and appeal requirements; and frontier systems capable of enabling
                severe cyber, biological, chemical, autonomous, or other large-scale harms face capability
                evaluations, deployment gates, security controls, incident reporting, and independent review.
              </p>
              <p>
                The framework is intentionally plural. Legislatures define rights and accountability.
                Technical standards bodies define measurement methods. Sector regulators enforce rules in
                context. Independent evaluators test claims. Courts preserve due process and redress.
                Scientific bodies update the evidence base. Companies remain responsible for engineering and
                operating their systems. No single institution receives unlimited authority, and no developer
                is permitted to grade its own homework as the sole proof of safety.
              </p>
            </section>

            <section id="thesis">
              <p className="research-eyebrow">1 · The thesis</p>
              <h2>Govern AI like consequential infrastructure: make power observable, constrained, accountable, and correctable.</h2>
              <p>
                The phrase “regulate AI” is too broad to be useful. A spam filter, a hospital triage model, an
                autonomous coding agent, a hiring system, and a frontier general-purpose model are all called
                AI, yet their plausible harms, affected populations, reversibility, and scale are radically
                different. Rules based only on whether software uses machine learning will either overregulate
                ordinary tools or underregulate systems with genuine capacity for widespread harm.
              </p>
              <p>
                A better objective is <b>governability</b>. A governable system has an identifiable owner;
                documented intended uses and limits; controlled access to consequential capabilities; logs
                sufficient to reconstruct important events; tests tied to real failure modes; escalation and
                shutdown procedures appropriate to the context; an appeal path when people are materially
                affected; and an accountable organization that cannot escape responsibility by blaming “the
                algorithm.”
              </p>
              <blockquote>
                The goal is not zero risk. The goal is that increasing power produces increasing evidence,
                increasing controls, and increasing accountability.
              </blockquote>
              <p>
                This produces a simple governing equation: <b>obligations should scale with capability,
                consequence, exposure, and reversibility.</b> Capability asks what the system can do.
                Consequence asks how badly a failure can hurt people or institutions. Exposure asks how many
                people or systems could be affected. Reversibility asks whether a bad outcome can be detected
                and repaired. These factors are more durable than regulating a product category or model name.
              </p>
            </section>

            <section id="trust">
              <p className="research-eyebrow">2 · Public trust</p>
              <h2>Fear is not reduced by telling people to trust AI. Trust has to be earned through visible control.</h2>
              <p>
                Current public-opinion research provides a warning against treating anxiety as a communications
                problem. Pew Research Center reported in June 2026 that roughly seven in ten Americans expected
                AI to make personal information less secure, while 67 percent had little or no confidence in
                the federal government to regulate AI effectively; roughly six in ten lacked confidence that
                U.S. companies would develop and use AI responsibly. Stanford&apos;s 2026 AI Index likewise
                shows a public that can simultaneously recognize potential benefits and remain nervous about
                the technology.
              </p>
              <p>
                That combination is rational. People routinely accept high-powered technologies when the rules
                around them are legible. They board aircraft without inspecting engines because certification,
                maintenance, incident investigation, crew qualification, air-traffic rules, and legal
                responsibility form an institutional safety system. Those controls do not eliminate crashes;
                they make risk measurable, responsibility assignable, and improvement cumulative.
              </p>
              <p>
                AI needs an equivalent social contract. A person should not have to understand transformer
                architectures to know whether an automated decision affected a job application. A parent should
                not need to reverse engineer a chatbot to know whether a service marketed to minors has safety
                controls. A company buying an AI service should not have to rely solely on a vendor&apos;s
                marketing claim that the model is “enterprise secure.” Public confidence can grow when people
                know what protections exist, who verifies them, and what happens when something goes wrong.
              </p>
              <div className="research-callout">
                <b>Principle: replace reassurance with evidence.</b>
                <span>“Trust us” is a public-relations statement. “Here is the test, the result, the independent reviewer, the incident process, and your appeal right” is governance.</span>
              </div>
            </section>

            <section id="risk">
              <p className="research-eyebrow">3 · Scope</p>
              <h2>Regulate the risk, not the label.</h2>
              <p>
                Existing governance systems already point toward risk-based treatment. The NIST AI Risk
                Management Framework is voluntary and lifecycle-oriented, emphasizing valid and reliable,
                safe, secure and resilient, accountable and transparent, explainable and interpretable,
                privacy-enhanced, and fair systems. The European Union AI Act uses risk categories and adds
                specific obligations for high-risk systems and general-purpose models with systemic risk.
                ISO/IEC 42001 establishes an AI management-system structure, while ISO/IEC 23894 provides
                AI-specific risk-management guidance. The OECD principles emphasize robustness, transparency,
                traceability, and systematic risk management.
              </p>
              <p>
                These approaches differ in legal force, institutional design, and policy philosophy, but they
                converge on an important idea: AI risk is contextual. Governance should therefore evaluate at
                least six dimensions: the decision being made; the severity of a plausible failure; the number
                and vulnerability of people exposed; the autonomy granted to the system; the difficulty of
                detecting or reversing an error; and the system&apos;s underlying capabilities.
              </p>
              <p>
                Risk classification must also be dynamic. A model deployed only to draft internal meeting
                summaries may be low impact. The same underlying model, connected to privileged production
                credentials and authorized to make irreversible infrastructure changes, becomes a different
                operational risk. Governance must follow the deployed system, not just the model artifact.
              </p>
            </section>

            <section id="tiers">
              <p className="research-eyebrow">4 · Risk tiers</p>
              <h2>Three tiers of obligation</h2>
              <div className="research-tier-grid">
                <div>
                  <span>Tier 1</span>
                  <h3>Ordinary / limited-impact AI</h3>
                  <p>Examples include drafting aids, search assistance, low-stakes recommendations, spam filtering, and internal productivity tools without consequential authority.</p>
                  <p><b>Baseline:</b> truthful disclosure where interaction could reasonably be mistaken for a person; privacy and security protections; clear ownership; documented intended use; basic logging for material automated actions; and a prohibition on deceptive claims about capabilities.</p>
                </div>
                <div>
                  <span>Tier 2</span>
                  <h3>High-impact / consequential AI</h3>
                  <p>Systems that materially influence employment, credit, education, housing, insurance, health, access to essential services, legal rights, or similarly consequential decisions.</p>
                  <p><b>Additional duties:</b> impact assessment, data and performance documentation, subgroup testing where relevant and lawful, human review, notice, meaningful appeal, change management, retention of decision evidence, and independent evaluation proportionate to risk.</p>
                </div>
                <div>
                  <span>Tier 3</span>
                  <h3>Frontier-capability / systemic-risk AI</h3>
                  <p>Models or systems that cross defined capability thresholds associated with plausible severe or large-scale harms, including advanced cyber, biological or chemical enablement, dangerous autonomous action, or loss-of-control scenarios.</p>
                  <p><b>Additional duties:</b> structured safety case, adversarial capability evaluation, staged deployment, strong model and credential security, incident reporting, external testing, executive accountability, whistleblower protection, and predefined deployment restriction or rollback triggers.</p>
                </div>
              </div>
              <p>
                The thresholds should be written so they can evolve. Compute can be one indicator, but a
                compute-only threshold risks becoming obsolete or gameable as algorithms improve. Capability
                evaluations, deployment context, access levels, and demonstrated dangerous functionality
                should contribute to classification. The law can define the obligation to assess and report;
                technical standards can update the measurement methods more frequently than legislation.
              </p>
            </section>

            <section id="rights">
              <p className="research-eyebrow">5 · User layer</p>
              <h2>Rights at the user layer: know, understand, contest, and reach a human.</h2>
              <p>
                The most important public protections should attach to the consequence, not to the sophistication
                of the model. When AI materially affects a person, four rights should travel with the decision.
              </p>
              <ol className="research-numbered">
                <li><b>Right to know.</b> People should receive clear notice when an automated system materially participates in a consequential decision or when they are interacting with an artificial agent in a context where human identity matters.</li>
                <li><b>Right to an intelligible reason.</b> The explanation need not expose proprietary source code or produce a mathematically complete account of every parameter. It should identify the material factors, policy basis, data categories, and process sufficient for a person to understand what happened.</li>
                <li><b>Right to contest.</b> A consequential outcome should have a meaningful review mechanism, including correction of materially inaccurate data and review by a human with authority to change the outcome.</li>
                <li><b>Right to accountable ownership.</b> An organization should remain responsible for decisions it delegates to AI. “The model did it” cannot become a liability sink.</li>
              </ol>
              <p>
                These rights also help calm public fear because they preserve agency. A system becomes less
                threatening when a person knows it cannot silently make an irreversible decision, hide the fact
                that automation was used, and deny any path to review.
              </p>
            </section>

            <section id="deployment">
              <p className="research-eyebrow">6 · Deployment layer</p>
              <h2>Controls at the deployment layer: treat AI as a privileged service, not magic.</h2>
              <p>
                Many serious AI failures will not come from an abstract model suddenly becoming malicious.
                They will come from ordinary systems-engineering mistakes: excessive permissions, weak
                authentication, secrets in prompts or logs, unreviewed automation, poor change control,
                brittle integrations, insufficient monitoring, unsafe defaults, and a missing recovery plan.
              </p>
              <p>
                Organizations deploying consequential AI should therefore apply controls familiar to security
                and infrastructure engineering: least privilege; scoped service identities; segmentation;
                separate development, test, and production environments; explicit approval for irreversible
                actions; rate and spend limits; durable audit logs; input and output validation; secrets
                management; dependency inventories; staged rollouts; rollback mechanisms; backup and recovery
                planning; and post-deployment monitoring.
              </p>
              <p>
                AI agents deserve particular attention. Giving a model access to email, cloud consoles,
                databases, source control, financial systems, industrial controls, or identity platforms
                changes its risk profile. Permission should be granular, time-bound where appropriate, and
                observable. High-risk actions should require deterministic policy checks or human approval
                rather than relying solely on the model to decide whether its own action is safe.
              </p>
              <div className="research-callout">
                <b>Operational rule:</b>
                <span>An AI system should never receive more authority than the organization can monitor, explain, and recover from.</span>
              </div>
            </section>

            <section id="evidence">
              <p className="research-eyebrow">7 · Audit layer</p>
              <h2>Evidence at the audit layer: no organization should be the sole verifier of its most consequential claims.</h2>
              <p>
                The U.S. National Telecommunications and Information Administration described AI accountability
                as a chain involving information, independent evaluation, and consequences. That formulation is
                useful because transparency alone is not accountability. Publishing a model card does not prove
                that claims are accurate; an audit without access to meaningful evidence can become compliance
                theater; and a finding without consequences can become a report that everyone files away.
              </p>
              <p>
                Independent evaluation should therefore focus on testable claims. Does the system meet its
                stated reliability threshold? Does it resist a defined class of attacks? Does a high-impact
                classifier show materially different error rates across relevant populations? Can an agent
                exceed its assigned permissions? Can a vendor reproduce a safety result when prompts and test
                cases are sequestered?
              </p>
              <p>
                NIST&apos;s 2026 Artificial Intelligence Technology Evaluation program and TEVV-Athlon work are
                important because they push toward objective, repeatable evaluation rather than benchmark
                theater. Sequestered or blind tests can reduce contamination and gaming. The broader principle
                should be adopted across high-impact and frontier governance: a claim that matters should have
                a measurable test, a retained result, a known test owner, and a defined response when the system
                fails.
              </p>
              <p>
                Auditors themselves require checks and balances. Accreditation criteria, conflict-of-interest
                rules, rotation or independence safeguards, quality review, and regulator access to work papers
                are necessary to prevent an “audit market” from devolving into a race for favorable certificates.
                California&apos;s 2026 move toward third-party audit standards illustrates the direction of
                travel, but any jurisdiction adopting audit mandates should focus as much on audit quality as
                audit quantity.
              </p>
            </section>

            <section id="frontier">
              <p className="research-eyebrow">8 · Frontier layer</p>
              <h2>Emergency brakes at the frontier layer: predefined controls, not theatrical “kill switches.”</h2>
              <p>
                Public debate often asks whether powerful AI should have a kill switch. The metaphor is too
                simple. Modern AI services are distributed across models, APIs, agents, tools, credentials,
                data stores, caches, customer deployments, and potentially downloadable weights. A single red
                button can sound reassuring while providing little operational value.
              </p>
              <p>
                Frontier governance should instead require a set of concrete intervention capabilities:
                suspend new accounts; rate-limit dangerous functionality; revoke credentials; isolate tools;
                disable specific high-risk features; roll back a model version; restrict model-weight access;
                pause a deployment stage; preserve incident evidence; and, where technically possible and
                proportionate, shut down affected serving infrastructure. These controls should be tested
                before an emergency, assigned to named roles, and protected against unauthorized use.
              </p>
              <p>
                Before crossing specified frontier capability thresholds, a developer should produce a
                <b> safety case</b>: a structured argument, supported by evidence, that identified risks have
                been reduced to an acceptable level for the proposed deployment. The safety case should include
                capability evaluations, threat models, red-team results, residual risks, security posture,
                monitoring plans, incident thresholds, and deployment restrictions. Regulators or accredited
                evaluators should be able to challenge the evidence rather than merely confirm that a document
                exists.
              </p>
              <p>
                Frontier developers are already experimenting with versions of this idea. OpenAI&apos;s
                Preparedness and Frontier Governance frameworks, Anthropic&apos;s Responsible Scaling Policy,
                and Google DeepMind&apos;s Frontier Safety Framework link stronger controls to increasingly
                dangerous capabilities. These are company-authored frameworks, not substitutes for public law,
                and their thresholds and methods should be independently scrutinized. Their value for policy is
                that they demonstrate the feasibility of capability-triggered governance and provide concrete
                material for external standardization.
              </p>
            </section>

            <section id="institutions">
              <p className="research-eyebrow">9 · Institutions</p>
              <h2>Checks and balances should exist between institutions as well as inside systems.</h2>
              <p>
                AI is too broad for one agency, one laboratory, one standards body, or one company to control
                competently. A durable governance system should distribute authority.
              </p>
              <div className="research-institution-grid">
                <div><b>Legislatures</b><p>Define rights, scope, liability, enforcement authority, appropriations, and the democratic boundaries of regulation.</p></div>
                <div><b>Technical standards bodies</b><p>Maintain test methods, terminology, risk-management profiles, measurement protocols, and interoperability standards.</p></div>
                <div><b>Sector regulators</b><p>Apply AI requirements within domains such as finance, health, employment, communications, transportation, and critical infrastructure.</p></div>
                <div><b>Independent evaluators</b><p>Test consequential claims, reproduce results, conduct red-team exercises, and challenge developer evidence.</p></div>
                <div><b>Courts</b><p>Preserve due process, review government action, adjudicate liability, and provide remedies when rights are violated.</p></div>
                <div><b>Scientific advisory bodies</b><p>Update the evidence base and advise on emerging capabilities without directly writing criminal or civil rules.</p></div>
                <div><b>Companies and deployers</b><p>Remain responsible for engineering, security, documentation, monitoring, incident response, and truthful representations.</p></div>
                <div><b>The public and civil society</b><p>Receive usable transparency, report harms, scrutinize policy, and participate in rulemaking rather than being treated as passive recipients of technology.</p></div>
              </div>
              <p>
                This division matters because concentration of oversight creates its own risk. A regulator can
                become stale or captured. A standards body can become detached from democratic accountability.
                A company can optimize tests it designed itself. An auditor can become dependent on the clients
                it audits. Courts can move slowly. Redundancy between institutions is not inefficiency; in
                safety-critical governance it is defense in depth.
              </p>
              <p>
                International coordination should aim for interoperable evidence rather than identical law.
                The Council of Europe&apos;s AI Framework Convention, OECD principles, EU AI Act, UN Global
                Digital Compact, and national frameworks reflect different legal traditions. They do not need
                to become one global regulator. They can converge on common artifacts—risk assessments,
                evaluation reports, incident taxonomies, provenance standards, and audit evidence—so that
                safety work performed in one jurisdiction remains useful in another.
              </p>
            </section>

            <section id="incidents">
              <p className="research-eyebrow">10 · Incident learning</p>
              <h2>AI needs an incident culture that rewards early reporting and learns across organizations.</h2>
              <p>
                Cybersecurity matured partly by developing shared concepts of vulnerabilities, indicators,
                incident severity, disclosure, post-incident review, and coordinated response. AI needs an
                analogous discipline. Serious incidents should have defined reporting thresholds and timelines,
                while minor events should be collected in ways that reveal patterns without flooding regulators
                with noise.
              </p>
              <p>
                A serious AI incident could include unauthorized acquisition of frontier model weights;
                demonstrated bypass of safeguards enabling severe harm; a consequential automated system
                producing widespread unlawful outcomes; an agent causing material unauthorized transactions;
                exploitation of a model integration to access protected data; or a newly discovered capability
                that materially changes the system&apos;s risk classification.
              </p>
              <p>
                Reports should separate confidential technical details from public learning. Regulators may need
                sensitive indicators, exploit details, or security architecture that should not be immediately
                published. The public still deserves timely disclosure of the nature of significant incidents,
                affected groups, corrective actions, and systemic lessons. A two-layer disclosure model can
                protect security while preventing secrecy from becoming the default.
              </p>
              <p>
                Whistleblower protection belongs here as a safety control. People inside an organization often
                see ignored test failures, unsafe deployment pressure, manipulated metrics, or security gaps
                before outsiders do. Protected escalation channels reduce the chance that commercial or
                organizational pressure suppresses material risk information.
              </p>
            </section>

            <section id="provenance">
              <p className="research-eyebrow">11 · Information integrity</p>
              <h2>For synthetic media, provenance is often more durable than trying to detect every fake.</h2>
              <p>
                Detection tools will remain useful, but an arms race that asks a classifier to determine whether
                every image, recording, or document is “AI-generated” is fragile. As generation improves,
                detection can fail; ordinary editing complicates binary labels; and a false accusation can be
                damaging. Provenance standards offer a complementary strategy: attach cryptographically
                verifiable information about origin and edits when content is created or transformed.
              </p>
              <p>
                The Coalition for Content Provenance and Authenticity (C2PA) specification provides one
                implementation path, and NIST has evaluated provenance, watermarking, authentication, and
                detection techniques. Policy should encourage interoperable provenance for high-risk or
                public-facing synthetic content while acknowledging its limits: metadata can be stripped,
                legacy content will not have credentials, and absence of provenance must not be treated as proof
                of deception.
              </p>
              <p>
                Disclosure rules should likewise be context-sensitive. A label on every spell-check or photo
                adjustment would create warning fatigue. Disclosure is more valuable when identity, authenticity,
                public persuasion, or material decision-making is at stake.
              </p>
            </section>

            <section id="innovation">
              <p className="research-eyebrow">12 · Innovation and competition</p>
              <h2>Good governance should make safe experimentation easier, not reserve AI for the largest companies.</h2>
              <p>
                Overregulation has a safety cost. Compliance regimes with fixed multimillion-dollar burdens can
                entrench incumbents, discourage open research, and push experimentation into less visible
                environments. A risk-tiered system should therefore make Tier 1 obligations inexpensive,
                provide regulatory sandboxes for novel deployments, publish open test methods, offer templates
                and reference controls for smaller organizations, and scale fees or audit depth to the
                consequence and capability of the system.
              </p>
              <p>
                Open models require nuance. Broadly available weights can improve research, competition,
                reproducibility, local control, and resilience against vendor lock-in. They can also make some
                safeguards difficult to enforce after release. Regulation should avoid assuming that “open” is
                inherently safe or inherently dangerous. Obligations should turn on demonstrated capability,
                the foreseeability and severity of misuse, the degree of downstream control retained by the
                distributor, and whether a release meaningfully changes access to dangerous capability.
              </p>
              <p>
                Procurement policy can also promote competition. Governments and large enterprises should demand
                exportable logs, documented interfaces, model and vendor substitution plans, clear data-ownership
                terms, and contractual access to necessary audit evidence. AI governance should not accidentally
                turn safety compliance into permanent dependence on one vendor.
              </p>
              <p>
                The United States&apos; current federal approach emphasizes innovation, competition, infrastructure,
                national security, child safety, intellectual property, free speech, and a more uniform national
                framework; the European Union has adopted a more prescriptive risk-tiered statutory regime.
                Policymakers can reasonably disagree about the precise balance. The framework proposed here is
                designed to be compatible with either philosophy by separating outcome-based public obligations
                from rapidly changing technical test methods.
              </p>
            </section>

            <section id="implementation">
              <p className="research-eyebrow">13 · Implementation</p>
              <h2>A staged roadmap: build the measurement and reporting infrastructure before pretending regulation is finished.</h2>
              <h3>Phase I — Common language and baseline controls (0–12 months)</h3>
              <ul>
                <li>Adopt a common taxonomy for ordinary, high-impact, and frontier-capability systems.</li>
                <li>Define consequential domains and minimum user notice, appeal, and record-retention rights.</li>
                <li>Create standardized incident categories and a protected reporting channel.</li>
                <li>Publish baseline security controls for AI services and agentic integrations.</li>
                <li>Fund open evaluation tooling and sequestered public-interest testbeds.</li>
                <li>Require government procurement to collect risk, testing, incident, and exit-plan evidence.</li>
              </ul>

              <h3>Phase II — Independent assurance (12–24 months)</h3>
              <ul>
                <li>Accredit AI evaluation organizations and define conflict-of-interest rules.</li>
                <li>Require independent testing for specified high-impact systems and frontier thresholds.</li>
                <li>Establish audit-quality review rather than merely counting completed audits.</li>
                <li>Create protected researcher access and vulnerability-disclosure processes.</li>
                <li>Publish anonymized incident trends and corrective-action lessons.</li>
              </ul>

              <h3>Phase III — Frontier capability gates and international interoperability (24–60 months)</h3>
              <ul>
                <li>Maintain capability thresholds through technical rulemaking informed by independent science.</li>
                <li>Require safety cases before specified frontier deployment thresholds are crossed.</li>
                <li>Mutually recognize compatible evaluation artifacts across jurisdictions where standards are equivalent.</li>
                <li>Run recurring cross-border exercises for cyber, biosecurity, model theft, and large-scale service incidents.</li>
                <li>Review rules on a fixed cycle so obsolete requirements expire or are revised instead of accumulating forever.</li>
              </ul>

              <p>
                This roadmap intentionally starts with measurement. Governments cannot reliably enforce a safety
                requirement that no one knows how to test. When measurement is immature, policy should require
                transparent risk management, evidence retention, incident reporting, and research investment
                rather than inventing false precision.
              </p>
            </section>

            <section id="counterarguments">
              <p className="research-eyebrow">14 · Counterarguments</p>
              <h2>Where this framework can fail—and how to keep it honest.</h2>

              <h3>“Risk tiers will become a compliance game.”</h3>
              <p>
                They can. Companies may classify systems downward or optimize for threshold tests. The response
                is not to abandon classification but to use multiple indicators, regulator authority to
                reclassify systems, post-deployment evidence, random or sequestered testing, and penalties for
                materially false representations.
              </p>

              <h3>“Independent audits can become rubber stamps.”</h3>
              <p>
                Correct. Financial and security auditing both show that independence on paper is not enough.
                Auditor accreditation, transparent methodologies, conflict rules, regulator inspection, test
                reproducibility, and consequences for negligent certification must be part of the system.
              </p>

              <h3>“Transparency can create new security risks.”</h3>
              <p>
                Also correct. Releasing model weights, exploit details, sensitive prompts, or exact defenses can
                help attackers. Transparency should mean that the public and regulators receive enough evidence
                to establish accountability—not that every security-sensitive artifact is posted online.
                Confidential regulator access and public summaries can coexist.
              </p>

              <h3>“Human review can become a fake checkbox.”</h3>
              <p>
                A nominal human who automatically approves an algorithm is not meaningful oversight. Reviewers
                need time, information, authority, training, and a measurable rate at which review can actually
                change outcomes. For some highly automated systems, better design may be to constrain the
                system&apos;s authority rather than insert a symbolic human click.
              </p>

              <h3>“Rules can freeze today&apos;s technology.”</h3>
              <p>
                This is why legislation should define rights, duties, and governance outcomes while technical
                standards define test protocols and thresholds that can update more frequently. Scheduled review
                clauses should force policymakers to revisit assumptions as models and deployment patterns
                change.
              </p>

              <h3>“No framework can eliminate catastrophic risk.”</h3>
              <p>
                True. Nor can any cybersecurity framework eliminate breaches or aviation regulation eliminate
                crashes. Governance should be judged by whether it reduces expected harm, increases detection,
                improves recovery, creates accountability, and produces learning—not by an impossible promise of
                perfect safety.
              </p>

              <h3>“Who decides what level of risk is acceptable?”</h3>
              <p>
                Ultimately, democratic institutions must set legal boundaries. Scientists and engineers can
                measure probability, capability, reliability, and control effectiveness; they cannot unilaterally
                decide how society should trade liberty, innovation, privacy, safety, competition, and national
                security. That is a feature of checks and balances, not a defect.
              </p>
            </section>

            <section id="public">
              <p className="research-eyebrow">15 · A public compact</p>
              <h2>What ordinary people should be able to expect from AI</h2>
              <p>
                A workable governance system should eventually be explainable without legal training. The public
                should be able to expect that:
              </p>
              <ul className="research-public-list">
                <li>An organization cannot secretly use AI to make a consequential decision and then deny that automation mattered.</li>
                <li>A person can challenge a consequential automated outcome and reach a human with authority to correct it.</li>
                <li>Companies remain responsible for systems they deploy, even when behavior is probabilistic.</li>
                <li>Powerful AI connected to real tools and data receives permissions no broader than necessary.</li>
                <li>High-impact claims are backed by tests, and the most consequential claims are not verified only by the seller.</li>
                <li>Serious incidents are reported, investigated, and used to improve future controls.</li>
                <li>Frontier systems face stronger security and deployment requirements as dangerous capabilities increase.</li>
                <li>Safety rules do not make ordinary low-risk software prohibitively expensive to build.</li>
                <li>Government oversight is itself reviewable through law, courts, public rulemaking, and transparent standards.</li>
                <li>No one is asked to accept “AI said so” as the end of the conversation.</li>
              </ul>
              <p>
                That compact is more useful than promising that AI will be benevolent. It accepts that software,
                companies, regulators, auditors, and people all make mistakes. The system is designed around
                that fact.
              </p>
            </section>

            <section id="conclusion">
              <p className="research-eyebrow">Conclusion</p>
              <h2>The answer to powerful AI is not panic and it is not blind trust. It is control.</h2>
              <p>
                Artificial intelligence is moving from a tool people query to infrastructure that can perceive,
                recommend, decide, generate, communicate, and increasingly act. That transition deserves serious
                governance. But serious does not have to mean fearful, centralized, or hostile to innovation.
              </p>
              <p>
                The most durable path is familiar to anyone who has operated consequential technology:
                understand the system, limit its authority, test it before trusting it, preserve evidence,
                monitor it in production, plan for failure, make recovery possible, assign ownership, and bring
                in an independent set of eyes when the stakes justify it.
              </p>
              <p>
                Public fear will not disappear because experts insist that a model is safe. It can diminish when
                people see institutions capable of saying <i>no</i>, systems designed to stop at defined
                boundaries, auditors capable of challenging claims, courts capable of providing remedies,
                engineers capable of recovering from failure, and laws that preserve human agency.
              </p>
              <blockquote>
                AI should be powerful enough to be useful and governed enough to remain accountable to people.
              </blockquote>
              <p>
                The task, then, is not to build one perfect regulator or one perfect model. It is to build a
                layered system in which no single failure—technical, commercial, institutional, or human—has to
                become a catastrophe. That is what checks and balances are for.
              </p>
            </section>

            <section id="sources" className="research-sources">
              <p className="research-eyebrow">Selected sources and authorities</p>
              <h2>Research base</h2>
              <p>
                Sources were selected for primary legal text, public technical standards, official government
                guidance, internationally recognized governance instruments, public-opinion research, and
                current frontier-safety frameworks. Company-authored frameworks are included as examples of
                current practice, not as independent proof of safety.
              </p>
              <ol>
                {sources.map(([title, href]) => (
                  <li key={href}>
                    <a href={href} target="_blank" rel="noreferrer">{title}</a>
                  </li>
                ))}
              </ol>
              <p className="research-version">
                <b>Citation:</b> Schunk, David. “Checks and Balances for Artificial Intelligence: A Risk-Tiered
                Framework for Safety, Accountability, Public Trust, and Innovation.” Version 1.0, September 18,
                2026. DavidSchunk.com.
              </p>
              <p className="research-version">
                This paper represents the author&apos;s independent analysis. It is not legal advice and does not
                represent the position of any employer, government, standards body, or AI developer.
              </p>
            </section>
          </article>
        </div>
      </main>

      <SiteFooter />
    </div>
  );
}
