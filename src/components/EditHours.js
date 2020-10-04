import React, { useContext } from 'react';
import { CheckBox, Select, Box } from 'grommet';
import { Context } from '../useStore';
import { OPEN, CLOSED } from '../constants';

import './EditHours.css';

const EditHours = () => {
  const {
    regularHours, toggleDayIsOpen, setDayTime, hourOptions,
  } = useContext(Context);

  const editHours = regularHours.map((day) => {
    const {
      id, name, isOpen, open24Hrs, times,
    } = day;

    return (
      <div key={id} className="edit-hours-day">
        <div className="day-name">{name}</div>
        <div className="day-is-open">
          <CheckBox
            label={isOpen ? OPEN : CLOSED}
            checked={isOpen}
            onChange={() => toggleDayIsOpen(id, 'regularHours')}
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
                  onChange={({ option }) => setDayTime(option, timeIndex, id, 'open', 'regularHours')}
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
                  onChange={({ option }) => setDayTime(option, timeIndex, id, 'close', 'regularHours')}
                />
              </div>
            ))}
          </div>
          )}
        </>
        )}
        <div />
      </div>
    );
  });

  return (
    <div>
      <Box pad="small">
        <div className="edit-hours">{editHours}</div>
      </Box>
    </div>
  );
};

export default EditHours;
