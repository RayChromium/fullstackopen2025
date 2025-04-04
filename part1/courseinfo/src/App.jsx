const Header = (props) => {
  return (
    <>
      <h1>{props.course}</h1>
    </>
  )
}

const Part = (props) => {
  return (
    <p>{props.name} {props.number}</p>
  )
}

const Content = (props) => {
  // console.log(props.parts)
  // const parts = props.parts.map( part => '<Part name={'+part.name+'} number={'+part.exercises+'} />' )
  // let partsString = ''
  // parts.forEach( part => partsString += part += '\n' )
  // console.log(parts)
  const parts = props.parts.map( (part, index) => <Part name={part.name} number={part.exercises} key={index}/> )
  return (
    <>
      {parts}
    </>
  )
}

const Total = (props) => {
  // console.log(props.parts)
  let total = 0
  props.parts.forEach( part => total += part.exercises)
  console.log(total)
  return (
    <p>Number of exercises {total}</p>
  )
}

const App = () => {
  const course ={ name: 'Half Stack application development', 
    parts: [
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
}

  return (
    <div>
      <Header course={course.name}/>
      <Content parts={course.parts}/>
      <Total parts={course.parts}/>
    </div>
  )
}

export default App