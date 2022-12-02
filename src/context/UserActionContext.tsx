import { createContext } from "react";
import { Student } from "../types";

type UserActionContextType = {
  saveModifications: (moodifiedPerson: Student) => void;
}

const UserActionContext = createContext<UserActionContextType>({
  saveModifications: () => {}
})

export default UserActionContext;