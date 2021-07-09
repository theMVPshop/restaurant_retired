import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import styles from './ModalForm.module.css';
import DateField from './DateField';
import TimeField from './TimeField';


const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      fontSize: '13px',
      color: 'white',
      padding: '5px',
      float: 'left',
      width: '185px',
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
  special: {
    '& > *': {
      margin: theme.spacing(1),
      fontSize: '13px',
      color: 'white',
      padding: '5px',
      float: 'left',
      width: '185px',
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

  }
}));

const ModalForm = () => {

  const classes = useStyles();
  return (
    <div className={styles.container}>
      <h2 className={styles['modal-title']}>
      <span className={styles['modal-title-first']}>Table</span>Booking</h2>
      <form>
      <div className={styles['row-1']}>
        <TextField className={classes.root} id="standard-basic" label="NAME*" />
        <TextField className={classes.root} id="standard-basic" label="EMAIL*" />
        <TextField className={classes.root} id="standard-basic" label="PHONE*" />
      </div>
      <div className={styles['row-2']}>
        <TextField className={classes.root} id="standard-basic" label="SEATS*" />
        <DateField className={classes.root} />
        <TimeField className={classes.root} />
      </div>
      <div className={styles['row-3']}>
        <TextField className={classes.special} id="standard-basic" label="SPECIAL NOTES*" />
      </div>
      <div className={styles['row-4']}>
        <button className={styles.btn}>BOOK NOW</button>
      </div>
      </form>
    </div>
   
  )
};

export default ModalForm;


