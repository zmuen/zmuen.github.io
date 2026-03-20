export type Project = {
  slug: string;
  title: string;
  date: string;
  category: string;
  description: string;
  image: string;
  alt: string;
};

export const projects: Project[] = [
  {
    slug: "urban-heat-atlas",
    title: "Urban Heat Atlas",
    date: "2025",
    category: "Research Platform",
    description:
      "A comparative map-based archive tracing surface temperature, tree canopy, and neighborhood morphology across the city.",
    image: "/images/project-heat.svg",
    alt: "Abstract map blocks and contour lines suggesting a heat atlas."
  },
  {
    slug: "ground-observatory",
    title: "Ground Observatory",
    date: "2024",
    category: "Fieldwork",
    description:
      "A notebook-driven project combining environmental sensors, photography, and annotated transects to document changing ground conditions.",
    image: "/images/project-ground.svg",
    alt: "Linear analytical drawing evoking fieldwork sections and observations."
  },
  {
    slug: "mobility-notebooks",
    title: "Mobility Notebooks",
    date: "2023",
    category: "Data Essay",
    description:
      "A sequence of long-form essays and diagrams on commuting rhythms, walkability, and the social texture of transit corridors.",
    image: "/images/project-mobility.svg",
    alt: "Diagrammatic urban block grid representing mobility studies."
  }
];
