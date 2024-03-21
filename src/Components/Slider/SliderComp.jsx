import {useState}from 'react';
import './SliderComp.css';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Slider from '@mui/material/Slider';
import { usePenguinData } from '../../Hooks/usePenguinData';

export default function SliderComp({updateMapData, updateSelectedButton}) {
  const {getYearSelectedData} = usePenguinData(); 

  const [sliderValue, setSliderValue] = useState();

  const fetchData = async (selectedValue) => {
      const data = await getYearSelectedData(selectedValue);
      updateMapData(data);
      return data;
      // Handle the updated data as needed
  };

  const handleSliderChange = (event, newValue) => {
    setSliderValue(newValue);
    fetchData(newValue);
    updateSelectedButton('');
  };



  const marks = [
    { value: 1950, label: '1950', },
    { value: 1955, label: '1955', },
    { value: 1960, label: '1960', },
    { value: 1965, label: '1965', },
    { value: 1970, label: '1970', },
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
            max={2025}
            color="primary"
            onChange={(event, newValue) => handleSliderChange(event, newValue)}
          />
        </Box>
      </div>
    </div>
  );
}

