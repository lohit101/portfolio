"use client"

import { useEffect, useState } from "react";

const viewers = [
  {
    for: "For Everyone",
    description: "Hello there, I'm a designer & developer who cares about making beautiful things that help people."
  },
  {
    for: "Recruiters",
    description: "I'm a product designer & developer with over 5 years of experience across branding and freelancing, at companies large and small. I'm currently looking for a new role."
  },
  {
    for: "Developers",
    description: "I'm {highly_technical} and while (I'm ≠ perfect dev) I know my way /around & can 'speak' fluently with you; I built (this.site) from scratch."
  },
  {
    for: "Product Designers",
    description: "I'm a systems thinker with a high bar for quality. From process to pixels, I'll collaborate with you, learn from you, and help make something we're proud of."
  },
  {
    for: "Product Managers",
    description: "I bring end-to-end product acumen, from vision and strategy to discovery and delivery. I'll partner closely with you to generate the highest impact possible."
  },
];

export default function Header() {
  const [selectedViewer, setSelectedViewer] = useState<{
    for: string,
    description: string
  } | null>(null);

  useEffect(() => {
    setSelectedViewer(viewers[0]);
  }, [])

  return (
    <header className="flex flex-col mt-20 w-1/2 mx-auto min-h-96">
      <div className="flex gap-5 text-sm">
        {
          viewers.map((viewer, key) => (
            <button key={ key } className={`rounded-md transition-all hover:opacity-80 ${
              selectedViewer?.for === viewer.for ? "opacity-100" : "opacity-20"
            }`} onClick={() => {
              setSelectedViewer(viewer);
            }}>{ viewer.for }</button>
          ))
        }
      </div>
      <h1 className="text-4xl my-10">
        { selectedViewer?.description }
      </h1>
    </header>
  )
}