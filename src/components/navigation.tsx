import type { CSSProperties } from "react";

function NavLabel({ text }: { text: string }) {
  return (
    <span className="nav-label" data-label={text} aria-hidden="true">
      <span className="nav-letters">
        {Array.from(text).map((letter, index) => (
          <span key={index} style={{ "--letter-index": index } as CSSProperties}>
            {letter}
          </span>
        ))}
      </span>
    </span>
  );
}

export function Navigation() {
  return (
    <nav className="navigation" aria-label="Main navigation">
      <a href="#" className="nav-name">
        LOHIT<span>®</span>
      </a>
      <div>
        {[["Work", "#work"], ["Fragments", "#fragments"], ["About", "#about"]].map(([label, href]) => (
          <a key={href} href={href} className="nav-text-link" aria-label={label}>
            <NavLabel text={label} />
          </a>
        ))}
        <a href="#contact" className="nav-cta">
          <span>Let’s talk</span>
          <span className="nav-cta-arrow" aria-hidden="true"><span>↗</span><span>↗</span></span>
        </a>
      </div>
    </nav>
  );
}
