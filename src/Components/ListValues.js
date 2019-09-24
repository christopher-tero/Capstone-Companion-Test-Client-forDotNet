import React from 'react'

export default function ListValues(props) {
  console.log(props.projects)
  const listProjects = props.projects.map((project) => {
    console.log(project)
    return(
      <div>
      <h4>{project.title}  <button>Edit</button> <button>Delete</button></h4>

      <p>{project.description}</p>
      </div>
    )
  })

  return(
    <div>
    <p>Some value</p>
    {listProjects}
    </div>
  )
}
