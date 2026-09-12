"use client";
import { useState } from "react";
export function ProjectPreview({ kind }: { kind: string }) {
  const [active, setActive] = useState(false);
  const [tab, setTab] = useState("In progress");
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
export function FragmentPreview({ kind }: { kind: string }) {
  const [active, setActive] = useState(false);
  const [color, setColor] = useState(0);
  if (kind === "type")
    return (
      <div className="fragment-art type-art">
        <span tabIndex={0}>Aa</span>
        <small>STRETCH YOUR THINKING.</small>
      </div>
    );
  if (kind === "orbit")
    return (
      <button
        className={`fragment-art orbit-art ${active ? "orbit-active" : ""}`}
        onClick={() => setActive(!active)}
        aria-label={active ? "Pause orbit" : "Start orbit"}
      >
        <span className="orbit-ring">
          <i />
        </span>
        <span className="orbit-core" />
        <small>{active ? "IN MOTION" : "A LITTLE PUSH?"}</small>
      </button>
    );
  if (kind === "switch")
    return (
      <div className={`fragment-art switch-art ${active ? "switch-on" : ""}`}>
        <button
          role="switch"
          aria-checked={active}
          aria-label="Good energy"
          className="big-switch"
          onClick={() => setActive(!active)}
        >
          <span />
        </button>
        <small>GOOD ENERGY: {active ? "ON" : "OFF"}</small>
      </div>
    );
  if (kind === "poster")
    return (
      <div className="fragment-art poster-art">
        <span>
          MAKE
          <br />
          SOME
          <br />
          <i>NOISE.</i>
        </span>
        <div />
      </div>
    );
  if (kind === "palette")
    return (
      <div
        className="fragment-art palette-art"
        style={{ background: ["#c5ced7", "#d7ea86", "#f3a888"][color] }}
      >
        <span className="palette-shape" />
        <div className="swatches">
          {["Slate", "Citron", "Apricot"].map((c, i) => (
            <button
              key={c}
              aria-label={`Use ${c} palette`}
              aria-pressed={i === color}
              style={{ background: ["#637386", "#a3b854", "#c36842"][i] }}
              onClick={() => setColor(i)}
            />
          ))}
        </div>
        <small>A DIFFERENT TEMPERATURE.</small>
      </div>
    );
  return (
    <button
      className={`fragment-art breathe-art ${active ? "breathing" : ""}`}
      onClick={() => setActive(!active)}
      aria-label={
        active ? "Pause breathing exercise" : "Start breathing exercise"
      }
    >
      <span />
      <small>{active ? "BREATHE IN. BREATHE OUT." : "TAKE A MOMENT."}</small>
    </button>
  );
}
