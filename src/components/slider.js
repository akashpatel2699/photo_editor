import React from 'react'

const slider = ({min, max, value, handleChange}) => {
    return (
        <div className="slider-container">
            <input type="range" 
            className="slider"
            min={min}
            max={max}
            value={value}
            onChange={handleChange}
            ></input>
        </div>
    )
}

export default slider
