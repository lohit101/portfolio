export const profile = {
  name: "Lohit",
  company: "",
  email: "",
  companyUrl: "",
};
export const projects = [
  {
    id: "opencorp",
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
    sourceUrl: "https://github.com/lohit101/crypto-payment-gateway/tree/idx",
  },
  {
    id: "offscript",
    name: "OFFSCRIPT",
    category: "Art direction / Creative development",
    description:
      "An interactive campaign that gives an independent culture festival a voice as loud as its lineup.",
    type: "Digital campaign",
    year: "2026",
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
