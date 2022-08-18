const Course = ({course}) => {
    return (
        <div>
            <Header name={course.name}/>
            <Content parts={course.parts} />
            <Total parts={course.parts} />
        </div>
    )
}

const Header = ({name}) => <h1>{name}</h1>

const Content = ({parts}) => {
    return (
        <div>
            {parts.map(part => 
                <Part key={part.id} name={part.name} exercises={part.exercises} />    
            )}
        </div>
    )
}

const Part = ({name, exercises}) => <p>{name} {exercises}</p>

const Total = ({parts}) => <p><b>total of {parts.reduce((a, b) => a + b.exercises, 0)} exercises</b></p>

export default Course