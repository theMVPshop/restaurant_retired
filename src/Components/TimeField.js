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

const TimeField = () => {
  const classes = useStyles();

  return (
    <form className={classes.container} noValidate>
      <TextField
        id="time"
        label="Alarm clock"
        type="time"
        defaultValue="07:30"
        className={`${classes.textField} ${classes.root}`}
        InputLabelProps={{
          shrink: true,
        }}
        inputProps={{
          step: 300, // 5 min
        }}
      />
    </form>
  );
}

export default TimeField;