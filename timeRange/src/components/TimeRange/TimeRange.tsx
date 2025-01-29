import React from 'react';

interface TimeRangeProps {
    startTime: number;
    endTime: number;
    ranges?: { start: number; end: number }[];
}

const TimeRange: React.FC<TimeRangeProps> = ({ startTime, endTime, ranges }) => {
    const width = 500;
    const height = 3;
    const offesetX = 10;
    
    const offesetYtext = 20;
    const offesetY = 10;

    console.log(startTime, endTime, width)
    return (
        <svg width={width + 10} height={height + offesetY + offesetYtext}>
            <rect className="base" x={offesetX/2} y={offesetY/2 + offesetYtext} width={width} height={height} fill="#f0f0f011" />

            {ranges?.map((range, index) => {
                console.log(range.start, range.end);

                const pxStart = width * range.start / endTime;
                const pxWidth = width * (range.end - range.start) / endTime;


                return <g fill="#007bff" className="range" >
                    <text className='text' x={pxStart + offesetX/2} y={offesetYtext/2 + 5} fill="red">{range.start}</text>
                    <text className='text' x={pxStart + pxWidth - offesetX/2 } y={offesetYtext/2 + 5} fill="red">{range.end}</text>

                    <circle cx={pxStart + offesetX/2} cy={offesetY/2 + 2 +   offesetYtext} r={4} />
                    <rect
                        key={index}
                        x={pxStart + 5}
                        y={5 +  offesetYtext}
                        width={pxWidth}
                        height={height}
                        data-title={"Time Range " + range.start + " to " + range.end}
                    />
                    <circle cx={pxStart + pxWidth + offesetX/2 } cy={offesetY/2 + 2 +   offesetYtext} r={4} />
                </g>

            })}

        </svg>
    );
};

export default TimeRange;