import React, { useState } from 'react';
import {
  Grommet, Box, Header, Button, Layer,
} from 'grommet';
import { Edit, Add, Close } from 'grommet-icons';
import { Provider } from './useStore';
import EditHours from './components/EditHours';
import EditSpecialHours from './components/EditSpecialHours';
import ShowHours from './components/ShowHours';
import ShowHoursV2 from './components/ShowHoursV2';
import theme from './theme';

import './App.css';

function App() {
  const [showEdit, setShowEdit] = useState(false);
  const [showEditSpecial, setShowEditSpecial] = useState(false);
  const toggleEdit = () => setShowEdit((st) => !st);
  const toggleEditSpecial = () => setShowEditSpecial((st) => !st);
  return (
    <Grommet theme={theme}>
      <Provider>
        <Header
          background="#000"
          pad="medium"
          direction="row-responsive"
          justify="start"
        >
          <h3>Hours of Operation project</h3>
          <Button primary icon={<Edit />} label="Edit Hours" onClick={toggleEdit} />
          <Button primary icon={<Add />} label="Edit Special Hours" onClick={toggleEditSpecial} />
        </Header>
        {showEdit
        && (
        <Layer onEsc={toggleEdit} onClickOutside={toggleEdit} full="horizontal" margin="small">
          <Header background="#ddd" pad="small">
            <h3>Edit Regular hours</h3>
            <Button icon={<Close />} onClick={toggleEdit} />
          </Header>
          <div className="edit">
            <EditHours />
          </div>
        </Layer>
        )}
        {showEditSpecial && (
        <Layer onEsc={toggleEditSpecial} onClickOutside={toggleEditSpecial} full="horizontal" margin="small">
          <Header background="#ddd" pad="small">
            <h3>Edit Special hours</h3>
            <Button icon={<Close />} onClick={toggleEditSpecial} />
          </Header>
          <div className="special">
            <EditSpecialHours />
          </div>
        </Layer>
        )}
        <Box>
          <div className="show">
            <ShowHours />
          </div>
          <div className="show">
            <ShowHoursV2 />
          </div>
        </Box>
      </Provider>
    </Grommet>
  );
}

export default App;
