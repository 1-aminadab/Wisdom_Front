import * as React from 'react';
import Alert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';
import Stack from '@mui/material/Stack';

export default function CheckAlerts({severity, title, message}) {
    // soverity = "warning, info, success, error"
  return (
    <Stack sx={{ width: '100%' }} spacing={2}>
      <Alert severity={severity}>
        <AlertTitle style={{fontSize:"15px"}}>{title}</AlertTitle>
       <strong style={{fontSize:"14px", fontWeight:"600"}}>{message}</strong>
      </Alert>
      
    </Stack>
  );
}

{/* <Alert severity="warning">
        <AlertTitle>Warning</AlertTitle>
        This is a warning alert — <strong>check it out!</strong>
      </Alert>
      <Alert severity="info">
        <AlertTitle>Info</AlertTitle>
        This is an info alert — <strong>check it out!</strong>
      </Alert>
      <Alert severity="success">
        <AlertTitle>Success</AlertTitle>
        This is a success alert — <strong>check it out!</strong>
      </Alert> */}