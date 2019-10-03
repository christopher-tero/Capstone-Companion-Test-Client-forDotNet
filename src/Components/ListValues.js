import React from 'react'

export default function ListValues(props) {

  const listProjects = props.projects.map((project) => {
    return(
      <div key={project.id}>
      <h4>{project.title}
        <button onClick={() => props.handleEdit(project.id)} id={project.id}>Edit</button>
        <button onClick={() => props.handleDelete(project.id)} id={project.id}>Delete</button>
      </h4>
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
