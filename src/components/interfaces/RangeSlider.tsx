import Slider from '@mui/material/Slider';
import React, { useState } from 'react'

interface Props {
    min: number;
    max: number;
}

const RangeSlider: React.FC<Props> = ({ min, max }) => {
    const [range, setRange] = useState([5500, 8500]);

    const handleChange = (event: Event, newValue: number | number[]) => {
        setRange(newValue as number[]);
    };

    // const handleRangeChange = (event: React.ChangeEvent<HTMLInputElement>, index: number) => {
    //     const value = parseInt(event.target.value, 10);
    //     const newRange = [...range];
    //     newRange[index] = value;
    //     setRange(newRange);
    // };

    return (
        <Slider
            getAriaLabel={() => 'Approximate budget'}
            valueLabelDisplay="auto"
            value={range}
            min={min}
            max={max}
            onChange={handleChange}
            sx={{
                color: "#fff",
                '& .MuiSlider-rail': { opacity: 0.2, height: "2px" },
                '& .MuiSlider-track': { opacity: 0 },
                '& .MuiSlider-thumb': { opacity: 0.8, background: "#FF4D00", '&:before': { background: "white", height: "8px", width: "8px", opacity: 1, boxShadow: '0 0 23px 0 rgba(255, 77, 0, 0.6), 0 0 29px 0 rgba(255, 77, 0, 0.3)'}, '&:focus, &:hover, &.Mui-active': {boxShadow: '0 0 23px 0 rgba(255, 77, 0, 0.6), 0 0 29px 0 rgba(255, 77, 0, 0.3)'} },
            }}
        />
    )
}

export default RangeSlider