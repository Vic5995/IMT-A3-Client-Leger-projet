import { Avatar, Box, CardContent, IconButton, Tooltip, Typography } from '@mui/material';
import ModeEditIcon from '@mui/icons-material/ModeEdit';
import { Student } from '../../types';
import StatusChip from '../Common/StatusChip';
import { stringAvatar } from '../../utils';

type StudentCardContentProps = {
  person: Student;
  toggleEditMode: () => void;
};

const StudentCardContent = ({ person, toggleEditMode }: StudentCardContentProps) => {
  return (<>
    <Tooltip title="Modifier">
          <IconButton
            aria-label="edit mode"
            sx={{
              position: 'absolute',
              right: 4,
              top: 4,
            }}
            onClick={toggleEditMode}
          >
            <ModeEditIcon />
          </IconButton>
        </Tooltip>
    <CardContent
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '4px',
      }}
    >
      <Avatar {...stringAvatar(`${person.name} ${person.lastName}`)} />
      <Typography>{person.name}</Typography>
      <Typography sx={{ textTransform: 'uppercase' }}>
        {person.lastName}
      </Typography>
      <StatusChip status={person.status} gender={person.gender} />
    </CardContent>
    </>
  );
};

export default StudentCardContent;
