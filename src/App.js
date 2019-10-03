import React, {Component} from 'react';
import ListValues from './Components/ListValues'
import './App.css';
const url = "https://localhost:5001/api/values/"

export default class App extends Component {
  constructor() {
    super()

    this.state = {
      projects: []
    }
  }

  componentDidMount() {
    fetch(url)
      .then(response => response.json())
      .then(result => this.setState({projects: result}))
  }

  handleDelete(id) {
    console.log(id)
    const filteredProjects = this.state.projects.filter(project => project.id !== id)
    this.setState({projects: filteredProjects})
    fetch(url + id, {method: "DELETE"})
      .catch(error => console.error(error))
  }

  handleEdit(id) {
    console.log(id)
    return (
      <form>
        <input type="text" />
      </form>
    )
  }

  render() {
    return (
      <div>
        <h1>Hello World!</h1>
        {this.state.projects ? <ListValues
          projects={this.state.projects}
          handleDelete={this.handleDelete}
          handleEdit={this.handleEdit}
        /> : ""}
      </div>
    );
  }
}
