export type Project = {
  slug: string;
  title: string;
  date: string;
  category: string;
  description: string;
  link?: string;
  image: string;
};

export const projects: Project[] = [
  {
    slug: "systems-and-learning-notebook",
    title: "Systems and Learning Notebook",
    date: "2025",
    category: "Notebook Repo",
    description:
      "A note repo about complex systems, focusing on urban science research methodologies",
    link: "https://zmuen.github.io/systems-and-learning-notebook/",
    image: "/images/project-heat.svg"
  },
  {
    slug: "ground-observatory",
    title: "Ground Observatory",
    date: "2024",
    category: "Fieldwork",
    description:
      "A notebook-driven project combining environmental sensors, photography, and annotated transects to document changing ground conditions.",
    link: "",
    image: "/images/project-ground.svg"
  },
  {
    slug: "mobility-notebooks",
    title: "Mobility Notebooks",
    date: "2023",
    category: "Data Essay",
    description:
      "A sequence of long-form essays and diagrams on commuting rhythms, walkability, and the social texture of transit corridors.",
    link: "",
    image: "/images/project-mobility.svg"
  }
];
