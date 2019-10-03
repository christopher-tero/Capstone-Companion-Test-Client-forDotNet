import React from 'react'

export default function ListValues(props) {
  // const handleDelete = () => {
  //   console.log("delete entry")
  // }

  const handleEdit = (id) => {
    console.log(id)
  }

  const listProjects = props.projects.map((project) => {
    //console.log(project.id)
    return(
      <div key={project.id}>
      <h4>{project.title}
        <button onClick={() => handleEdit(project.id)}>Edit</button>
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
