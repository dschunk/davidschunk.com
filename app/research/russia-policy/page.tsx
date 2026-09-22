import type { Metadata } from "next";
import { SiteFooter, SiteHeader } from "@/components/site-chrome";

export const metadata: Metadata = {
  title: "A U.S.-Russia Policy for an Era of Conflict — David Schunk",
  description:
    "David Schunk's independent framework for U.S.-Russia relations: deterrence, dialogue, nuclear risk reduction, citizen protection, accountable diplomacy, and a renewed human layer of engagement.",
  alternates: { canonical: "/research/russia-policy" },
  openGraph: {
    url: "https://www.davidschunk.com/research/russia-policy",
    title: "A U.S.-Russia Policy for an Era of Conflict",
    description:
      "A framework for managing confrontation without accepting permanent hostility as the only possible future.",
    type: "article",
  },
};

const sources = [
  ["U.S. Department of State, Russia Travel Advisory — Level 4: Do Not Travel", "https://travel.state.gov/en/international-travel/travel-advisories/russia.html"],
  ["U.S. Department of State, Russia International Travel Information", "https://travel.state.gov/content/travel/en/international-travel/International-Travel-Country-Information-Pages/RussianFederation.html"],
  ["U.S. Department of the Treasury, Russia-related sanctions authorities and actions", "https://home.treasury.gov/policy-issues/financial-sanctions/sanctions-programs-and-country-information/russian-harmful-foreign-activities-sanctions"],
  ["United Nations, Charter of the United Nations", "https://www.un.org/en/about-us/un-charter/full-text"],
  ["Reuters, U.S. and Russia reestablish high-level military-to-military dialogue, February 5, 2026", "https://www.reuters.com/world/middle-east/us-russia-reestablish-high-level-military-to-military-dialogue-us-military-says-2026-02-05/"],
  ["Reuters, New START expires without a successor agreement, February 2026", "https://www.reuters.com/world/china/new-nuclear-age-beckons-clock-ticks-down-last-russia-us-arms-deal-2026-02-04/"],
  ["Reuters, current U.S. diplomacy on the Russia-Ukraine war, September 22, 2026", "https://www.reuters.com/world/us/trump-un-threats-diplomacy-super-intelligence-2026-09-22/"],
];

const Toc = () => (
  <nav className="research-toc" aria-label="Paper contents">
    <strong>Contents</strong>
    <a href="#abstract">Abstract</a>
    <a href="#perspective">1. The perspective I bring</a>
    <a href="#principle">2. The governing principle</a>
    <a href="#reality">3. Start with reality</a>
    <a href="#channels">4. Keep channels open</a>
    <a href="#nuclear">5. Nuclear risk reduction</a>
    <a href="#ukraine">6. Ukraine and European security</a>
    <a href="#sanctions">7. Sanctions and economic pressure</a>
    <a href="#people">8. Protect the human layer</a>
    <a href="#adoptees">9. Russian adoptees as a diplomatic constituency</a>
    <a href="#information">10. Cyber and information security</a>
    <a href="#cooperation">11. Managed cooperation</a>
    <a href="#normalization">12. A path toward normalization</a>
    <a href="#diplomat">13. The adoptee diplomat</a>
    <a href="#principles">14. Ten operating principles</a>
    <a href="#conclusion">Conclusion</a>
    <a href="#sources">Sources</a>
  </nav>
);

export default function RussiaPolicyPaper() {
  return (
    <div className="ds-site research-page">
      <SiteHeader />

      <main>
        <section className="research-hero">
          <div className="ds-shell research-hero-inner">
            <p className="ds-eyebrow">Foreign Policy Paper · U.S.–Russia Relations · September 22, 2026</p>
            <h1>A U.S.-Russia Policy for an Era of Conflict</h1>
            <p className="research-subtitle">
              Deterrence, dialogue, citizen protection, and the human layer of diplomacy
            </p>
            <p className="research-dek">
              The United States does not need to choose between naivety toward Russia and permanent hostility
              with Russia. A serious policy can defend American interests, support international law, reduce
              nuclear and military risk, protect citizens, preserve leverage, and still maintain channels through
              which adversaries can communicate. This paper sets out my framework for doing that.
            </p>
            <div className="research-meta">
              <span><b>David Schunk</b> · Russian-born American adoptee, writer &amp; IT engineer</span>
              <span>Version 1.0 · September 22, 2026</span>
              <span>Independent foreign-policy analysis</span>
            </div>
            <div className="research-note">
              <b>Scope.</b> This paper presents my personal foreign-policy framework. My experience as a Russian-born
              American adoptee informs the questions I ask, but it does not make me a spokesperson for Russia,
              the United States, Russian adoptees as a whole, or any government. Lived experience is evidence of
              perspective, not a substitute for professional diplomacy, intelligence, law, history, or regional expertise.
            </div>
          </div>
        </section>

        <div className="ds-shell research-grid">
          <Toc />

          <article className="research-prose">
            <section id="abstract">
              <p className="research-eyebrow">Abstract</p>
              <p className="research-lead">
                My central argument is simple: the United States should be capable of confronting Russian actions
                it considers dangerous while preserving enough diplomatic, military, consular, and human contact
                to prevent confrontation from becoming permanent or uncontrollable.
              </p>
              <p>
                U.S.-Russia relations in 2026 remain defined by war, sanctions, distrust, military risk, diplomatic
                restrictions, cyber and information-security concerns, and a severely diminished architecture for
                strategic arms control. At the same time, the two countries remain nuclear powers whose decisions
                affect European security, the Arctic, space, energy markets, global institutions, and millions of
                people with family, cultural, professional, or historical connections across the divide.
              </p>
              <p>
                A workable policy therefore cannot be built on the assumption that one side will disappear, surrender
                every interest, or suddenly trust the other. It must be built for coexistence under conditions of
                profound disagreement. That requires deterrence where deterrence is necessary, negotiation where
                negotiation can reduce danger, consequences that are tied to identifiable behavior, and protected
                channels for citizens and institutions whose needs should not depend on the political temperature of
                the day.
              </p>
              <blockquote>
                Diplomacy is not a reward for friendship. It is one of the tools used to manage relationships when
                friendship does not exist.
              </blockquote>
            </section>

            <section id="perspective">
              <p className="research-eyebrow">1 · Perspective</p>
              <h2>The perspective I bring is personal, but the policy must be larger than my story.</h2>
              <p>
                I was born in Russia and adopted to the United States. Russia is therefore not an abstraction to me,
                and neither is America. My life has been shaped by both countries even though my civic life, career,
                education, and home are American. I have returned to Russia, worked with adoptees navigating identity
                and citizenship questions, hosted long-form conversations through Voice of Adoptees, and helped build
                institutions intended to give Russian adoptees a serious public voice.
              </p>
              <p>
                That position can reveal something conventional foreign-policy debate sometimes misses. Governments
                interact as states, but foreign policy eventually reaches human beings: families trying to cross a
                border, dual nationals trying to understand which passport the law requires, adoptees searching for
                records, citizens needing consular assistance, researchers seeking contact, and people who can care
                about two cultures without becoming agents of either government.
              </p>
              <p>
                I do not claim that being adopted from Russia creates automatic expertise or neutrality. It does not.
                I do believe it creates a useful vantage point from which to ask whether a policy is protecting national
                interests without unnecessarily destroying every human bridge beneath the state-to-state relationship.
              </p>
            </section>

            <section id="principle">
              <p className="research-eyebrow">2 · Governing principle</p>
              <h2>Strength and communication are not opposites.</h2>
              <p>
                American policy toward Russia should begin with a distinction that is frequently lost in public debate:
                engagement is not trust, negotiation is not capitulation, deterrence is not permanent isolation, and
                cultural contact is not approval of a government.
              </p>
              <p>
                The United States should preserve the ability to impose costs, protect allies, defend infrastructure,
                counter espionage and cyber operations, and respond to threats. It should also preserve the ability to
                speak directly to Russian officials, maintain crisis communications, negotiate verifiable agreements,
                assist citizens, and support legitimate academic, humanitarian, cultural, and family contact.
              </p>
              <p>
                A policy that can only punish but cannot negotiate is incomplete. A policy that can only negotiate but
                cannot impose consequences is also incomplete. The objective is controlled competition with pathways
                for de-escalation.
              </p>
            </section>

            <section id="reality">
              <p className="research-eyebrow">3 · Strategic reality</p>
              <h2>Policy should begin with the world that exists, not the relationship we wish existed.</h2>
              <p>
                As of September 2026, Russia&apos;s war against Ukraine continues. The United States and Russia remain
                deeply divided over the conflict and broader European security. The State Department continues to list
                Russia at Level 4 — Do Not Travel — citing the war, wrongful-detention risk, arbitrary enforcement of
                local law, terrorism, and limited U.S. ability to assist citizens. U.S. consular operations in Russia
                remain sharply constrained.
              </p>
              <p>
                There are nevertheless limited signs that channels can be restored even during confrontation. In
                February 2026 the United States and Russia agreed to reestablish high-level military-to-military
                dialogue, an important mechanism for reducing misunderstanding and escalation. That same month,
                New START expired without a successor agreement, ending the last treaty that imposed binding limits
                on the two countries&apos; deployed strategic nuclear arsenals.
              </p>
              <p>
                Those two developments illustrate the challenge. Communication can reopen at the same time that the
                institutional architecture of restraint is deteriorating. U.S. policy should be designed to expand the
                former without pretending the latter is unimportant.
              </p>
            </section>

            <section id="channels">
              <p className="research-eyebrow">4 · Diplomatic channels</p>
              <h2>Keep official channels open even when relations are poor.</h2>
              <p>
                One of the clearest lessons of dangerous international rivalries is that communication becomes more
                valuable as trust declines. Washington and Moscow need reliable channels for military deconfliction,
                nuclear risk, detained citizens, embassy operations, cyber incidents, major exercises, regional crises,
                and urgent misunderstandings that could otherwise escalate.
              </p>
              <p>
                The goal is not an endless sequence of ceremonial summits. The more useful architecture is durable,
                professional, and issue-specific: diplomats talking to diplomats, military officers talking to military
                officers, technical experts talking about arms control, and consular officials solving individual cases.
              </p>
              <div className="research-callout">
                <b>Policy principle: communication is risk control.</b>
                <span>A hotline, working group, or negotiating table is not evidence that two governments agree. It is evidence that they have chosen not to rely entirely on assumption and escalation.</span>
              </div>
            </section>

            <section id="nuclear">
              <p className="research-eyebrow">5 · Nuclear risk</p>
              <h2>Rebuild a verifiable strategic-stability framework.</h2>
              <p>
                The expiration of New START in February 2026 left the United States and Russia without the treaty&apos;s
                binding deployment limits and verification framework. Whatever criticisms existed of the treaty, the
                disappearance of a shared system of limits, declarations, and predictability creates a different and
                potentially more dangerous environment.
              </p>
              <p>
                A successor framework should be pursued because strategic stability is an American security interest,
                not because Washington must assume good faith from Moscow. Verification exists precisely because trust
                is insufficient. Any future arrangement should emphasize measurable limits, reciprocal verification,
                notification mechanisms, resilience against suspension, and a structure capable of addressing newer
                weapons systems and changing strategic realities.
              </p>
              <p>
                Broader nuclear powers may eventually need to be incorporated into future arms-control architecture,
                but the existence of additional nuclear states should not become an excuse for the two largest nuclear
                powers to abandon bilateral risk reduction that they are uniquely positioned to undertake.
              </p>
            </section>

            <section id="ukraine">
              <p className="research-eyebrow">6 · Ukraine and European security</p>
              <h2>U.S.-Russia diplomacy cannot treat Ukraine as scenery in a bilateral relationship.</h2>
              <p>
                The war in Ukraine is central to the current U.S.-Russia confrontation, but any durable settlement
                concerns the sovereignty, security, population, territory, and future of Ukraine itself. Negotiations
                involving Washington and Moscow may be useful, especially where the two nuclear powers can reduce
                escalation risks, but they cannot by themselves substitute for agreements involving the parties whose
                rights and security are directly at stake.
              </p>
              <p>
                American diplomacy should distinguish between different negotiating tracks. Strategic nuclear stability
                is primarily a U.S.-Russia responsibility. Bilateral embassy and detainee issues are bilateral.
                European security requires European participation. A settlement of the Russia-Ukraine war requires the
                participation and assent of Ukraine and Russia.
              </p>
              <p>
                Separating these tracks also prevents one unresolved issue from making every other risk-reduction
                mechanism impossible. Countries can remain in profound disagreement while still negotiating narrowly
                where doing so reduces the chance of a larger disaster.
              </p>
            </section>

            <section id="sanctions">
              <p className="research-eyebrow">7 · Economic pressure</p>
              <h2>Sanctions should have defined purposes, review points, and credible off-ramps.</h2>
              <p>
                Sanctions are a tool of statecraft, not a foreign policy by themselves. The United States maintains
                extensive Russia-related sanctions authorities covering financial, defense, technology, energy, and
                other activities. Where sanctions are used, policymakers should be able to explain the behavior being
                targeted, the intended effect, how success will be evaluated, and what change in behavior could justify
                modification or removal.
              </p>
              <p>
                This does not require promising relief in advance or weakening enforcement. It means preserving the
                logic of leverage. A measure that can never change regardless of conduct may express condemnation, but
                it offers less incentive for a negotiated change in conduct. Conversely, relief without verification
                can surrender leverage without producing durable results.
              </p>
              <p>
                Humanitarian, family, educational, and legitimate civil-society activity should be protected through
                clear licensing and guidance where consistent with law. The purpose of economic pressure should be to
                influence defined conduct, not to erase every lawful connection between societies.
              </p>
            </section>

            <section id="people">
              <p className="research-eyebrow">8 · The human layer</p>
              <h2>Foreign policy should protect people who live underneath the geopolitical relationship.</h2>
              <p>
                In periods of confrontation, consular services can look secondary to strategy. They are not. They are
                where international relations become intensely personal.
              </p>
              <p>
                The current State Department advisory makes clear how difficult the environment is for U.S. citizens in
                Russia, including the risk of wrongful detention and the limited ability of the U.S. government to
                provide assistance. Those warnings should remain direct and evidence-based. Governments also need
                functioning mechanisms to address detainees, deaths, family emergencies, citizenship questions,
                documents, and other cases that do not disappear because political relations deteriorate.
              </p>
              <p>
                I would treat consular capacity as part of national security resilience. Even when normal relations are
                impossible, countries should work toward reliable channels for emergency citizen cases, transparent
                procedures, and reciprocal access consistent with international obligations.
              </p>
            </section>

            <section id="adoptees">
              <p className="research-eyebrow">9 · Russian adoptees</p>
              <h2>Adoptees should not be invisible in the relationship between their birth country and home country.</h2>
              <p>
                Russian adoptees occupy an unusual space in U.S.-Russia relations. Many were born under one legal and
                cultural system and raised under another. Some retain Russian citizenship. Some have returned to their
                birth country. Some have searched for biological relatives or records. Others want no connection at
                all. None of those choices makes one person more authentic than another.
              </p>
              <p>
                For years, adoption itself became entangled with the political relationship between Washington and
                Moscow. My view has remained consistent since I wrote to Russian authorities as a young adult in 2013:
                children and families should not become instruments of state-to-state retaliation.
              </p>
              <p>
                Today the practical agenda is broader than adoption placement. Governments and community organizations
                should make citizenship status, passport requirements, archival access, family-search procedures,
                consular rules, and travel risks understandable to adult adoptees. When official guidance changes,
                it should be translated into plain language rather than left to rumor.
              </p>
              <p>
                Russian adoptees are not a geopolitical bloc. They are, however, a legitimate constituency whose lives
                demonstrate why foreign policy has consequences that outlast administrations and diplomatic crises.
              </p>
            </section>

            <section id="information">
              <p className="research-eyebrow">10 · Cyber and information security</p>
              <h2>Dialogue should coexist with serious defenses against cyber operations, espionage, and covert influence.</h2>
              <p>
                A policy of engagement cannot require the United States to ignore hostile cyber activity, intelligence
                operations, covert influence, or attacks on democratic and critical infrastructure. Those threats
                should be addressed through technical defense, attribution where evidence supports it, law enforcement,
                intelligence cooperation with allies, sanctions or other consequences where authorized, and direct
                warning channels capable of reducing escalation after major incidents.
              </p>
              <p>
                The public-information environment requires similar discipline. Governments should distinguish between
                foreign state-directed covert influence, ordinary political speech, journalism, diaspora opinion, and
                cultural expression. Treating every Russian voice as an instrument of the Russian state would be both
                inaccurate and corrosive. Ignoring documented covert influence would be equally irresponsible.
              </p>
              <p>
                Evidence, attribution, and transparency are better safeguards than nationality-based suspicion.
              </p>
            </section>

            <section id="cooperation">
              <p className="research-eyebrow">11 · Managed cooperation</p>
              <h2>Identify narrow areas where cooperation protects both countries without pretending the broader conflict is solved.</h2>
              <p>
                Adversarial states sometimes share interests. The practical question is whether cooperation in a
                specific area produces measurable benefit without creating unacceptable dependency or compromising
                security.
              </p>
              <p>
                Possible areas for carefully bounded engagement include nuclear safety, strategic-risk reduction,
                search and rescue, space deconfliction, Arctic incident prevention, infectious-disease information,
                missing-person and family cases, and other technical or humanitarian matters where communication can
                prevent harm.
              </p>
              <p>
                Each channel should be evaluated on its own merits. Cooperation should not be used as a public-relations
                substitute for resolving serious disputes, but serious disputes should not automatically prohibit every
                form of cooperation that protects American interests.
              </p>
            </section>

            <section id="normalization">
              <p className="research-eyebrow">12 · Long-term strategy</p>
              <h2>Normalization should be conditional, gradual, and measurable.</h2>
              <p>
                The United States should neither promise a rapid reset nor assume that today&apos;s level of hostility
                must last forever. A durable policy needs a ladder in both directions: mechanisms for increasing
                consequences when conduct becomes more dangerous and mechanisms for cautiously expanding engagement
                when verifiable conditions improve.
              </p>
              <p>
                That can include staged restoration of diplomatic staffing, expanded consular functions, technical
                working groups, scientific and academic exchanges with appropriate security controls, and eventually
                broader economic interaction where law and security conditions permit.
              </p>
              <p>
                The key word is conditional. Progress should follow evidence. Reversibility should be built into early
                stages. Neither side should be required to base policy on sentiment.
              </p>
            </section>

            <section id="diplomat">
              <p className="research-eyebrow">13 · The adoptee diplomat</p>
              <h2>Lived experience can supplement professional diplomacy without replacing it.</h2>
              <p>
                I have called this idea the <b>Adoptee Diplomat</b>: people whose lives cross borders can sometimes
                contribute forms of contextual knowledge that institutions do not easily produce on their own.
              </p>
              <p>
                That idea should be used carefully. An adoptee should never be placed in a room as a symbolic bridge
                and expected to represent millions of people. Nor should personal biography substitute for language
                study, regional expertise, legal knowledge, diplomatic training, history, security awareness, or
                professional judgment.
              </p>
              <p>
                The better model is additive. Foreign-policy institutions should be willing to hear from people whose
                lives have been shaped directly by the countries under discussion: adoptees, dual nationals, diaspora
                communities, journalists, scholars, humanitarian workers, former diplomats, business leaders, and
                others who possess relevant experience.
              </p>
              <p>
                My own offer is not a claim of entitlement to diplomatic authority. It is an offer to earn usefulness:
                to study, train, listen, serve, and bring an adoptee-informed perspective into serious discussions of a
                relationship that has shaped my life from birth.
              </p>
            </section>

            <section id="principles">
              <p className="research-eyebrow">14 · Operating principles</p>
              <h2>Ten principles for a durable U.S.-Russia policy</h2>
              <ol>
                <li><b>Defend American interests without treating permanent hostility as an objective.</b></li>
                <li><b>Maintain direct diplomatic and military communication even during confrontation.</b></li>
                <li><b>Pursue verifiable nuclear-risk reduction because distrust makes verification more important, not less.</b></li>
                <li><b>Keep Ukraine and other directly affected states at the table for decisions concerning their sovereignty and security.</b></li>
                <li><b>Use sanctions and economic pressure for defined purposes, with review criteria and enforceable conditions.</b></li>
                <li><b>Protect consular functions, citizen assistance, detainee channels, and family-related cases from unnecessary political spillover.</b></li>
                <li><b>Counter cyber operations, espionage, and covert influence based on evidence and conduct rather than nationality.</b></li>
                <li><b>Preserve legitimate educational, cultural, humanitarian, academic, and people-to-people contact where law and security allow it.</b></li>
                <li><b>Build normalization in stages and make early steps reversible when conditions deteriorate.</b></li>
                <li><b>Listen to people whose lives cross the relationship, while never confusing lived experience with automatic expertise or official authority.</b></li>
              </ol>
            </section>

            <section id="conclusion">
              <p className="research-eyebrow">Conclusion</p>
              <h2>The purpose of diplomacy is not to pretend conflict does not exist. It is to keep conflict from becoming the only relationship that exists.</h2>
              <p>
                The United States and Russia have accumulated decades of suspicion, competing interests, unresolved
                grievances, military risk, and political narratives about one another. None of that can be removed by
                a slogan, a summit, or a personal relationship between leaders.
              </p>
              <p>
                But history does not require policy to become fatalism.
              </p>
              <p>
                The United States can defend itself and its allies. It can impose consequences. It can support
                sovereignty and international law. It can protect infrastructure and confront hostile activity.
                It can do those things while maintaining military hotlines, negotiating nuclear limits, assisting
                citizens, preserving carefully bounded exchanges, and leaving a credible path by which better conduct
                can produce a better relationship.
              </p>
              <p>
                I have spent much of my life existing in a space between two countries that are frequently described
                only through conflict. That does not give me a simple answer to U.S.-Russia relations. It has convinced
                me that reducing an entire relationship to enemies and allies is too simple for the human reality
                underneath it.
              </p>
              <blockquote>
                America does not need to trust Russia in order to talk to Russia. It needs the confidence to defend its
                interests, the discipline to verify what can be verified, and the foresight to preserve a way out of
                escalation.
              </blockquote>
              <p>
                That is the foreign policy I would pursue: strength without illusion, dialogue without surrender,
                consequences without permanent closure, and a deliberate effort to rebuild the human and institutional
                channels that make a dangerous relationship manageable.
              </p>
            </section>

            <section id="sources" className="research-sources">
              <p className="research-eyebrow">Selected sources and authorities</p>
              <h2>Research base</h2>
              <p>
                This paper combines the author&apos;s stated policy framework and lived experience with current public
                information from official U.S. government sources, international law, and reporting on current
                diplomatic and strategic developments. Inclusion of a source does not imply that the source endorses
                the policy proposals in this paper.
              </p>
              <ol>
                {sources.map(([title, href]) => (
                  <li key={href}>
                    <a href={href} target="_blank" rel="noreferrer">{title}</a>
                  </li>
                ))}
              </ol>
              <p className="research-version">
                <b>Citation:</b> Schunk, David. “A U.S.-Russia Policy for an Era of Conflict: Deterrence, Dialogue,
                Citizen Protection, and the Human Layer of Diplomacy.” Version 1.0, September 22, 2026.
                DavidSchunk.com.
              </p>
              <p className="research-version">
                This paper represents the author&apos;s independent analysis and personal policy framework. It does not
                represent the position of any employer, government, political party, diplomatic mission, or community
                organization.
              </p>
            </section>
          </article>
        </div>
      </main>

      <SiteFooter />
    </div>
  );
}
