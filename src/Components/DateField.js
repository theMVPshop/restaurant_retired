
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
        borderBottomColor: 'white'
      },
      '&.MuiInput-underline:before': {
        borderBottomColor: 'white'
      },
      '&.MuiInput-underline:hover:before': {
        borderBottom: '1px solid white'
      },
      '&.MuiFormLabel-root.Mui-focused': {
        color: 'white'
      },
    },
  },
  
}));

const DateField = () => {
  const classes = useStyles();

  return (
    // <form className={classes.container}>
      <TextField
        id="date"
        label="Date"
        type="date"
        defaultValue="2021-07-01"
        className={`${classes.textField} ${classes.root}`}
        InputLabelProps={{
          shrink: true,
        }}
      />
    // </form>
  );
}

export default DateField;