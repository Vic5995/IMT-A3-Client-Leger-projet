import { Grid } from '@mui/material';
import { Student } from '../../types';
import PersonCard from './StudentCard';

type StudentCardListProps = {
  studentList: Student[];
};

const StudentCardList = ({ studentList }: StudentCardListProps) => {
  return (
    <Grid
      container
      spacing={2}
    >
      {studentList.map((el) => (
        <Grid
          item
          key={el.id}
          xs={6}
          sm={4}
          md={3}
        >
          <PersonCard person={el} />
        </Grid>
      ))}
    </Grid>
  );
};

export default StudentCardList;
