export const profile = {
  name: "Lohit",
  company: "",
  email: "",
  companyUrl: "",
};
export const projects = [
  {
    id: "opencorp",
    href: "https://github.com/lohit101/opencorp",
    linkLabel: "View source",
    accent: "#a3ed00",
    name: "OpenCorp",
    category: "AI agents / Web app",
    description:
      "A company of AI agents, working together. Organize a team, delegate tasks, and follow their conversations in one visual workspace.",
    type: "AI workspace",
    year: "2026",
  },
  {
    id: "cryptowall",
    name: "CryptoWall",
    category: "Crypto payments / Web app",
    description:
      "A crypto payment gateway for vendors. Create payment links, connect a wallet at checkout, and manage assets and withdrawals from one dashboard.",
    type: "Payment gateway",
    year: "2024",
    href: "https://github.com/lohit101/crypto-payment-gateway/tree/idx",
    linkLabel: "View source",
    accent: "#31c995",
  },
  {
    id: "amazon",
    name: "Amazon — Reimagined",
    category: "Brand identity / Rebrand concept",
    description:
      "An independent rebrand concept exploring a new expression of Amazon. A geometric wordmark, a refined smile, and a compact symbol form one connected identity.",
    type: "Brand identity concept",
    year: "2022",
    href: "https://www.behance.net/gallery/156197543/Amazon-Brand-Identity-Redesign-(Rebranding)",
    linkLabel: "View case study",
    accent: "#ff9e2b",
  },
] as const;
export const fragments = [
  {
    id: "type",
    title: "A type of feeling",
    category: "Variable typography / Live controls",
    description:
      "Adjust weight and spacing to feel how tiny typographic decisions change a voice.",
  },
  {
    id: "orbit",
    title: "Know where you are",
    category: "Navigation / Spatial feedback",
    description:
      "A compact dock with a sliding selection and a responsive composition. Try the arrow keys, too.",
  },
  {
    id: "switch",
    title: "Small switch. Big feeling.",
    category: "Settings / State transitions",
    description:
      "A focus switch that makes its effect visible. Clear feedback, before and after.",
  },
  {
    id: "poster",
    title: "Consider it kept",
    category: "Microinteraction / Undo",
    description:
      "A save action with a pending state, confirmation, and a way back. A local demo; nothing is sent or stored permanently.",
  },
  {
    id: "palette",
    title: "Feeling, with function",
    category: "Color systems / Accessibility",
    description:
      "Three palettes with contrast ratios calculated from their actual colors. A little taste, backed by a little math.",
  },
  {
    id: "time",
    title: "First things first",
    category: "Interaction / Accessible reordering",
    description:
      "Rearrange priorities with touch or keyboard. The list moves with you and announces every change.",
  },
] as const;
export type Fragment = (typeof fragments)[number];
