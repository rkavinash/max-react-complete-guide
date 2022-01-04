import React from 'react';
import './Chart.css';
import ChartBar from './ChartBar';

export default function Chart(props) {

    const datapointValues = props.datapoints.map(dp => dp.value);
    const totalMax = Math.max(...datapointValues);

    return (
        <div className='chart'>
            {props.datapoints.map(dataPoint => {
                return <ChartBar value={dataPoint.value} maxValue={totalMax} label={dataPoint.label} key={dataPoint.label}></ChartBar>;
            })}
        </div>
    )
}
