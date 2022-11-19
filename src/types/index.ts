export type Student = {
  id: number;
  name: string;
  lastName: string;
  status: Status;
  gender: Gender;
};

export enum Gender {
  WOMAN,
  MAN,
  NB,
}

export enum Status {
  PRESENT,
  REMOTE,
  ABSENT,
}
