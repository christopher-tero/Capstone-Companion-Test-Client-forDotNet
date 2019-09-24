import React from 'react'

export default function ListValues(props) {
  console.log(props.projects)
  const listProjects = props.projects.map((project) => {
    console.log(project)
    return(
      <p>{project.title}</p>
    )
  })

  return(
    <div>
    <p>Some value</p>
    {listProjects}
    </div>
  )
}
