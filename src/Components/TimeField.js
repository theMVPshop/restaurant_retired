import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      color: 'white',
      padding: '5px',
      fontSize: '13px',
      width: '185px',
     
      '&.MuiInput-underline:after': {
        borderBottomColor: 'white',
      },
      '&.MuiInput-underline:before': {
        borderBottomColor: 'white',
      },
      "&.MuiInput-underline:hover:before": {
        borderBottom: '1px solid white'
      },
      '&.MuiFormLabel-root.Mui-focused': {
        color: 'white'
      },
    },
  },
}));

const TimeField = () => {
  const classes = useStyles();

  return (
    // <form className={classes.container} noValidate>
      <TextField
        id="time"
        label="TIME*"
        type="time"
        defaultValue="19:00"
        className={`${classes.textField} ${classes.root}`}
        // InputLabelProps={{
        //   shrink: true,
        // }}
        // inputProps={{
        //   step: 300, // 5 min
        // }}
      />
    // </form>
  );
}

export default TimeField;