import { Chip } from '@mui/material';
import { Gender, Status } from '../../types';

type StatusChipProps = {
  status: Status;
  gender: Gender;
};

const StatusChip = ({ status, gender }: StatusChipProps) => {
  if (status === Status.ABSENT) {
    return (
      <Chip
        label={gender === Gender.WOMAN ? 'Absente' : 'Absent'}
        color="error"
      />
    );
  }

  if (status === Status.REMOTE) {
    return (
      <Chip
        label="Télétravail"
        color="warning"
      />
    );
  }

  return (
    <Chip
      label={gender === Gender.WOMAN ? 'Présente' : 'Présent'}
      color="success"
    />
  );
};

export default StatusChip;
