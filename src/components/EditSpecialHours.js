import React, { useContext } from 'react';
import {
  CheckBox, DateInput, Select, Button, Box,
} from 'grommet';
import { FormClose } from 'grommet-icons';
import { Context } from '../useStore';
import { OPEN, CLOSED } from '../constants';

import './EditHours.css';

const EditSpecialHours = () => {
  const {
    specialHours,
    toggleDayIsOpen,
    setSpecialHourDate,
    setDayTime,
    hourOptions,
    addSpecialHoursRow,
    removeSpecialHoursRow,
  } = useContext(Context);

  const showSpecialHours = specialHours.map((day) => {
    const {
      id, date, isOpen, open24Hrs, times,
    } = day;

    return (
      <div key={id} className="special-hours-day">
        <div className="day-date">
          <DateInput
            format="mm/dd/yyyy"
            value={date}
            calendarProps={{ daysOfWeek: true }}
            onChange={({ value }) => setSpecialHourDate(value, id)}
          />
        </div>
        <div className="day-is-open">
          <CheckBox
            label={isOpen ? OPEN : CLOSED}
            checked={isOpen}
            onChange={() => toggleDayIsOpen(id, 'specialHours')}
          />
        </div>
        {isOpen
        && (
        <>
          <div>
            {times.map((time, timeIndex) => (
              <div key={`${time.open}-${time.close}`}>
                <Select
                  placeholder="Opens at"
                  options={hourOptions}
                  value={time.open}
                  onChange={({ option }) => setDayTime(option, timeIndex, id, 'open', 'specialHours')}
                />
              </div>
            ))}
          </div>
          {!open24Hrs
          && (
          <div>
            {times.map((time, timeIndex) => (
              <div key={`${time.close}-${time.open}`}>
                <Select
                  placeholder="Closes at"
                  options={hourOptions}
                  value={time.close}
                  onChange={({ option }) => setDayTime(option, timeIndex, id, 'close', 'specialHours')}
                />
              </div>
            ))}
          </div>
          )}
        </>
        )}
        <div><Button icon={<FormClose />} onClick={() => removeSpecialHoursRow(id)} /></div>
      </div>
    );
  });

  return (
    <div>
      <Box pad="small">
        <div className="special-hours">
          {showSpecialHours}
        </div>
      </Box>
      <Button margin="small" color="brand" plain onClick={addSpecialHoursRow}>Add new date</Button>
    </div>
  );
};

export default EditSpecialHours;
