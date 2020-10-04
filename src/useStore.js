import React, { useReducer, createContext } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { OPEN_24_HOURS, HOUR_OPTIONS } from './constants';

const specialHours = [
];

const regularHours = [
  {
    name: 'Sunday',
    id: 0,
    isOpen: true,
    open24Hrs: false,
    times: [{
      open: '6:00 AM',
      close: '5:00 PM',
    }],
  },
  {
    name: 'Monday',
    id: 1,
    isOpen: true,
    open24Hrs: false,
    times: [{
      open: '7:00 AM',
      close: '8:00 PM',
    }],
  },
  {
    name: 'Tuesday',
    id: 2,
    isOpen: true,
    open24Hrs: false,
    times: [{
      open: '7:00 AM',
      close: '8:00 PM',
    }],
  },
  {
    name: 'Wednesday',
    id: 3,
    isOpen: true,
    open24Hrs: false,
    times: [{
      open: '7:00 AM',
      close: '8:00 PM',
    }],
  },
  {
    name: 'Thursday',
    id: 4,
    isOpen: true,
    open24Hrs: false,
    times: [{
      open: '7:00 AM',
      close: '8:00 PM',
    }],
  },
  {
    name: 'Friday',
    id: 5,
    isOpen: true,
    open24Hrs: true,
    times: [{
      open: OPEN_24_HOURS,
      close: '',
    }],
  },
  {
    name: 'Saturday',
    id: 6,
    isOpen: true,
    open24Hrs: true,
    times: [{
      open: OPEN_24_HOURS,
      close: '',
    }],
  },
];

const initialState = {
  regularHours,
  specialHours,
};

const Context = createContext({
  regularHours: [],
});

const appReducer = (state, action) => {
  switch (action.type) {
    case 'TOGGLE_DAY_IS_OPEN': {
      const { dayId, node } = action.value;
      const nodeValue = state[node];
      const updated = nodeValue.map((day) => {
        if (dayId === day.id) {
          return { ...day, isOpen: !day.isOpen };
        }
        return day;
      });
      return {
        ...state,
        [node]: updated,
      };
    }
    case 'SET_DAY_TIME': {
      const {
        option, timeIndex, dayId, type, node,
      } = action.value;
      const nodeValue = state[node];
      const updated = nodeValue.map((day) => {
        if (dayId === day.id) {
          return {
            ...day,
            times: day.times.map(({ open, close }, i) => {
              if (timeIndex === i) {
                if (option === OPEN_24_HOURS) {
                  return { open: OPEN_24_HOURS, close: undefined };
                }
                if (type === 'open') {
                  return { open: option, close };
                }
                return { open, close: option };
              }
              return { open, close };
            }),
            open24Hrs: option === OPEN_24_HOURS,
          };
        }
        return day;
      });
      return {
        ...state,
        [node]: updated,
      };
    }
    case 'ADD_SPECIAL_HOURS_ROW': {
      const updated = [
        ...state.specialHours,
        {
          id: uuidv4(),
          name: '',
          date: undefined,
          isOpen: true,
          open24Hrs: false,
          times: [{
            open: '',
            close: '',
          }],
        },
      ];

      return {
        ...state,
        specialHours: updated,
      };
    }
    case 'REMOVE_SPECIAL_HOURS_ROW': {
      const updated = state.specialHours.filter((item) => item.id !== action.value);
      return {
        ...state,
        specialHours: updated,
      };
    }
    case 'SET_SPECIAL_DATE_VALUE': {
      const { date, id } = action.value;
      const updated = state.specialHours.map((item) => {
        if (item.id === id) {
          return { ...item, date };
        }
        return item;
      });
      return {
        ...state,
        specialHours: updated,
      };
    }
    default:
      return state;
  }
};

const Provider = ({ children }) => {
  const [state, dispatch] = useReducer(appReducer, initialState);

  const toggleDayIsOpen = (dayId, node) => {
    dispatch({
      type: 'TOGGLE_DAY_IS_OPEN',
      value: { dayId, node },
    });
  };

  const setDayTime = (option, timeIndex, dayId, type, node) => {
    dispatch({
      type: 'SET_DAY_TIME',
      value: {
        option, timeIndex, dayId, type, node,
      },
    });
  };

  const addSpecialHoursRow = () => {
    dispatch({
      type: 'ADD_SPECIAL_HOURS_ROW',
    });
  };

  const removeSpecialHoursRow = (id) => {
    dispatch({
      type: 'REMOVE_SPECIAL_HOURS_ROW',
      value: id,
    });
  };

  const setSpecialHourDate = (date, id) => {
    dispatch({
      type: 'SET_SPECIAL_DATE_VALUE',
      value: { id, date },
    });
  };

  return (
    <Context.Provider value={{
      hourOptions: HOUR_OPTIONS,
      regularHours: state.regularHours,
      specialHours: state.specialHours,
      toggleDayIsOpen,
      setDayTime,
      addSpecialHoursRow,
      removeSpecialHoursRow,
      setSpecialHourDate,
    }}
    >
      {children}
    </Context.Provider>
  );
};

export {
  Provider,
  Context,
};
