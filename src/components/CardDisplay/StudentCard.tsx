import {
  Card,
  CardContent,
  Typography,
  Avatar,
  IconButton,
  Tooltip,
  CardActions,
  Button,
} from '@mui/material';
import { Student } from '../../types';
import StatusChip from '../Common/StatusChip';
import ModeEditIcon from '@mui/icons-material/ModeEdit';
import { useState } from 'react';

const stringToColor = (string: string) => {
  let hash = 0;
  let i;

  for (i = 0; i < string.length; i += 1) {
    hash = string.charCodeAt(i) + ((hash << 5) - hash);
  }

  let color = '#';

  for (i = 0; i < 3; i += 1) {
    const value = (hash >> (i * 8)) & 0xff;
    color += `00${value.toString(16)}`.slice(-2);
  }

  return color;
};

const stringAvatar = (name: string) => {
  return {
    sx: {
      bgcolor: stringToColor(name),
    },
    children: `${name.split(' ')[0][0]}${name.split(' ')[1][0]}`,
  };
};

type StudentCardProps = {
  person: Student;
};

const StudentCard = ({ person }: StudentCardProps) => {
  const [isEditMode, setIsEditMode] = useState<boolean>(false);

  const toggleEditMode = () => {
    setIsEditMode(true);
  };

  return (
    <Card
      sx={{
        position: 'relative',
        borderRadius: '20px',
      }}
    >
      {!isEditMode && (
        <Tooltip title="Modifier">
          <IconButton
            aria-label="edit mode"
            sx={{
              position: 'absolute',
              right: 4,
              top: 4,
            }}
            onClick={() => toggleEditMode()}
          >
            <ModeEditIcon />
          </IconButton>
        </Tooltip>
      )}
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
        <StatusChip
          status={person.status}
          gender={person.gender}
        />
      </CardContent>
      {isEditMode && (
        <CardActions>
          <Button
            size="small"
            onClick={() => setIsEditMode(false)}
          >
            Annuler
          </Button>
          <Button
            size="small"
            onClick={() => setIsEditMode(false)}
          >
            Valider
          </Button>
        </CardActions>
      )}
    </Card>
  );
};

export default StudentCard;
