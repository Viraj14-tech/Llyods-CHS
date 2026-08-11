export interface DocumentResource {
  id: string;
  title: string;
  category: string;
}

export const documentResources: DocumentResource[] = [
  { id: "d1", title: "AGM Minutes", category: "Meeting Minutes" },
  { id: "d2", title: "SGM Minutes", category: "Meeting Minutes" },
  { id: "d3", title: "Circulars", category: "Notices" },
  { id: "d4", title: "Audit Reports", category: "Financials" },
  { id: "d5", title: "Society Forms", category: "Forms" },
  { id: "d6", title: "Important Documents", category: "General" },
];
