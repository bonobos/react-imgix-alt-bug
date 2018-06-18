import React, { Component } from 'react';
import logo from './logo.svg';
import ReactImgix from "react-imgix"
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>ReactImgix alt prop bug</h2>
        </div>
        <p className="App-intro">
          On Edge 14 and Firefox, if you pass an alt tag, react-imgix constrains the width to 100px. If you remove the alt tag, it sets it to 1px.
        </p>
        <p className="App-bug">
          <h3>Without alt tag</h3>
          <ReactImgix
            src="https://bonobos-prod-s3.imgix.net/products/22936/original/Tailored.png"
            imgProps={{
              alt: "This is alt text",
            }}
          />
        </p>
        <p className="App-bug">
          <h3>With alt tag</h3>
          <ReactImgix
            src="https://bonobos-prod-s3.imgix.net/products/22936/original/Tailored.png"
          />
        </p>
      </div>
    );
  }
}

export default App;
