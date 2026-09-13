"use client";

import { useId, useRef, useEffect, useState, type CSSProperties } from "react";
import "./fragment-snippets.css";

function TypeStudy() {
  const [weight, setWeight] = useState(560);
  const [tracking, setTracking] = useState(-5);
  return (
    <div className="snippet sn-type">
      <div className="sn-top">
        <span>TYPE / IN YOUR HANDS</span>
        <span>Geist Variable</span>
      </div>
      <div
        className="sn-specimen"
        style={{ fontWeight: weight, letterSpacing: `${tracking / 100}em` }}
      >
        Aa<span>Form follows feeling.</span>
      </div>
      <div className="sn-type-controls">
        <label>
          Weight <output>{weight}</output>
          <input
            aria-label="Type weight"
            type="range"
            min="200"
            max="900"
            step="10"
            value={weight}
            onChange={(e) => setWeight(+e.target.value)}
          />
        </label>
        <label>
          Tracking <output>{tracking / 100} em</output>
          <input
            aria-label="Type tracking"
            type="range"
            min="-8"
            max="6"
            value={tracking}
            onChange={(e) => setTracking(+e.target.value)}
          />
        </label>
      </div>
      <div className="sn-bottom">
        A different voice. The same two letters.
        <button
          onClick={() => {
            setWeight(560);
            setTracking(-5);
          }}
        >
          Reset
        </button>
      </div>
    </div>
  );
}
const destinations = [
  {
    name: "Home",
    glyph: "⌂",
    title: "A place to begin.",
    text: "Your next good idea is right here.",
    count: "01",
    shape: "home",
  },
  {
    name: "Explore",
    glyph: "↗",
    title: "Follow your curiosity.",
    text: "Take the interesting way around.",
    count: "02",
    shape: "explore",
  },
  {
    name: "Saved",
    glyph: "♡",
    title: "Keep the good things.",
    text: "A little collection of possibility.",
    count: "03",
    shape: "saved",
  },
] as const;
function DockStudy() {
  const [tab, setTab] = useState(0);
  const id = useId();
  const current = destinations[tab];
  function select(index: number) {
    setTab(index);
    document
      .getElementById(`${id}-tab-${index}`)
      ?.focus({ preventScroll: true });
  }
  return (
    <div className="snippet sn-dock">
      <div className="sn-top">
        <span>NAVIGATION / A SENSE OF PLACE</span>
        <span>{current.count} / 03</span>
      </div>
      <div
        className="sn-dock-view"
        id={`${id}-panel`}
        role="tabpanel"
        aria-labelledby={`${id}-tab-${tab}`}
      >
        <div
          className={`sn-navigation-object object-${current.shape}`}
          aria-hidden="true"
        >
          <i />
          <i />
          <i />
          <i />
        </div>
        <strong>{current.title}</strong>
        <p>{current.text}</p>
      </div>
      <div
        className="sn-dock-bar"
        role="tablist"
        aria-label="Explore navigation"
        onKeyDown={(e) => {
          const next =
            e.key === "ArrowRight"
              ? (tab + 1) % 3
              : e.key === "ArrowLeft"
                ? (tab + 2) % 3
                : e.key === "Home"
                  ? 0
                  : e.key === "End"
                    ? 2
                    : null;
          if (next !== null) {
            e.preventDefault();
            select(next);
          }
        }}
      >
        <span
          className="sn-dock-indicator"
          style={{ transform: `translateX(${tab * 100}%)` }}
        />
        {destinations.map((d, i) => (
          <button
            key={d.name}
            role="tab"
            id={`${id}-tab-${i}`}
            aria-controls={`${id}-panel`}
            aria-selected={tab === i}
            tabIndex={tab === i ? 0 : -1}
            onClick={() => setTab(i)}
          >
            <span aria-hidden="true">{d.glyph}</span>
            {d.name}
          </button>
        ))}
      </div>
      <div className="sn-bottom">A small shift. A clear destination.</div>
    </div>
  );
}
function FocusStudy() {
  const [active, setActive] = useState(false);
  return (
    <div className={`snippet sn-focus ${active ? "is-focused" : ""}`}>
      <div className="sn-top">
        <span>SETTINGS / LESS, BUT BETTER</span>
        <span>{active ? "On" : "Off"}</span>
      </div>
      <div className="sn-focus-visual" aria-hidden="true">
        <div className="sn-focus-orbit" />
        <div className="sn-focus-orbit second" />
        <div className="sn-focus-dot" />
        <span className="sn-distraction distraction-one">New message</span>
        <span className="sn-distraction distraction-two">One more thing…</span>
      </div>
      <div className="sn-setting">
        <div>
          <strong>Room to focus.</strong>
          <p>
            {active
              ? "Just you and the work."
              : "A little less noise, on demand."}
          </p>
        </div>
        <button
          className="sn-toggle"
          role="switch"
          aria-label="Good energy"
          aria-checked={active}
          onClick={() => setActive(!active)}
        >
          <span />
        </button>
      </div>
      <div className="sn-focus-status" role="status">
        <span />
        {active ? "Distractions tucked away" : "All notifications visible"}
      </div>
    </div>
  );
}
function SaveStudy() {
  const [state, setState] = useState<"idle" | "saving" | "saved">("idle");
  const timer = useRef<ReturnType<typeof setTimeout> | undefined>(undefined);
  useEffect(() => () => clearTimeout(timer.current), []);
  function save() {
    setState("saving");
    timer.current = setTimeout(() => setState("saved"), 650);
  }
  return (
    <div className="snippet sn-save">
      <div className="sn-top">
        <span>FEEDBACK / A LITTLE REASSURANCE</span>
        <span>Try it below</span>
      </div>
      <div className="sn-save-card">
        <div className="sn-save-art" aria-hidden="true">
          <i />
          <i />
          <i />
        </div>
        <div className="sn-save-copy">
          <span>FIELD NOTES</span>
          <strong>
            Notice the
            <br />
            <em>little things.</em>
          </strong>
          <p>A collection worth coming back to.</p>
        </div>
      </div>
      <button
        className={`sn-save-button save-${state}`}
        onClick={save}
        disabled={state !== "idle"}
      >
        <span aria-hidden="true">
          {state === "saved" ? "✓" : state === "saving" ? "◌" : "+"}
        </span>
        {state === "saved"
          ? "In your collection"
          : state === "saving"
            ? "Keeping it safe…"
            : "Save to collection"}
      </button>
      <div className="sn-save-status" role="status">
        {state === "saved" ? (
          <>
            <span>Saved for this preview.</span>
            <button onClick={() => setState("idle")}>Undo</button>
          </>
        ) : (
          <span>Good feedback leaves no room for guessing.</span>
        )}
      </div>
    </div>
  );
}
const palettes = [
  { name: "Paper", background: "#f3f1e9", ink: "#272820" },
  { name: "Ink", background: "#272820", ink: "#f3f1e9" },
  { name: "Clay", background: "#edd7c8", ink: "#67351f" },
];
function luminance(hex: string) {
  const rgb = hex
    .match(/[a-f\d]{2}/gi)!
    .map((v) => parseInt(v, 16) / 255)
    .map((v) => (v <= 0.04045 ? v / 12.92 : ((v + 0.055) / 1.055) ** 2.4));
  return rgb[0] * 0.2126 + rgb[1] * 0.7152 + rgb[2] * 0.0722;
}
function PaletteStudy() {
  const [selected, setSelected] = useState(0);
  const p = palettes[selected];
  const a = luminance(p.ink),
    b = luminance(p.background);
  const ratio = (Math.max(a, b) + 0.05) / (Math.min(a, b) + 0.05);
  return (
    <div className="snippet sn-palette">
      <div className="sn-top">
        <span>COLOR / FEELING MEETS FUNCTION</span>
        <span>Live contrast</span>
      </div>
      <div
        className="sn-color-sample"
        style={
          {
            "--sample-paper": p.background,
            "--sample-ink": p.ink,
          } as CSSProperties
        }
      >
        <span>Aa</span>
        <strong>Easy on the eyes.</strong>
        <div>
          <code>{p.background.toUpperCase()}</code>
          <code>{p.ink.toUpperCase()}</code>
        </div>
      </div>
      <div className="sn-palette-tools">
        <div className="sn-color-options" aria-label="Color palette">
          {palettes.map((palette, i) => (
            <button
              key={palette.name}
              aria-label={`Use ${palette.name} palette`}
              aria-pressed={selected === i}
              onClick={() => setSelected(i)}
            >
              <span
                style={{
                  background: palette.background,
                  borderColor: palette.ink,
                }}
              />
            </button>
          ))}
        </div>
        <div className="sn-contrast" role="status">
          <strong>{ratio.toFixed(2)}:1</strong>
          <span>{ratio >= 7 ? "AAA" : "AA"} text contrast ✓</span>
        </div>
      </div>
      <div className="sn-bottom">Beautiful should also be readable.</div>
    </div>
  );
}
function PriorityStudy() {
  const [items, setItems] = useState([
    "Find the idea",
    "Make it useful",
    "Make it feel good",
  ]);
  const [message, setMessage] = useState("What deserves your attention first?");
  function move(item: string, direction: number) {
    const next = [...items];
    const from = next.indexOf(item),
      to = from + direction;
    if (to < 0 || to >= next.length) return;
    [next[from], next[to]] = [next[to], next[from]];
    setItems(next);
    setMessage(`${item} moved to priority ${to + 1}.`);
  }
  return (
    <div className="snippet sn-priority">
      <div className="sn-top">
        <span>ORDER / A LITTLE INTENTION</span>
        <span>03 things</span>
      </div>
      <div className="sn-priority-heading">
        First things,
        <br />
        <em>first.</em>
      </div>
      <ol className="sn-priority-list">
        {items.map((item, i) => (
          <li key={item} style={{ transform: `translateY(${i * 62}px)` }}>
            <span className="sn-priority-number">0{i + 1}</span>
            <strong>{item}</strong>
            <div>
              <button
                aria-label={`Move ${item} up`}
                aria-disabled={i === 0}
                onClick={() => move(item, -1)}
              >
                ↑
              </button>
              <button
                aria-label={`Move ${item} down`}
                aria-disabled={i === 2}
                onClick={() => move(item, 1)}
              >
                ↓
              </button>
            </div>
          </li>
        ))}
      </ol>
      <div className="sn-bottom" role="status">
        {message}
      </div>
    </div>
  );
}
export function FragmentPreview({ kind }: { kind: string }) {
  switch (kind) {
    case "type":
      return <TypeStudy />;
    case "orbit":
      return <DockStudy />;
    case "switch":
      return <FocusStudy />;
    case "poster":
      return <SaveStudy />;
    case "palette":
      return <PaletteStudy />;
    default:
      return <PriorityStudy />;
  }
}
