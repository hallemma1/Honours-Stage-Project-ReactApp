import {useState}from 'react';
import './SliderComp.css';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Slider from '@mui/material/Slider';


export default function SliderComp() {
  const [value, setValue] = useState(30);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const marks = [
    { value: 1950, label: '1950', },
    { value: 1955, label: '1955', },
    { value: 1960, label: '1960', },
    { value: 1965, label: '1965', },
    { value: 1970, label: '1975', },
    { value: 1975, label: '1975', },
    { value: 1980, label: '1980', },
    { value: 1985, label: '1985', },
    { value: 1990, label: '1990', },
    { value: 1995, label: '1995', },
    { value: 2000, label: '2000', },
    { value: 2005, label: '2005', },
    { value: 2010, label: '2010', },
    { value: 2015, label: '2015', },
    { value: 2020, label: '2020', },
    { value: 2025, label: '2025', },
    { value: 2030, label: '2030', },
    { value: 2035, label: '2035', },
  ];

  function valuetext(value) {
    return `${value}°C`;
  }
  
  return (
    <div className='sliderComp'>
      <div className='sliderComp-slider'>
        <Box sx={{ width: '90vw' }}>
          <Slider
            aria-label="Temperature"
            getAriaValueText={valuetext}
            valueLabelDisplay="auto"
            marks={marks}
            step={null}
            min={1950}
            max={2035}
            color="primary"
          />
        </Box>
      </div>
    </div>
  );
}

