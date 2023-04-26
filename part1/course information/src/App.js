const Total = ({total}) => {
  return (
    <p>Number of exercises {total}</p>
  )
}

const Part = (part) => {
  return (
    <p>{part.title} {part.n_exercises}</p>
  )
}

const Content = (course_content) => {
  const part1 = { title: course_content.part1,
                  n_exercises: course_content.exercises2,
                };
  const part2 = { title: course_content.part2,
                  n_exercises: course_content.exercises2,
                };
  const part3 = { title: course_content.part3,
    n_exercises: course_content.exercises3,
  };
  return (
    <div>
      <Part {...part1} />
      <Part {...part2} />
      <Part {...part3} />
    </div>
  )
}

const Header = ({course}) => {
  return (
    <h1>{course}</h1>
  )
}


const App = () => {
  const course = 'Half Stack application development'
  const course_content = {
        part1: 'Fundamentals of React',
        exercises1: 10,
        part2: 'Using props to pass data',
        exercises2: 7,
        part3: 'State of a component',
        exercises3: 14,
  };
  const total = course_content.exercises1 + course_content.exercises2 + course_content.exercises3;

  return (
    <div>
      <Header course={course} />
      <Content {...course_content} />
      <Total total={total} />
    </div>
  )
}

export default App