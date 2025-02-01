import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import './TimeRange.css';
const TimeRange = ({ startTime, endTime, ranges }) => {
    const width = 500;
    const height = 3;
    const offesetX = 10;
    const offesetYtext = 20;
    const offesetY = 10;
    console.log(startTime, endTime, width);
    return (_jsxs("svg", { width: width + 10, height: height + offesetY + offesetYtext, children: [_jsx("rect", { className: "base", x: offesetX / 2, y: offesetY / 2 + offesetYtext, width: width, height: height, fill: "#f0f0f011" }), ranges?.map((range, index) => {
                console.log(range.start, range.end);
                const pxStart = width * range.start / endTime;
                const pxWidth = width * (range.end - range.start) / endTime;
                return _jsxs("g", { fill: "#007bff", className: `range ${range.class}`, children: [_jsx("text", { className: 'text', x: pxStart + offesetX / 2, y: offesetYtext / 2 + 5, fill: "red", children: range.start }), _jsx("text", { className: 'text', x: pxStart + pxWidth - offesetX / 2, y: offesetYtext / 2 + 5, fill: "red", children: range.end }), _jsx("circle", { className: "startRange", cx: pxStart + offesetX / 2, cy: offesetY / 2 + 2 + offesetYtext, r: 4 }), _jsx("rect", { x: pxStart + 5, y: 5 + offesetYtext, width: pxWidth, height: height, "data-title": "Time Range " + range.start + " to " + range.end }, index), _jsx("circle", { className: "endRange", cx: pxStart + pxWidth + offesetX / 2, cy: offesetY / 2 + 2 + offesetYtext, r: 4 })] });
            })] }));
};
export default TimeRange;
