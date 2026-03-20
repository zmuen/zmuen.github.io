export type Publication = {
  title: string;
  authors: string;
  venue: string;
  year: number;
  type: string;
  link?: string;
  abstract?: string;
};

export const publications: Publication[] = [
  {
    title: "Reading Urban Form Through Environmental Traces",
    authors: "Muenzhang Zhang, A. Rivera",
    venue: "Journal of Spatial Research",
    year: 2025,
    type: "Article",
    link: "#",
    abstract:
      "A study of how air, heat, and mobility data can be read as parallel descriptions of urban structure."
  },
  {
    title: "Topographic Interfaces for Civic Data Narratives",
    authors: "Muenzhang Zhang",
    venue: "Proceedings of the Urban Data Symposium",
    year: 2024,
    type: "Conference Paper",
    link: "#",
    abstract:
      "An exploration of cartographic visual language for public-facing environmental dashboards and archives."
  },
  {
    title: "Field Notes on Infrastructure and Everyday Climate",
    authors: "Muenzhang Zhang, S. Patel, L. Chen",
    venue: "Exhibition Catalog: Ground Conditions",
    year: 2023,
    type: "Catalog Essay",
    link: "#",
    abstract:
      "A reflective essay linking observational fieldwork with environmental sensing in dense metropolitan neighborhoods."
  }
];
