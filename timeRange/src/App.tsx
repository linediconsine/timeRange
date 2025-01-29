import TimeRange from './components/TimeRange/TimeRange'
import './App.css'

function App() {
  const ranges = [
    { start: 0, end: 2 },
    { start: 100, end: 150 },
    { start: 20, end: 25 },
    { start: 25, end: 30 },
  ]
  return (
    <>
      <h1>Time Range</h1>
      <TimeRange startTime={0} endTime={30} ranges={ranges} />
    </>
  )
}

export default App
