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
    title: "Using Spatial Analytics to Address Localized Environmental Harm",
    authors: "N. Kumar, M. Zhang",
    venue: "Journal of Spatial Research",
    year: 2024,
    type: "Policy / Practice Guide",
    link: "https://datasmart.hks.harvard.edu/sites/g/files/omnuum10826/files/datasmart/files/how-to_guide_for_cities_gis_cdhi.pdf",
    abstract:
      "A practical framework for cities to use GIS tools to integrate, analyze, and visualize urban data in order to support evidence-based decision-making and improve public service delivery."
  },
];
