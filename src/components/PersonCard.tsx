import { Card, CardContent, Typography } from "@mui/material"
import { Person } from "../types";

type PersonCardProps = {
  person: Person
}

const PersonCard = ({person}: PersonCardProps) => {
  return <Card>
    <CardContent>
      <Typography>
        {person.name} {person.lastName}
      </Typography>
      <Typography>
        {person.status}
      </Typography>
    </CardContent>
  </Card>;
}

export default PersonCard;