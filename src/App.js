import React, {Component} from 'react';
import ListValues from './Components/ListValues'
import './App.css';

export default class App extends Component {
  constructor() {
    super()

    this.state = {
      projects: []
    }
  }

  componentDidMount() {
    fetch("https://localhost:5000/api/values")
      .then(response => response.json())
      .then(result => this.setState({projects: result}))
  }

  handleDelete() {
    console.log("Delete entry")
  }

  render() {
    return (
      <div>
        <h1>Hello World!</h1>
        {this.state.projects ? <ListValues
          projects={this.state.projects}
          handleDelete={this.handleDelete}
        /> : ""}
      </div>
    );
  }
}
