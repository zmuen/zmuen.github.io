// src/data/publications.ts

export interface Publication {
  title: string;
  authors: string[];
  venue?: string;
  year: number;
  status?: string;
  note?: string;
  link?: string;
  tags: string[];
  abstract?: string;
}

export const publications: Publication[] = [
  {
    title:
      "When Does Load Reflect Structural Centrality? State-Dependent Proxy Validity in Power Systems",

    authors: ["M. Zhang"],

    venue: "",

    year: 2026,

    status: "Manuscript under review",

    tags: [
      "Network Science",
      "Infrastructure Systems",
      "Power Systems",
      "Complex Networks",
    ],

    abstract:
      "This work investigates when locally observable load can serve as a reliable proxy for structural importance in power systems. Using state-dependent functional covariance networks, we show that load-centrality alignment degrades under stress and is governed by coupling concentration."
  },

  {
    title:
      "Using Spatial Analytics to Address Localized Environmental Harm",

    authors: ["N. Kumar", "M. Zhang"],

    venue: "Data-Smart City Solutions",

    year: 2024,

    status: "",

    link:
      "https://datasmart.hks.harvard.edu/sites/g/files/omnuum10826/files/datasmart/files/how-to_guide_for_cities_gis_cdhi.pdf",

    tags: [
      "GIS",
      "Environmental Justice",
      "Urban Analytics",
      "Public Health",
    ],

    abstract:
      "A spatial analysis framework for cities to identify where environmental exposure, health burden, and community vulnerability converge. Applied to PM2.5 and childhood asthma in Washington, D.C., integrating 40+ datasets across air quality, census, and health systems to support equitable sensor placement decisions."
  }
];