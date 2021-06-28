import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import styles from './ModalForm.module.css';
import DateField from './DateField';
import TimeField from './TimeField';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      color: 'white',
      padding: '5px',
      "&.Mui-focused": {
        color: 'white',
      },
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
  line: {
    '&::before': {
      borderBottom: '1px solid white'
    }
  }
}));

const ModalForm = () => {

  const classes = useStyles();
  return (
    <div className={styles.container}>
      <h2>TABLE BOOKING</h2>
      <form className={classes.root} noValidate autoComplete="off">
        <TextField className={classes.root} id="standard-basic" label="NAME*" />
        <TextField className={classes.root} id="standard-basic" label="EMAIL*" />
        <TextField className={classes.root} id="standard-basic" label="PHONE*" />
        <DateField />
        <TimeField />
        
        {/* <button className={styles.btn}>BOOK NOW</button> */}
      </form>
      
    </div>
   
  )
};

export default ModalForm;


