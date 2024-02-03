import React, { Component } from "react";
import Navigation from "/src/Components/Navigation/Navigation.jsx";
import Logo from "/src/Components/Logo/Logo.jsx";
import ImageLinkForm from "/src/Components/ImageLinkForm/ImageLinkForm.jsx";
import FaceRecognition from "/src/Components/FaceRecognition/FaceRecognition.jsx";
import Rank from "/src/Components/Rank/Rank.jsx";
import SignIn from "/src/Components/SignIn/SignIn.jsx";
import Register from "/src/Components/Register/Register.jsx";
import "./App.css";
import "/node_modules/tachyons/css/tachyons.css";
import "/node_modules/tachyons/css/tachyons.min.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      input: "",
      imageurl: "",
      route: "SignIn",
    };
  }
  // const{input,imageurl}=this.state
  onInputChange = (event) => {
    console.log(event.target.value);
    this.setState({ input: event.target.value });
  };
  onButtonSubmit = () => {
    this.setState({ imageurl: this.state.input });
  };
  onButtonSignIn = (route) => {
    this.setState({ route: route });
  };

  render() {
    return (
      <div className="App">
        <Navigation onButtonSignIn={this.onButtonSignIn} />
        {this.state.route === "SignIn" ? (
          <SignIn onButtonSignIn={this.onButtonSignIn} />
        ) : this.state.route === "Home" ? (
          <div>
            <Logo />
            <Rank />
            <ImageLinkForm
              onInputChange={this.onInputChange}
              onButtonSubmit={this.onButtonSubmit}
            />
            <FaceRecognition imageurl={this.state.imageurl} />
          </div>
        ) : (
          this.state.route === "Register"(<Register />)
        )}
      </div>
    );
  }
}
export default App;
