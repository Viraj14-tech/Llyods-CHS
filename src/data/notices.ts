export interface Notice {
  id: string;
  title: string;
  category: string;
  date: string;
  day: string;
  monthYear: string;
}

export const noticesData: Notice[] = [
  {
    id: "1",
    title: "[Notice Title 1]",
    category: "[Category]",
    date: "2026-08-12",
    day: "12",
    monthYear: "AUG 2026",
  },
  {
    id: "2",
    title: "[Notice Title 2]",
    category: "[Category]",
    date: "2026-08-08",
    day: "08",
    monthYear: "AUG 2026",
  },
  {
    id: "3",
    title: "[Notice Title 3]",
    category: "[Category]",
    date: "2026-08-01",
    day: "01",
    monthYear: "AUG 2026",
  }
];
