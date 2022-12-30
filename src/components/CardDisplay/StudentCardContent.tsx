import {
  Avatar,
  Box,
  CardContent,
  IconButton,
  Tooltip,
  Typography,
} from '@mui/material';
import ModeEditIcon from '@mui/icons-material/ModeEdit';
import { Student } from '../../types';
import StatusChip from '../Common/StatusChip';
import { stringAvatar } from '../../utils';

type StudentCardContentProps = {
  person: Student;
  toggleEditMode: () => void;
  otherCardInEditMode: boolean;
};

const StudentCardContent = ({
  person,
  toggleEditMode,
  otherCardInEditMode,
}: StudentCardContentProps) => {
  return (
    <>
      <Tooltip title="Modifier">
        <IconButton
          aria-label="edit mode"
          sx={{
            position: 'absolute',
            right: 4,
            top: 4,
            zIndex: 20,
          }}
          onClick={toggleEditMode}
          disabled={otherCardInEditMode}
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
          position: 'relative',
        }}
      >
        {otherCardInEditMode && (
          <Box
            sx={{
              position: 'absolute',
              width: '100%',
              height: '100%',
              top: 0,
              backgroundColor: '#6464647F',
              zIndex: 10,
            }}
          />
        )}
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
