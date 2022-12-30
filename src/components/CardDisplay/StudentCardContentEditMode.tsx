import {
  CardActions,
  Button,
  CardContent,
  TextField,
  MenuItem,
  Select,
} from '@mui/material';
import { useContext, useState } from 'react';
import UserActionContext from '../../context/UserActionContext';
import { Student } from '../../types';

const generalStatus = [
  {
    value: 'ABSENT',
    label: 'Absent',
  },
  {
    value: 'PRESENT',
    label: 'Présent',
  },
  {
    value: 'REMOTE',
    label: 'Télétravail',
  },
];

const womanStatus = [
  {
    value: 'ABSENT',
    label: 'Absente',
  },
  {
    value: 'PRESENT',
    label: 'Présente',
  },
  {
    value: 'REMOTE',
    label: 'Télétravail',
  },
];

type StudentCardContentEditModeProps = {
  person: Student;
  cancelModification: () => void;
  validModification: () => void;
};

const StudentCardContentEditMode = ({
  person,
  cancelModification,
  validModification,
}: StudentCardContentEditModeProps) => {
  const { saveModifications } = useContext(UserActionContext);

  const [name, setName] = useState<string>(person.name);
  const [lastName, setLastName] = useState<string>(person.lastName);
  const [status, setStatus] = useState<'PRESENT' | 'REMOTE' | 'ABSENT'>(
    person.status
  );

  const handleChangeStatus = (val: string) => {
    switch (val) {
      case 'ABSENT':
        setStatus('ABSENT');
        break;
      case 'REMOTE':
        setStatus('REMOTE');
        break;
      default:
        setStatus('PRESENT');
    }
  };

  const handleValidation = () => {
    const modifiedPerson = {
      ...person,
      name: name,
      lastName: lastName,
      status: status,
    };

    saveModifications(modifiedPerson);
    validModification();
  };

  return (
    <>
      <CardContent
        sx={{
          display: 'flex',
          flexDirection: 'column',
          padding: '16px 16px 0px 16px',
        }}
      >
        <TextField
          label="Prénom"
          value={name}
          size="small"
          margin="dense"
          onChange={(event) => setName(event.target.value)}
          required
        />
        <TextField
          label="Nom"
          value={lastName}
          size="small"
          margin="dense"
          onChange={(event) => setLastName(event.target.value)}
          required
        />
        <Select
          label="Status"
          value={status}
          size="small"
          margin="dense"
          onChange={(event) => handleChangeStatus(event.target.value)}
        >
          {person.gender === 'WOMAN'
            ? womanStatus.map((el) => (
                <MenuItem key={el.value} value={el.value}>
                  {el.label}
                </MenuItem>
              ))
            : generalStatus.map((el) => (
                <MenuItem key={el.value} value={el.value}>
                  {el.label}
                </MenuItem>
              ))}
        </Select>
      </CardContent>
      <CardActions
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
        }}
      >
        <Button size="small" onClick={cancelModification}>
          Annuler
        </Button>
        <Button size="small" onClick={handleValidation}>
          Valider
        </Button>
      </CardActions>
    </>
  );
};

export default StudentCardContentEditMode;
