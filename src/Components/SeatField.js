import React from 'react';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import { makeStyles } from '@material-ui/core/styles';
import classes from './SeatField.module.css';


const Seats = () => {

  return ( 
    <div className={classes.form}>
      <InputLabel className={classes['Customer-Seats']}>Seats</InputLabel>
      <Select
        className={classes.root}
        labelId="Seats"
        id="Seats"
        // value={age}
        // onChange={handleChange}
        >
        <MenuItem value={1}>1</MenuItem>
        <MenuItem value={2}>2</MenuItem>
        <MenuItem value={3}>3</MenuItem>
        <MenuItem value={4}>4</MenuItem>
        <MenuItem value={5}>5</MenuItem>
        <MenuItem value={6}>6</MenuItem>
      </Select>
      </div>
    )
  }

export default Seats;