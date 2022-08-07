import { useState } from 'react'

const Button = ({ name, clickHandler }) => <button onClick={clickHandler}>{name}</button>

const AnecdoteStatistics = ({anecdotes, points}) => {
  return (
    <div>
      <h1>Anecdote with most votes</h1>
      {anecdotes[points.indexOf(Math.max(...points))]}
    </div>
  )
}

const DailyAnecdote = ({anecdotes, selected, points, randomAnecdote, addVote}) => {
  return(
    <div>
      <h1>Anecdote of the day</h1>
      {anecdotes[selected]}<br />
      has {points[selected]} votes <br />
      <Button name="next anecdote" clickHandler={randomAnecdote} />
      <Button name="vote" clickHandler={() => addVote(selected)} />
    </div>
  )
}

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when dianosing patients.'
  ]

  const [points, setPoints] = useState(new Array(7).fill(0))
  const [selected, setSelected] = useState(0)

  const randomAnecdote = () => {
    const rnd = Math.floor(Math.random() * anecdotes.length)
    setSelected(rnd)
  }

  const addVote = (selected) => {
    const copy = [...points]
    copy[selected] += 1
    setPoints(copy)
  }

  return (
    <div>
      <DailyAnecdote anecdotes={anecdotes} selected={selected} points={points} randomAnecdote={randomAnecdote} addVote={addVote} />
      <AnecdoteStatistics anecdotes={anecdotes} points={points}/>
    </div>
  )
}

export default App