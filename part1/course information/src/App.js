const Total = ({parts}) => {
  let total = 0;
  parts.forEach(item => {
    total += item.exercises;
  });

  return (
    <p>Number of exercises {total}</p>
  )
}

const Content = ({parts}) => {
  return (
    <div>
      {parts.map(key => (
          <p key={key.name}>{key.name} {key.exercises}</p>
      ))}
    </div>
  );
}

const Header = ({course}) => {
  return (
    <h1>{course}</h1>
  )
}


const App = () => {
  const course = 'Half Stack application development'
  const parts = [
    {
      name: 'Fundamentals of React',
      exercises: 10
    },
    {
      name: 'Using props to pass data',
      exercises: 7
    },
    {
      name: 'State of a component',
      exercises: 14
    }
  ]

  return (
    <div>
      <Header course={course} />
      <Content parts={parts} />
      <Total parts={parts} />
    </div>
  )
}

export default App