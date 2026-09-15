import { HeroAtmosphere } from "@/components/hero-atmosphere";
import { Navigation } from "@/components/navigation";
import { ScrollScene } from "@/components/scroll-scene";
import { Wordmark } from "@/components/wordmark";
import { ProjectPreview } from "@/components/previews";
import { Fragments } from "@/components/fragments";
import { profile, projects } from "@/lib/content";
export default function Home() {
  return (
    <>
      <a className="skip-link" href="#work">
        Skip to work
      </a>
      <ScrollScene>
        <main>
          <section className="hero" aria-label="Introduction">
            <HeroAtmosphere />
            <div className="white-bloom" />
            <div className="hero-ink">
              <h1 className="hero-wordmark">
                <span className="sr-only">Lohit</span>
                <span className="wordmark-desktop" aria-hidden="true">
                  <Wordmark />
                  <span className="trademark">TM</span>
                </span>
                <span className="wordmark-mobile" aria-hidden="true">
                  <Wordmark segment="loh" />
                  <span className="wordmark-mobile-tail">
                    <Wordmark segment="it" />
                    <span className="trademark">TM</span>
                  </span>
                </span>
              </h1>
              <div className="hero-copy">
                <p className="hero-statement">I WORK WITH AI</p>
                <p className="hero-continuation">
                  to design and build websites, apps, and digital experiences
                  that help agencies deliver more.
                </p>
              </div>
            </div>
          </section>
          <div className="portfolio-body">
            <Navigation />
            <section className="work-section section-pad" id="work">
              <div className="section-heading" data-reveal>
                <p className="eyebrow">IDEAS MADE REAL</p>
                <h2>
                  Good thinking.
                  <br />
                  <span className="muted accent-type">Better making.</span>
                </h2>
                <p className="section-intro">
                  Design that gets noticed. Development that delivers.
                  <br /> A few possibilities, brought to life.
                </p>
              </div>
              <div className="projects">
                {projects.map((p, i) => (
                  <article
                    className={`project project-${i}`}
                    key={p.id}
                    data-reveal
                  >
                    <ProjectPreview kind={p.id} />
                    <div className="project-caption">
                      <div>
                        <h3>{p.name}</h3>
                        <p>{p.category}</p>
                      </div>
                      {"sourceUrl" in p ? (
                        <a className="concept-label" href={p.sourceUrl} target="_blank" rel="noopener noreferrer" aria-label={`View ${p.name} on GitHub`}>
                          VIEW SOURCE ↗
                        </a>
                      ) : "caseStudyUrl" in p ? (
                        <a className="concept-label" href={p.caseStudyUrl} target="_blank" rel="noopener noreferrer" aria-label="View Amazon rebrand case study on Behance">
                          VIEW CASE STUDY ↗
                        </a>
                      ) : (
                        <span className="concept-label">
                          {p.id === "opencorp" ? "RECENT PROJECT" : "CONCEPT PROJECT ↗"}
                        </span>
                      )}
                    </div>
                    <p className="project-description">{p.description}</p>
                  </article>
                ))}
              </div>
            </section>
            <section className="fragments-section section-pad" id="fragments">
              <div className="section-heading" data-reveal>
                <p className="eyebrow">THE SMALL THINGS COUNT</p>
                <h2>
                  Fragments
                  <span className="heading-star" aria-hidden="true">
                    ✳︎
                  </span>
                </h2>
                <p className="section-intro">
                  Little experiments. Happy accidents. Things worth keeping.
                  <br /> A quick look inside my head, no case study required.
                </p>
              </div>
              <Fragments />
            </section>
            <section className="about-section section-pad" id="about">
              <div className="about-title" data-reveal>
                <p className="eyebrow">DESIGNER. DEVELOPER. DOER.</p>
                <h2>
                  A creative mind.
                  <br />A builder’s
                  <br />
                  <span className="muted accent-type">instinct.</span>
                </h2>
              </div>
              <div className="about-copy" data-reveal>
                <div className="about-symbol">
                  L<span>↗</span>
                </div>
                <p>
                  I’m Lohit. I connect the way things look with the way they
                  work.
                </p>
                <p>
                  I help marketing and nontechnical agencies turn ambitious
                  ideas into websites, apps, and digital content. From the first
                  sketch to the final build, I bring design, code, and AI into
                  the same conversation.
                </p>
                <p>More room for your ideas. The technical side, handled.</p>
                <div className="capabilities">
                  <span>Digital experiences</span>
                  <span>Web & app development</span>
                  <span>Creative development</span>
                  <span>AI-assisted workflows</span>
                </div>
              </div>
            </section>
            <section
              className="guestbook-section section-pad"
              id="guestbook"
              data-reveal
            >
              <div className="guestbook-copy">
                <p className="eyebrow">A LITTLE PROOF YOU WERE HERE</p>
                <h2>
                  Leave your
                  <br />
                  <span className="accent-type">mark.</span>
                </h2>
                <p>
                  A signature, a sticker, a tiny hello.
                  <br />
                  This corner will be yours soon.
                </p>
                <span className="coming-soon">GUESTBOOK · COMING LATER</span>
              </div>
              <div
                className="sticker-board"
                aria-label="Sample guestbook artwork"
              >
                <span className="sample-note">A FEW IMAGINARY HELLOS</span>
                <div className="sticker sticker-smile">
                  <span className="smile-eyes">••</span>
                  <span className="smile-mouth" />
                </div>
                <div className="sticker sticker-type">
                  really
                  <br />
                  <i>good</i>
                  <br />
                  stuff.
                </div>
                <div className="sticker sticker-star" aria-hidden="true">
                  ✳︎
                </div>
                <div className="signature">
                  keep making
                  <br />
                  cool things!<span>~ a future visitor</span>
                </div>
                <div className="sticker sticker-label">MADE YOU LOOK ↗</div>
                <span className="board-cross">+</span>
              </div>
            </section>
            <footer className="contact-section section-pad" id="contact">
              <div data-reveal>
                <p className="eyebrow">GOT SOMETHING IN MIND?</p>
                <h2>
                  You bring the idea.
                  <br />
                  I’ll bring it <span className="accent-type">to life.</span>
                </h2>
                {profile.email ? (
                  <a className="contact-link" href={`mailto:${profile.email}`}>
                    Let’s make it happen ↗
                  </a>
                ) : (
                  <p className="contact-note">
                    For agency partnerships, ambitious projects,
                    <br />
                    and teams who care about what they make.
                  </p>
                )}
              </div>
              <div className="footer-bottom">
                <span>© {new Date().getFullYear()} LOHIT</span>
                <span>DESIGNED WITH INTENT. BUILT WITH CARE.</span>
                <a href="#">BACK TO TOP ↑</a>
              </div>
              <Wordmark className="footer-wordmark" />
            </footer>
          </div>
        </main>
      </ScrollScene>
    </>
  );
}
