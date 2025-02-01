import TimeRange from '../TimeRange';
// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
    title: 'Example/TimeRange',
    component: TimeRange,
    parameters: {
        // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
        layout: 'centered',
    },
    // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
    tags: ['autodocs'],
};
export default meta;
// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const FullArgs = {
    args: {
        startTime: 0,
        endTime: 30,
        ranges: [
            { start: 0, end: 2 },
            { start: 100, end: 150 },
            { start: 20, end: 25 },
            { start: 25, end: 30 },
        ]
    },
};
export const NoRange = {
    args: {
        startTime: 0,
        endTime: 30,
        ranges: []
    },
};
export const Small = {
    args: {
        startTime: 0,
        endTime: 30,
        ranges: [
            { start: 0, end: 2 },
        ]
    },
};
// export const Small: Story = {
//   args: {
//     size: 'small',
//     label: 'Button',
//   },
// };
