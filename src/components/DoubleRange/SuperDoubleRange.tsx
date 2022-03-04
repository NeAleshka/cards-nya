import React from 'react'
import Slider from '@mui/material/Slider';
import Box from '@mui/material/Box';

type SuperDoubleRangePropsType = {
    onChangeRange?: (value: number[] ) => void
    value?: [number, number]
    // min, max, step, disable, ...
}

function SuperDoubleRange(props:SuperDoubleRangePropsType) {
    const handleChange = (event:Event, newValue: number | number[],) => {
    props.onChangeRange && props.onChangeRange(newValue as number[])
    };

    return (
        <Box sx={{ width: 300}}>
            <Slider
                value={props.value}
                onChange={handleChange}
                valueLabelDisplay="auto"
                disableSwap
            />
        </Box>
    );
}

export default SuperDoubleRange
