import React, { useContext } from 'react';
import { Header, Box } from 'grommet';
import { getDay } from 'date-fns';
import { Context } from '../useStore';
import Row from './Row';

import './ShowHours.css';

const ShowHoursV2 = () => {
  const { regularHours, specialHours } = useContext(Context);

  const regularHoursContent = regularHours.map((day) => {
    const specialHoursContent = specialHours
      .filter((d) => day.id === getDay(new Date(d.date)))
      .map((special) => (
        <Row key={special.id} data={special} />
      ));
    return (
      <div key={day.id}>
        <Row data={day} />
        {specialHoursContent}
      </div>
    );
  });

  return (
    <div>
      <Header background="#1c4cdf" pad="small">Hours of operation - v2</Header>
      <Box pad="small">
        <div className="show-hours">{regularHoursContent}</div>
      </Box>
    </div>
  );
};

export default ShowHoursV2;
