export interface CommitteeMember {
  id: string;
  role: string;
  name: string;
  isPrimary?: boolean;
}

export const committeeData: CommitteeMember[] = [
  { id: "c1", role: "Hon. Chairman", name: "Dr. Bharati Purker", isPrimary: true },
  { id: "c2", role: "Hon. Secretary", name: "Mr. Ravi P Shah", isPrimary: true },
  { id: "c3", role: "Jt. Hon. Secretary", name: "Mrs. Smita Batra", isPrimary: true },
  { id: "c4", role: "Hon. Treasurer", name: "Mr. Suresh Khairajani", isPrimary: true },
  { id: "c5", role: "Committee Member", name: "Mr. Manoj Modi", isPrimary: false },
  { id: "c6", role: "Committee Member", name: "Mr. Rajesh Poddar", isPrimary: false },
  { id: "c7", role: "Committee Member", name: "Mrs. Gayatri P Pandey", isPrimary: false },
  { id: "c8", role: "Committee Member", name: "Mr. Sourav Mukherjee", isPrimary: false },
  { id: "c9", role: "Committee Member", name: "Mr. Digambar V Deokar", isPrimary: false },
  { id: "c10", role: "Committee Member", name: "Mrs. Sowmya Vencatesan", isPrimary: false },
];
