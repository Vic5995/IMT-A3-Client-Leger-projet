import { Chip } from '@mui/material';

type StatusChipProps = {
  status: 'PRESENT' | 'REMOTE' | 'ABSENT';
  gender: 'WOMAN' | 'MAN' | 'NB';
};

const StatusChip = ({ status, gender }: StatusChipProps) => {
  if (status === 'ABSENT') {
    return (
      <Chip label={gender === 'WOMAN' ? 'Absente' : 'Absent'} color="error" />
    );
  }

  if (status === 'REMOTE') {
    return <Chip label="Télétravail" color="warning" />;
  }

  return (
    <Chip label={gender === 'WOMAN' ? 'Présente' : 'Présent'} color="success" />
  );
};

export default StatusChip;
