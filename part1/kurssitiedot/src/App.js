const Header = (props) => (
  <h1>{props.course.name}</h1>
)

const Content = (props) => (
  <div>
    {props.course.parts.map(exercise => (
      <Part exercise={exercise} key={exercise.name}/>
    ))}
  </div>
)

const Total = (props) => (
  <p>Number of exercises {props.course.parts.reduce((a, b) => a + b.num, 0)}</p>
)

const Part = (props) => (
  <p>{props.exercise.name} {props.exercise.num}</p>
)


const App = () => {
  // Turning the data to be passed into an object to be passed in a single variable
  const course = {
    name: 'Half Stack application development',
    parts: [{
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
      <Content course={course} />
      <Total course={course} />
    </div>
  )
}

export default App