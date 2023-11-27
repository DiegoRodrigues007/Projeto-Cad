import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import styles from '../Modal/Modal.module.scss'
const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 500,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

export default function BasicModal() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Button onClick={handleOpen}>Chave Pix</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style} >
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Chave Pix
          </Typography>
          <Typography className={styles.text}  id="modal-modal-description" sx={{ mt: 2 }}>
          <spa>00020126360014br.gov.bcb.pix01143989276900010
            55204000053039865802BR5925ASSOCIACAO
             CRESCER APREND6012PORTO ALEGRE622605223e
             6uPlgHsoOk6vMRJOdLcE6304A99C</spa>
          </Typography>
        </Box>
      </Modal>
    </div>
  );
}