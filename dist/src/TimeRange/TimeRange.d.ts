import { default as React } from 'react';
export interface TimeRangeProps {
    startTime: number;
    endTime: number;
    ranges?: {
        start: number;
        end: number;
        class?: string;
    }[];
}
declare const TimeRange: React.FC<TimeRangeProps>;
export default TimeRange;
