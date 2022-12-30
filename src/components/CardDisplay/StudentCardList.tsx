import { ClickAwayListener, Grid } from '@mui/material';
import { useState } from 'react';
import { Student } from '../../types';
import ModificationAlertDialog from '../Common/ModificationAlertDialog';
import PersonCard from './StudentCard';

type StudentCardListProps = {
  studentList: Student[];
};

const StudentCardList = ({ studentList }: StudentCardListProps) => {
  const [selectedCard, setSelectedCard] = useState<number>(-1);
  const [openModifAlertDialog, setOpenModifAlertDialog] =
    useState<boolean>(false);

  // TODO:
  // 1 - créer token
  // 2 - dialog alert
  // 3 - demander confirmation annulation avant de switcher
  // 4 - griser les non utilisées

  const handleSelectedCard = (index: number) => {
    if (selectedCard !== -1 && index !== -1) {
      setOpenModifAlertDialog(true);
    } else {
      setSelectedCard(index);
    }
  };

  const handleDialogCancel = () => {
    setOpenModifAlertDialog(false);
  };

  const handleDialogSave = () => {
    setOpenModifAlertDialog(true);
  };

  return (
    <>
      <ModificationAlertDialog
        open={openModifAlertDialog}
        setOpen={setOpenModifAlertDialog}
        handleCancel={handleDialogCancel}
        handleSave={handleDialogSave}
      />
      <Grid container spacing={2} alignItems="center">
        {studentList.map((el) => (
          <Grid item key={el.id} xs={6} sm={4} md={3}>
            <PersonCard
              person={el}
              handleSelectedCard={(isEdit: boolean) => {
                isEdit ? handleSelectedCard(el.id) : handleSelectedCard(-1);
              }}
              otherCardInEditMode={selectedCard !== -1}
              isEditMode={el.id === selectedCard}
            />
          </Grid>
        ))}
      </Grid>
    </>
  );
};

export default StudentCardList;
