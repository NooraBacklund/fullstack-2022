import { useState } from 'react'

const Button = ({handleClick, name}) => {
  return (
    <button onClick={handleClick}>{name}</button>
  )
}

const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const handleGood = () => setGood(good + 1)
  const handleNeutral = () => setNeutral(neutral + 1)
  const handleBad = () => setBad(bad + 1)

  return (
    <div>
      <h1>give feedback</h1>
      <Button name="good" handleClick={handleGood} />
      <Button name="neutral" handleClick={handleNeutral} />
      <Button name="bad" handleClick={handleBad} />
      <h1>statistics</h1>
      good {good}<br />
      neutral {neutral}<br />
      bad {bad}<br />
    </div>
  )
}

export default App