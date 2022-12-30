import { Card } from '@mui/material';
import { Student } from '../../types';
import { useState } from 'react';
import StudentCardContent from './StudentCardContent';
import StudentCardContentEditMode from './StudentCardContentEditMode';

type StudentCardProps = {
  person: Student;
  isEditMode: boolean;
  otherCardInEditMode: boolean;
  handleSelectedCard: (isEdit: boolean) => void;
};

const StudentCard = ({
  person,
  handleSelectedCard,
  isEditMode,
  otherCardInEditMode
}: StudentCardProps) => {

  return (
    <Card
      sx={{
        position: 'relative',
        borderRadius: '20px',
      }}
      raised={isEditMode}
    >
      {!isEditMode ? (
        <StudentCardContent
          person={person}
          toggleEditMode={() => {
            handleSelectedCard(true);
          }}
          otherCardInEditMode={otherCardInEditMode}
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
