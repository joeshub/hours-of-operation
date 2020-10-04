// Theme information
// https://theme-designer.grommet.io/Document
// https://github.com/grommet/grommet/tree/master/src/js/all/stories

export default {
  name: 'joe',
  rounding: 0,
  spacing: 16,
  defaultMode: 'light',
  global: {
    colors: {
      brand: {
        dark: '#1d4b82',
        light: '#1c4cdf',
      },
      'accent-1': 'black',
      focus: '#88888870',
      background: {
        dark: '#111111',
        light: '#FFFFFF',
      },
      'background-back': {
        dark: '#111111',
        light: '#EEEEEE',
      },
      'background-front': {
        dark: '#222222',
        light: '#FFFFFF',
      },
      'background-contrast': {
        dark: '#FFFFFF11',
        light: '#11111111',
      },
      text: {
        dark: '#EEEEEE',
        light: '#333333',
      },
      'text-strong': {
        dark: '#FFFFFF',
        light: '#000000',
      },
      'text-weak': {
        dark: '#CCCCCC',
        light: '#444444',
      },
      'text-xweak': {
        dark: '#999999',
        light: '#666666',
      },
      border: {
        dark: '#444444',
        light: '#CCCCCC',
      },
      control: 'brand',
      'active-background': 'background-contrast',
      'active-text': 'text-strong',
      'selected-background': 'brand',
      'selected-text': 'text-strong',
      'status-critical': '#FF4040',
      'status-warning': '#FFAA15',
      'status-ok': '#00C781',
      'status-unknown': '#CCCCCC',
      'status-disabled': '#CCCCCC',
      'graph-0': 'brand',
      'graph-1': 'status-warning',
    },
    font: {
      family: 'Helvetica',
      size: '12px',
      height: '16px',
      maxWidth: '192px',
    },
    active: {
      background: 'active-background',
      color: 'active-text',
    },
    hover: {
      background: 'active-background',
      color: 'active-text',
    },
    selected: {
      background: 'selected-background',
      color: 'selected-text',
    },
    control: {
      border: {
        radius: '0px',
      },
    },
    drop: {
      border: {
        radius: '0px',
      },
    },
    borderSize: {
      xsmall: '1px',
      small: '2px',
      medium: '3px',
      large: '8px',
      xlarge: '16px',
    },
    breakpoints: {
      small: {
        value: 512,
        borderSize: {
          xsmall: '1px',
          small: '2px',
          medium: '3px',
          large: '4px',
          xlarge: '8px',
        },
        edgeSize: {
          none: '0px',
          hair: '1px',
          xxsmall: '2px',
          xsmall: '2px',
          small: '4px',
          medium: '8px',
          large: '16px',
          xlarge: '32px',
        },
        size: {
          xxsmall: '16px',
          xsmall: '32px',
          small: '64px',
          medium: '128px',
          large: '256px',
          xlarge: '512px',
          full: '100%',
        },
      },
      medium: {
        value: 1024,
      },
      large: {},
    },
    edgeSize: {
      none: '0px',
      hair: '1px',
      xxsmall: '2px',
      xsmall: '4px',
      small: '8px',
      medium: '16px',
      large: '32px',
      xlarge: '64px',
      responsiveBreakpoint: 'small',
    },
    input: {
      padding: '8px',
      weight: 600,
    },
    spacing: '16px',
    size: {
      xxsmall: '32px',
      xsmall: '64px',
      small: '128px',
      medium: '256px',
      large: '512px',
      xlarge: '768px',
      xxlarge: '1024px',
      full: '100%',
    },
  },
  chart: {},
  diagram: {
    line: {},
  },
  meter: {},
  button: {
    border: {
      width: '0',
      radius: '0',
    },
    padding: {
      vertical: '2px',
      horizontal: '14px',
    },
  },
  checkBox: {
    check: {
      radius: '0px',
    },
    toggle: {
      radius: '16px',
      size: '32px',
    },
    size: '16px',
  },
  radioButton: {
    size: '16px',
  },
  formField: {
    border: {
      color: 'border',
      error: {
        color: {
          dark: 'white',
          light: 'status-critical',
        },
      },
      position: 'outer',
      side: 'bottom',
      style: 'solid',
      size: 'xsmall',
    },
    content: {
      pad: 'small',
    },
    disabled: {
      background: {
        color: 'status-disabled',
        opacity: 'medium',
      },
    },
    error: {
      color: 'status-critical',
      margin: {
        vertical: 'xsmall',
        horizontal: 'small',
      },
    },
    help: {
      color: 'dark-3',
      margin: {
        start: 'small',
      },
    },
    info: {
      color: 'text-xweak',
      margin: {
        vertical: 'xsmall',
        horizontal: 'small',
      },
    },
    label: {
      margin: {
        vertical: 'xsmall',
        horizontal: 'small',
      },
      size: 'small',
      weight: 'normal',
    },
    margin: {
      bottom: 'small',
    },
    round: '0px',
  },
  layer: {
    background: {
      dark: '#111111',
      light: '#FFFFFF',
    },
  },
  calendar: {
    small: {
      fontSize: '11.466666666666667px',
      lineHeight: 1.375,
      daySize: '18.29px',
    },
    medium: {
      fontSize: '12px',
      lineHeight: 1.45,
      daySize: '36.57px',
    },
    large: {
      fontSize: '13.6px',
      lineHeight: 1.11,
      daySize: '73.14px',
    },
  },
  clock: {
    analog: {
      hour: {
        width: '5px',
        size: '16px',
      },
      minute: {
        width: '3px',
        size: '8px',
      },
      second: {
        width: '2px',
        size: '6px',
      },
      size: {
        small: '48px',
        medium: '64px',
        large: '96px',
        xlarge: '144px',
        huge: '192px',
      },
    },
    digital: {
      text: {
        xsmall: {
          size: '10.933333333333334px',
          height: 1.5,
        },
        small: {
          size: '11.466666666666667px',
          height: 1.43,
        },
        medium: {
          size: '12px',
          height: 1.375,
        },
        large: {
          size: '12.533333333333333px',
          height: 1.167,
        },
        xlarge: {
          size: '13.066666666666666px',
          height: 1.1875,
        },
        xxlarge: {
          size: '14.133333333333333px',
          height: 1.125,
        },
      },
    },
  },
  heading: {
    level: {
      1: {
        small: {
          size: '14px',
          height: '18px',
          maxWidth: '226px',
        },
        medium: {
          size: '16px',
          height: '20px',
          maxWidth: '260px',
        },
        large: {
          size: '21px',
          height: '25px',
          maxWidth: '329px',
        },
        xlarge: {
          size: '25px',
          height: '29px',
          maxWidth: '397px',
        },
      },
      2: {
        small: {
          size: '14px',
          height: '18px',
          maxWidth: '218px',
        },
        medium: {
          size: '15px',
          height: '19px',
          maxWidth: '243px',
        },
        large: {
          size: '17px',
          height: '21px',
          maxWidth: '269px',
        },
        xlarge: {
          size: '18px',
          height: '22px',
          maxWidth: '294px',
        },
      },
      3: {
        small: {
          size: '13px',
          height: '17px',
          maxWidth: '209px',
        },
        medium: {
          size: '14px',
          height: '18px',
          maxWidth: '226px',
        },
        large: {
          size: '15px',
          height: '19px',
          maxWidth: '243px',
        },
        xlarge: {
          size: '16px',
          height: '20px',
          maxWidth: '260px',
        },
      },
      4: {
        small: {
          size: '13px',
          height: '17px',
          maxWidth: '201px',
        },
        medium: {
          size: '13px',
          height: '17px',
          maxWidth: '209px',
        },
        large: {
          size: '14px',
          height: '18px',
          maxWidth: '218px',
        },
        xlarge: {
          size: '14px',
          height: '18px',
          maxWidth: '226px',
        },
      },
      5: {
        small: {
          size: '12px',
          height: '16px',
          maxWidth: '188px',
        },
        medium: {
          size: '12px',
          height: '16px',
          maxWidth: '188px',
        },
        large: {
          size: '12px',
          height: '16px',
          maxWidth: '188px',
        },
        xlarge: {
          size: '12px',
          height: '16px',
          maxWidth: '188px',
        },
      },
      6: {
        small: {
          size: '11px',
          height: '15px',
          maxWidth: '183px',
        },
        medium: {
          size: '11px',
          height: '15px',
          maxWidth: '183px',
        },
        large: {
          size: '11px',
          height: '15px',
          maxWidth: '183px',
        },
        xlarge: {
          size: '11px',
          height: '15px',
          maxWidth: '183px',
        },
      },
    },
  },
  paragraph: {
    small: {
      size: '12px',
      height: '16px',
      maxWidth: '188px',
    },
    medium: {
      size: '12px',
      height: '16px',
      maxWidth: '192px',
    },
    large: {
      size: '13px',
      height: '17px',
      maxWidth: '201px',
    },
    xlarge: {
      size: '13px',
      height: '17px',
      maxWidth: '209px',
    },
    xxlarge: {
      size: '14px',
      height: '18px',
      maxWidth: '226px',
    },
  },
  text: {
    xsmall: {
      size: '11px',
      height: '15px',
      maxWidth: '183px',
    },
    small: {
      size: '12px',
      height: '16px',
      maxWidth: '188px',
    },
    medium: {
      size: '12px',
      height: '16px',
      maxWidth: '192px',
    },
    large: {
      size: '13px',
      height: '17px',
      maxWidth: '201px',
    },
    xlarge: {
      size: '13px',
      height: '17px',
      maxWidth: '209px',
    },
    xxlarge: {
      size: '14px',
      height: '18px',
      maxWidth: '226px',
    },
  },
  scale: 0.2,
};
