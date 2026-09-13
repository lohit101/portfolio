export const profile = {
  name: "Lohit",
  company: "",
  email: "",
  companyUrl: "",
};
export const projects = [
  {
    id: "forma",
    name: "Forma®",
    category: "Brand experience / Development",
    description:
      "A sharper digital home for an independent creative studio. Designed to turn a good first impression into a conversation.",
    type: "Studio website",
    year: "2026",
  },
  {
    id: "relay",
    name: "Relay",
    category: "Product design / Web app",
    description:
      "One calm place for agencies to keep client work moving. A working concept for simpler project handoffs.",
    type: "Agency workspace",
    year: "2026",
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
