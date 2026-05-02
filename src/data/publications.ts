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
    venue: "Data-Smart City Solutions",
    year: 2024,
    type: "Policy / Practice Guide",
    link: "https://datasmart.hks.harvard.edu/sites/g/files/omnuum10826/files/datasmart/files/how-to_guide_for_cities_gis_cdhi.pdf",
    abstract:
      "A spatial analysis framework for cities to identify where environmental exposure, health burden, and community vulnerability converge. Applied to PM2.5 and childhood asthma in Washington, D.C., integrating 40+ datasets across air quality, census, and health systems to support equitable sensor placement decisions."
  },
];
