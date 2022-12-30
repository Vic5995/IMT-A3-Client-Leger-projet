import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from '@mui/material';
import { Box } from '@mui/system';
import { Student } from '../../types';
import StudentLine from './StudentLine';

type StudentLineListProps = {
  studentList: Student[];
};

const StudentLineList = ({ studentList }: StudentLineListProps) => {
  return (
    <TableContainer
      component={Paper}
      sx={{
        height: '70%',
        overflow: 'scroll',
      }}
    >
      <Table stickyHeader>
        <TableHead>
          <TableRow>
            <TableCell></TableCell>
            <TableCell>Prénom</TableCell>
            <TableCell>Nom</TableCell>
            <TableCell>Statut</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {studentList.map((el) => (
            <StudentLine key={el.id} student={el} />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default StudentLineList;
