export type Person = {
  name: string;
  lastName: string;
  status: Status
}

export enum Status {
  PRESENT = "Présent(e)",
  REMOTE = "Télétravail",
  ABSENT = "Absent(e)"
}