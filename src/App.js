import React, { Component } from 'react';
import Navigation from './components/Navigation/Navigation'
import './App.css';
import Logo from './components/Logo/Logo'
import Particles from 'react-particles-js';
import ImageLinkForm from './components/ImageLinkForm/ImageLinkForm'
import FaceRecognition from './components/FaceRecognition/FaceRecognition'
import Rank from './components/Rank/Rank'
import Clarifai from 'clarifai'
const app=new Clarifai.App({
  apiKey:"05ea648ab6874377a7384b185058ceb5"
})
const particlesOptions = {
  particles: {
    number: {
      value: 30,
      density: {
        enable: true,
        value_area: 800
      }
    }
  }
}
class App extends Component {
  constructor(){
    super();
    this.state={
      input:'',
    }
  }
  onInputChange=(event)=>{
    console.log(event.target.value)
  }
  onButtonSubmit=()=>{
    app.models.predict(Clarifai.DEMOGRAPHICS_MODEL, "https://samples.clarifai.com/demographics.jpg").then(
      function(response) {
        console.log(response.outputs[0].data.regions[0].data.concepts)
      },
      function(err) {
        // there was an error
      }
    );
  }
  render(){
    return (
      <div className="App">
      <Particles className='particles'
            
          />
        <Navigation/>
        {/* <Logo/> */}
        <Rank/>
        <ImageLinkForm 
          onInputChange={this.onInputChange}
          onButtonSubmit={this.onButtonSubmit}
        />
        
        <FaceRecognition/>
      </div>
    );
  }
}

export default App;
