import { Card } from '@mui/material';
import { Student } from '../../types';
import { useState } from 'react';
import StudentCardContent from './StudentCardContent';
import StudentCardContentEditMode from './StudentCardContentEditMode';

type StudentCardProps = {
  person: Student;
  isEditMode: boolean;
  handleSelectedCard: (isEdit: boolean) => void;
};

const StudentCard = ({
  person,
  handleSelectedCard,
  isEditMode,
}: StudentCardProps) => {
  //const [isEditMode, setIsEditMode] = useState<boolean>(false);

  return (
    <Card
      sx={{
        position: 'relative',
        borderRadius: '20px',
      }}
    >
      {!isEditMode ? (
        <StudentCardContent
          person={person}
          toggleEditMode={() => {
            handleSelectedCard(true);
            //setIsEditMode(true)
          }}
        />
      ) : (
        <StudentCardContentEditMode
          person={person}
          cancelModification={() => handleSelectedCard(false)}
          validModification={() => {
            handleSelectedCard(false);
          }}
        />
      )}
    </Card>
  );
};

export default StudentCard;
