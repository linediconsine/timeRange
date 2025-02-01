import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
import TimeRange from './TimeRange/TimeRange';
import './App.css';
function App() {
    const ranges = [
        { start: 0, end: 2 },
        { start: 100, end: 150 },
        { start: 20, end: 25, class: 'loading' },
        { start: 25, end: 30 },
    ];
    return (_jsxs(_Fragment, { children: [_jsx("h1", { children: "Time Range" }), _jsx(TimeRange, { startTime: 0, endTime: 30, ranges: ranges })] }));
}
export default App;
