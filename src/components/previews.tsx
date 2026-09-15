"use client";
import { useState } from "react";
import Image from "next/image";
export function ProjectPreview({ kind }: { kind: string }) {
  const [active, setActive] = useState(false);
  const [tab, setTab] = useState("In progress");
  if (kind === "opencorp")
    return (
      <div className="project-preview opencorp">
        <Image
          src="/projects/opencorp-cover.png"
          alt="OpenCorp — A company of AI agents. A lime-accented CEO tile connects to Design, Engineering, Research, and QA on a charcoal canvas."
          width={1727}
          height={911}
          sizes="(max-width: 700px) 92vw, 90vw"
        />
      </div>
    );
  if (kind === "amazon")
    return (
      <div className="project-preview amazon">
        <Image
          src="/projects/amazon-rebrand-cover.png"
          alt="Amazon rebrand concept: a geometric white wordmark and orange smile above textured orange and black identity boards bearing the redesigned a symbol."
          fill
          sizes="(max-width: 700px) 92vw, 45vw"
          style={{ objectFit: "cover" }}
        />
      </div>
    );
  if (kind === "cryptowall")
    return (
      <div className="project-preview cryptowall">
        <Image
          src="/projects/cryptowall-cover.png"
          alt="CryptoWall — Crypto payments, connected. An emerald glass lightning bolt above flowing green payment tracks on a black surface."
          fill
          sizes="(max-width: 700px) 92vw, 45vw"
          style={{ objectFit: "cover" }}
        />
      </div>
    );
  if (kind === "forma")
    return (
      <div className={`project-preview forma ${active ? "forma-alt" : ""}`}>
        <div className="mini-nav">
          <b>forma®</b>
          <span>Independent by design.</span>
          <button
            onClick={() => setActive(!active)}
            aria-label="Change Forma art direction"
          >
            ↗
          </button>
        </div>
        <div className="forma-title">
          GOOD
          <br />
          <i>BY DESIGN.</i>
        </div>
        <div className="forma-object">
          <div />
          <div />
          <div />
        </div>
        <div className="mini-footer">
          <span>Strategy. Identity. Digital.</span>
          <span>A fresh perspective ↗</span>
        </div>
      </div>
    );
  if (kind === "relay")
    return (
      <div className="project-preview relay">
        <div className="relay-app">
          <div className="mini-nav">
            <b>↗ relay</b>
            <span>WORKSPACE</span>
            <span className="avatar">L</span>
          </div>
          <div className="relay-greeting">
            Good things
            <br />
            are moving.
          </div>
          <div className="relay-tabs">
            {["In progress", "Completed"].map((t) => (
              <button
                key={t}
                className={t === tab ? "selected" : ""}
                onClick={() => setTab(t)}
              >
                {t}
              </button>
            ))}
          </div>
          <div className="relay-task">
            <span className="task-icon">{tab === "Completed" ? "✓" : "↗"}</span>
            <div>
              <strong>
                {tab === "Completed"
                  ? "Brand foundations"
                  : "A new digital home"}
              </strong>
              <small>
                {tab === "Completed"
                  ? "Ready for the next chapter"
                  : "Website design · Studio project"}
              </small>
            </div>
            <span className="task-person">A</span>
          </div>
          <div className="relay-task">
            <span className="task-icon peach">
              {tab === "Completed" ? "✓" : "⌘"}
            </span>
            <div>
              <strong>
                {tab === "Completed"
                  ? "Discovery workshop"
                  : "Make the handoff easy"}
              </strong>
              <small>
                {tab === "Completed"
                  ? "Notes & next steps delivered"
                  : "Development · Client portal"}
              </small>
            </div>
            <span className="task-person">J</span>
          </div>
          <div className="relay-bottom">
            A little less chaos. A lot more clarity.
          </div>
        </div>
      </div>
    );
  return (
    <div
      className={`project-preview offscript ${active ? "offscript-alt" : ""}`}
    >
      <div className="mini-nav">
        <span>
          INDEPENDENT CULTURE.
          <br />
          COLLECTIVE ENERGY.
        </span>
        <button
          onClick={() => setActive(!active)}
          aria-label="Remix the Offscript poster"
        >
          REMIX ↗
        </button>
      </div>
      <div className="offscript-title">
        OFF
        <br />
        <span>SCRIPT</span>
        <div className="poster-star" aria-hidden="true">
          ✳︎
        </div>
      </div>
      <div className="mini-footer">
        <span>BREAK THE FORMAT.</span>
        <span>MAKE YOUR OWN NOISE.</span>
      </div>
    </div>
  );
}
