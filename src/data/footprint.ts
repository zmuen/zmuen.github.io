// src/data/footprint.ts
// Places shown as blue points on the homepage map.
// lat/lng in decimal degrees (north / east positive).
// Hover tooltip shows `name` on the first line and `detail` on the second.

export type FootprintKind = "home" | "education" | "conference";

export interface FootprintPlace {
  name: string;
  city: string;
  lat: number;
  lng: number;
  kind: FootprintKind;
  detail?: string; // short second line in the tooltip; falls back to city
}

export const footprint: FootprintPlace[] = [
  {
    name: "Zhanjiang, China",
    city: "Zhanjiang, Guangdong, China",
    lat: 21.271,
    lng: 110.359,
    kind: "home",
    detail: "Hometown"
  },
  {
    name: "Karlsruhe Institute of Technology",
    city: "Karlsruhe, Germany",
    lat: 49.01,
    lng: 8.413,
    kind: "education",
    detail: "B.Sc. Architecture"
  },
  {
    name: "Harvard University",
    city: "Cambridge, MA",
    lat: 42.377,
    lng: -71.117,
    kind: "education",
    detail: "MLA"
  },
  {
    name: "Georgia Institute of Technology",
    city: "Atlanta, GA",
    lat: 33.776,
    lng: -84.398,
    kind: "education",
    detail: "M.Sc. CS"
  },
  {
    name: "NeurIPS 2026",
    city: "Sydney, Australia",
    lat: -33.8688,
    lng: 151.2093,
    kind: "conference",
    detail: "Sydney, workshop paper"
  }
];
