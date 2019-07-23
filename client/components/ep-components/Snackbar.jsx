import React from 'react';
import Snackbar from '@material-ui/core/Snackbar';
import SnackbarContent from '@material-ui/core/SnackbarContent';
import { makeStyles } from '@material-ui/core';

const useStyles1 = makeStyles(theme => ({
  success: {
    backgroundColor: 'green',
  },
  error: {
    backgroundColor: theme.palette.error.dark,
  },
  message: {
    display: 'flex',
    alignItems: 'center',
  },
}));

const MySnackbar = (
  {
    requestCallData,
    snackbarVisible,
    closeSnackbar,
  },
) => {
  const classes1 = useStyles1();

  const handleCloseSnackbar = () => {
    closeSnackbar();
  };

  return (
    <Snackbar
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'center',
      }}
      open={snackbarVisible}
      onClose={handleCloseSnackbar}
      autoHideDuration={4000}
    >
      <SnackbarContent
        className={requestCallData.state === 'success' ? classes1.success : classes1.error}
        message={
          <span id="message-id">{requestCallData.state === 'success' ? 'Заявка отправлена' : 'Не удалось отправить заявку'}</span>
        }
      />
    </Snackbar>
  );
};

export default MySnackbar;
