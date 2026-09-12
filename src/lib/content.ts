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
    title: "Type with a pulse",
    category: "Typography",
    description:
      "An oversized typographic study. Hover or focus the letters to stretch the composition.",
  },
  {
    id: "orbit",
    title: "A little out of orbit",
    category: "Interaction",
    description:
      "A circular motion study built with CSS transforms. Press the preview to set it in motion.",
  },
  {
    id: "switch",
    title: "Small switch. Big feeling.",
    category: "Interface",
    description:
      "A tactile toggle exploring how a small interaction can give a product personality.",
  },
  {
    id: "poster",
    title: "Make some noise",
    category: "Art direction",
    description:
      "An expressive poster system using only type, a circle, and a single accent color.",
  },
  {
    id: "palette",
    title: "A different temperature",
    category: "Color study",
    description:
      "An interactive palette study. Select a swatch to change the composition.",
  },
  {
    id: "time",
    title: "Room to breathe",
    category: "Creative development",
    description:
      "A breathing exercise prototype. Start a short loop and follow the expanding circle.",
  },
] as const;
export type Fragment = (typeof fragments)[number];
