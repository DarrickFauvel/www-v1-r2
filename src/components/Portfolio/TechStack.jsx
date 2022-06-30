const TechStack = ({ project }) => {
  return (
    <ul className='tech-stack'>
      {project.stack.map((item) => (
        <li className='stack-item' key={item}>
          {item}
        </li>
      ))}
    </ul>
  )
}

export default TechStack
