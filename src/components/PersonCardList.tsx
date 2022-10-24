import { Stack } from "@mui/material";
import { Status } from "../types";
import PersonCard from "./PersonCard";

const tmp = [
  { name: "Victoire", lastName: "Lenglart", status: Status.PRESENT },
  { name: "Cynthia", lastName: "Andriamparivony", status: Status.PRESENT },
  { name: "Martin", lastName: "Keyling", status: Status.PRESENT },
  { name: "Romain", lastName: "Barou", status: Status.REMOTE },
]

const CardList = () => {
  return <Stack
    direction="row"
    justifyContent="flex-start"
    alignItems="center"
    spacing={2}
  >
    {tmp.map((el) => <PersonCard person={el} />)}
  </Stack>;
}

export default CardList;