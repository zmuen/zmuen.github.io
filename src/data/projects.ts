export type Project = {
  slug: string;
  title: string;
  date: string;
  category: string;
  description: string;
  link?: string;
  image: string;
  collaborators?: string[];
};

export const projects: Project[] = [
  {
    slug: "zillow-hopes",
    title: "Zillow Hopes",
    date: "2025",
    category: "Interactive Data Visualization",
    description:
      "An interactive experience exploring the challenge of finding affordable housing on a below-median income. Play as a homebuyer navigating a constrained market, then examine how investor activity shapes housing availability in your municipality and weigh the policy tradeoffs along the way.",
    link: "https://hollowvale.vercel.app/",
    image: "/images/project-ground.svg",
    collaborators: ["Audrey Wei", "Nathanael Jenkins", "Ryan Yen"]
  },
  {
    slug: "systems-and-learning-notebook",
    title: "Systems and Learning Notebook",
    date: "2025",
    category: "Notebook",
    description:
      "A research notebook on complex systems, focusing on methods for understanding urban and infrastructure systems.",
    link: "https://zmuen.github.io/systems-and-learning-notebook/",
    image: "/images/project-mobility.svg"
  }
];
