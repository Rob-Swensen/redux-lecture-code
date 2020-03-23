import React from "react";
import { connect } from "react-redux";
import { getUser } from "./redux/reducer";
import "./App.css";

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      firstName: '',
      lastName: ''
    }
  }

  handleInput = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  createUser = () => {
    const newUser = {
      firstName: this.state.firstName,
      lastName: this.state.lastName
    }
    this.props.getUser(newUser)
  }


  render() {
    console.log(this.props)
    return (
      <div className="App">
        <input value={this.state.firstName} name='firstName' onChange={(event) => this.handleInput(event)}/>
        <input value={this.state.lastName} name='lastName' onChange={(event) => this.handleInput(event)}/>
        <button onClick={this.createUser}>Click Me</button>
      </div>
    );
  }
}

const mapStateToProps = reduxState => reduxState;

export default connect(mapStateToProps, { getUser })(App);
