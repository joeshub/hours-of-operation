import React from 'react';
import classNames from 'classnames';
import { format } from 'date-fns';
import { OPEN, CLOSED, OPEN_24_HOURS } from '../constants';

import './Row.css';

const Row = ({ data }) => {
  const {
    name, date, isOpen, open24Hrs, times,
  } = data;
  const classes = classNames('row-hours-day', {
    'row-hours-special': date,
  });
  return (
    <div className={classes}>
      <div>{date ? format(new Date(date), 'M/d/yy') : name}</div>
      {!isOpen && <div>{CLOSED}</div>}
      {isOpen && open24Hrs && (
      <div>
        {OPEN}
        {' '}
        {OPEN_24_HOURS}
      </div>
      )}
      {isOpen && !open24Hrs && times.map((t) => {
        if (!t.open || !t.close) return <div key={`${t.open}-${t.close}`} />;
        return (
          <div key={`${t.open}-${t.close}`} className="row-hours-time">
            {t.open}
            &ndash;
            {t.close}
          </div>
        );
      })}
    </div>
  );
};

export default Row;
