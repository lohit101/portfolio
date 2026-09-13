"use client";
import { useEffect, useRef, useState } from "react";
import { fragments, type Fragment } from "@/lib/content";
import { FragmentPreview } from "./fragment-snippets";
import { ScrollSmoother } from "gsap/ScrollSmoother";
export function Fragments() {
  const [selected, setSelected] = useState<Fragment | null>(null);
  const dialog = useRef<HTMLDialogElement>(null);
  const opener = useRef<HTMLButtonElement | null>(null);
  useEffect(() => {
    if (!selected) return;
    const smoother = ScrollSmoother.get();
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    smoother?.paused(true);
    dialog.current?.showModal();
    return () => {
      document.body.style.overflow = previousOverflow;
      smoother?.paused(false);
    };
  }, [selected]);
  function close() {
    dialog.current?.close();
  }
  return (
    <>
      <div className="fragments-grid">
        {fragments.map((f, i) => (
          <article key={f.id} className={`fragment fragment-${i}`} data-reveal>
            <FragmentPreview kind={f.id} />
            <button
              className="fragment-caption"
              onClick={(e) => {
                opener.current = e.currentTarget;
                setSelected(f);
              }}
            >
              <span>
                <strong>{f.title}</strong>
                <small>{f.category}</small>
              </span>
              <span aria-hidden="true">↗</span>
            </button>
          </article>
        ))}
      </div>
      <dialog
        ref={dialog}
        className="fragment-dialog"
        onClose={() => {
          setSelected(null);
          opener.current?.focus({ preventScroll: true });
        }}
        onClick={(e) => {
          if (e.target === e.currentTarget) close();
        }}
        aria-labelledby="fragment-title"
      >
        <div className="dialog-inner">
          <button
            className="dialog-close"
            onClick={close}
            aria-label="Close preview"
          >
            ✕
          </button>
          {selected && (
            <>
              <FragmentPreview key={selected.id} kind={selected.id} />
              <h3 id="fragment-title">{selected.title}</h3>
              <p>{selected.description}</p>
              <span className="mono">INTERACTIVE CONCEPT</span>
            </>
          )}
        </div>
      </dialog>
    </>
  );
}
