import React, { useState } from 'react';
import { 
  Grid,
  makeStyles 
} from '@material-ui/core';
import DateFnsUtils from '@date-io/date-fns';
import { ko } from "date-fns/esm/locale";
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker
} from '@material-ui/pickers';

const useStyles = makeStyles((theme) => ({
  root: {
    marginRight: 10
  },
  datepicker: {
    width: 50
  }
}));

const DatePicker = ({ handleDate, raceDate }) => {

  const classes = useStyles();

  const [selectedDate, setSelectedDate] = useState(raceDate);

  const handleDateChange = (date) => {
    handleDate(date);
    setSelectedDate(date);
  };

  return (
    <MuiPickersUtilsProvider utils={DateFnsUtils} locale={ko}>
      <Grid className={classes.root}>
        <KeyboardDatePicker
          margin="normal"
          id="date-picker-dialog"
          format="MM월 dd일"
          value={selectedDate}
          onChange={handleDateChange}
          className={classes.datepicker}
          invalidDateMessage
          InputProps={{
            disableUnderline: true,
            value: '',
            disabled: true
          }}
          KeyboardButtonProps={{
            color: 'primary'
          }}
        />
      </Grid>
    </MuiPickersUtilsProvider>
  );
};

export default DatePicker;