import { jsx as _jsx } from "react/jsx-runtime";
import { expect, it } from 'vitest';
import { render, screen } from '@testing-library/react';
import TimeRange from './TimeRange';
it('renders correctly', () => {
    const ranges = [
        { start: 0, end: 2 },
        { start: 100, end: 150 },
        { start: 20, end: 25 },
        { start: 25, end: 30 },
    ];
    render(_jsx(TimeRange, { startTime: 0, endTime: 30, ranges: ranges }));
    const result = screen.debug();
    expect(result).toMatchSnapshot();
});
