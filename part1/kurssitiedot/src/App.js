const Header = (props) => (
  <h1>{props.course}</h1>
)

const Content = (props) => (
  <div>
    {props.exerciseList.exercises.map(exercise => (
      <Part exercise={exercise} key={exercise.name}/>
    ))}
  </div>
)

const Total = (props) => (
  <p>Number of exercises {props.exerciseList.exercises.reduce((a, b) => a + b.num, 0)}</p>
)

const Part = (props) => (
  <p>{props.exercise.name} {props.exercise.num}</p>
)


const App = () => {
  const course = 'Half Stack application development'

  // Turning the data to be passed into an object to be passed in a single variable
  const exerciseList = {
    exercises: [{
      name: 'Fundamentals of React',
      num: 10
    },
    {
      name: 'Using props to pass data',
      num: 7
    },
    {
      name: 'State of a component',
      num: 14
    }]
  }

  return (
    <div>
      <Header course={course} />
      <Content exerciseList={exerciseList} />
      <Total exerciseList={exerciseList} />
    </div>
  )
}

export default App