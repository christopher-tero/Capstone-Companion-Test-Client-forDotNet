import React from 'react'

export default function ListValues(props) {
  const handleDelete = () => {
    console.log("delete entry")
  }

  const handleEdit = () => {
    console.log("edit entry")
  }

  const listProjects = props.projects.map((project) => {
    console.log(project)
    return(
      <div>
      <h4>{project.title}  <button onClick={handleEdit}>Edit</button> <button onClick={handleDelete} id={props.id}>Delete</button></h4>

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
