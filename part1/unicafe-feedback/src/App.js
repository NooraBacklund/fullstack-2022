import { useState } from 'react'

const Button = ({ handleClick, name }) => {
  return (
    <button onClick={handleClick}>{name}</button>
  )
}

const Statistics = ({ good, neutral, bad, numResponses }) => {
  if (numResponses === 0) {
    return (
      <div>
        <h1>statistics</h1>
        No feedback given
      </div>
    )
  }

  return (
    <div>
      <h1>statistics</h1>
      <table>
        <tbody>
          <StatisticLine text='good' value={good} />
          <StatisticLine text='neutral' value={neutral} />
          <StatisticLine text='bad' value={bad} />
          <StatisticLine text='all' value={numResponses} />
          <StatisticLine text='average' value={(good - bad) / (numResponses)} />
          <StatisticLine text='positive' value={(good / numResponses * 100) + ' %'} />
        </tbody>
      </table>
    </div>
  )
}

const StatisticLine = ({ text, value }) => (<tr><td>{text}</td><td>{value}</td></tr>)

const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [numResponses, setNumResponses] = useState(0)

  const handleGood = () => {
    setGood(good + 1)
    setNumResponses(numResponses + 1)
  }
  const handleNeutral = () => {
    setNeutral(neutral + 1)
    setNumResponses(numResponses + 1)
  }
  const handleBad = () => {
    setBad(bad + 1)
    setNumResponses(numResponses + 1)
  }

  return (
    <div>
      <h1>give feedback</h1>
      <Button name="good" handleClick={handleGood} />
      <Button name="neutral" handleClick={handleNeutral} />
      <Button name="bad" handleClick={handleBad} />
      <Statistics good={good} bad={bad} neutral={neutral} numResponses={numResponses} />
    </div>
  )
}

export default App