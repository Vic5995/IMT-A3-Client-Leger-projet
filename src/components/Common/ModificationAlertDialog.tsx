import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

type ModificationAlertDialogProps = {
  open: boolean;
  setOpen: (open: boolean) => void;
  handleCancel: () => void;
  handleSave: () => void;
};

const ModificationAlertDialog = ({
  open,
  setOpen,
  handleCancel,
  handleSave
}: ModificationAlertDialogProps) => {

  return (
    <Dialog
      open={open}
      onClose={() => setOpen(false)}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >
      <DialogTitle id="alert-dialog-title">
        {"Modifications en cours"}
      </DialogTitle>
      <DialogContent>
        <DialogContentText id="alert-dialog-description">
          Des modifications sont en cours pour l'étudiant suivant :
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleCancel}>Annuler</Button>
        <Button onClick={handleSave} autoFocus>
          Sauvegarder
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default ModificationAlertDialog;
