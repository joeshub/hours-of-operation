import React, { useContext } from 'react';
import { Header, Box } from 'grommet';
import { Context } from '../useStore';
import Row from './Row';

import './ShowHours.css';

const ShowHours = () => {
  const { regularHours, specialHours } = useContext(Context);
  const regularHoursContent = regularHours.map((day) => <Row key={day.id} data={day} />);
  const specialHoursContent = specialHours.map((day) => <Row key={day.id} data={day} />);

  return (
    <div>
      <Header background="brand" pad="small">Hours of operation - v1</Header>
      <Box pad="small">
        <div className="show-hours">{regularHoursContent}</div>
      </Box>
      {specialHours.length > 0 && (
        <>
          <Header background="#d1d1d1" pad="small">Special hours</Header>
          <Box pad="small">
            <div className="show-hours">{specialHoursContent}</div>
          </Box>
        </>
      )}
    </div>
  );
};

export default ShowHours;
