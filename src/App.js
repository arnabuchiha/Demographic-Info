import React, { Component } from 'react';
import Navigation from './components/Navigation/Navigation'
import './App.css';
import Logo from './components/Logo/Logo'
import Particles from 'react-particles-js';
import ImageLinkForm from './components/ImageLinkForm/ImageLinkForm'
import FaceRecognition from './components/FaceRecognition/FaceRecognition'
import Rank from './components/Rank/Rank'
import Clarifai from 'clarifai'
import { func } from 'prop-types';
import paper from 'paper';
import { blue } from 'color-name';
import InfoModal from './components/InfoModal/InfoModal';
import SignIn from './components/SignIn/SignIn';
import Register from './components/Register/Register';
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
      imageUrl:'',
      box:{},
      clarifaiFaces: [],
      realFaces: [],
      faceInfo:[],
      route:'signin'
    }
    
  }
  modalRef=(obj)=>{
    InfoModal.setVal=obj&&obj.handleShow;
  }
  onInputChange=(event)=>{
    this.setState({
      input:event.target.value
    })
  }
  drawBoxes=()=> {
    var canvas, ctx;
    const image=document.getElementById("inputimage")
    const width=Number(image.width)
    const height=Number(image.height)
    canvas = document.getElementById("canvas");
    canvas.width=width;
    canvas.height=height;
    paper.setup(canvas);
    // ctx = canvas.getContext("2d");
    // ctx.textBaseline = "top";
  
    for(var i=0; i<this.state.clarifaiFaces.length; i++) {
      this.setState({box : {
        x: this.state.clarifaiFaces[i].left_col * width,
        y: this.state.clarifaiFaces[i].top_row * height,
        w: (this.state.clarifaiFaces[i].right_col * width) - (this.state.clarifaiFaces[i].left_col * width),
        h: (this.state.clarifaiFaces[i].bottom_row * height) - (this.state.clarifaiFaces[i].top_row * height)
      }})
      this.state.realFaces.push(this.state.box);
      var rect=new paper.Rectangle(this.state.box.x,this.state.box.y,this.state.box.w,this.state.box.h);
     
      var path=new paper.Path.Rectangle(rect);
      path.strokeColor = 'blue'
      path.strokeWidth=3;
      path.fillColor= "#ffffff10";
      var x=this;
      (function(index){
        path.onClick=function(e){
          console.log(x.state.faceInfo[index][0].vocab_id);
          var age='';
          var gender='';
          var appearences=[];
          for(var i=0;i<x.state.faceInfo[index].length;i++){
              if(age==''){
                  if(x.state.faceInfo[index][i].vocab_id=="age_appearance")
                      age=x.state.faceInfo[index][i].name;
              }
              if(gender==''){
                  if(x.state.faceInfo[index][i].vocab_id=="gender_appearance"){
                      gender=x.state.faceInfo[index][i].name;
                  }
              }
              if(x.state.faceInfo[index][i].vocab_id=="multicultural_appearance"){
                  appearences.push(x.state.faceInfo[index][i].name);
              }
          }
          InfoModal.setVal(x.state.faceInfo[index]);
          document.getElementById("age").innerHTML="Age:"+age;
          document.getElementById("gender").innerHTML="Gender:"+gender;
          document.getElementById("appearences").innerHTML="Appearences:<br/><br/>"+appearences;
        }
      })(i);
      
      
      // ctx.beginPath();
      // ctx.lineWidth = "5";
      // ctx.strokeStyle = "blue"; 
      // ctx.rect(this.state.box.x,this.state.box.y,this.state.box.w,this.state.box.h);
      // ctx.stroke();
    }
    paper.view.draw();
  }
  onButtonSubmit=()=>{
    this.setState({imageUrl:this.state.input});
    app.models.predict(Clarifai.DEMOGRAPHICS_MODEL, this.state.input).then(response=>{
      console.log(response);
      var data = response.outputs[0].data.regions;
      if (data !== null) {
        for (var i = 0; i < data.length; i++) {
          this.state.clarifaiFaces.push(data[i].region_info.bounding_box);
          this.state.faceInfo.push(data[i].data.concepts);
        }
      }
      this.drawBoxes();
      var temptext=document.getElementById("invisibletext");
      temptext.style.visibility="visible";
      console.log(this.state.faceInfo);
    }).catch(err=>console.log(err));
  }
  onRouteChange=(route)=>{
    this.setState({
      route:route
    })
  }
  render(){
    return (
      <div className="App">
      <Particles className='particles'
            
          />
        {
          this.state.route==="home"?
          <div>
        <Navigation onRouteChange={this.onRouteChange}/>
        {/* <Logo/> */}
        <Rank/>
        <ImageLinkForm 
          onInputChange={this.onInputChange}
          onButtonSubmit={this.onButtonSubmit}
        />
        
        <FaceRecognition box={this.state.box} imageUrl={this.state.imageUrl}/>
        <InfoModal ref={this.modalRef} faceInfo={this.state.faceInfo[0]}></InfoModal>
        </div>:
        (
          this.state.route=="signin"?
          <SignIn onRouteChange={this.onRouteChange}/>:<Register onRouteChange={this.onRouteChange}/>
        )
        }
      </div>
    );
  }
}

export default App;