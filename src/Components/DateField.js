
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      color: 'white',
      padding: '5px',
     
      '&.MuiInput-underline:after': {
        borderBottomColor: 'white',
      },
      '&.MuiInput-underline:before': {
        borderBottomColor: 'white',
      },
      "&.MuiInput-underline:hover:before": {
        borderBottom: '1px solid white'
      },
    },
  },
  
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: 200,
  },
}));

const DateField = () => {
  const classes = useStyles();

  return (
    <form className={classes.container}>
      <TextField
        id="date"
        label="Date"
        type="date"
        defaultValue="2017-05-24"
        className={`${classes.textField} ${classes.root}`}
        InputLabelProps={{
          shrink: true,
        }}
      />
    </form>
  );
}

export default DateField;