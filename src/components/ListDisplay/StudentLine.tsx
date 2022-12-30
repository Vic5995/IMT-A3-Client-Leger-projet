import { Avatar, TableCell, TableRow, Typography } from '@mui/material';
import { Student } from '../../types';
import { stringAvatar } from '../../utils';
import StatusChip from '../Common/StatusChip';

type StudentLineProps = {
  student: Student;
};

const StudentLine = ({ student }: StudentLineProps) => {
  return (
    <TableRow>
      <TableCell align="center">
        <Avatar {...stringAvatar(`${student.name} ${student.lastName}`)} />
      </TableCell>
      <TableCell>
        <Typography>{student.name}</Typography>
      </TableCell>
      <TableCell>
        <Typography sx={{ textTransform: 'uppercase' }}>
          {student.lastName}
        </Typography>
      </TableCell>
      <TableCell>
        <StatusChip status={student.status} gender={student.gender} />
      </TableCell>
    </TableRow>
  );
};

export default StudentLine;
