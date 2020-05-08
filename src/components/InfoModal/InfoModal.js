import React, { Component } from 'react'
import './InfoModal.css'
import { 
    Popover,
    Tooltip,
    Modal
  } from 'react-bootstrap';
class InfoModal extends Component{
    setVal=(data)=>{
        console.log("hello")
        var age='';
        var gender='';
        var appearences=[];
        for(var i=0;i<data.length;i++){
            if(age==''){
                if(data[i].vocab_id=="age_appearance")
                    age=data[i].name;
            }
            if(gender==''){
                if(data[i].vocab_id=="gender_appearance"){
                    gender=this.props.facesInfo[i].name;
                }
            }
            if(data[i].vocab_id=="multicultural_appearance"){
                appearences.push(this.props.facesInfo[i].name);
            }
        }
        this.setState({
            age:age,
            gender:gender,
            appearences:appearences
        })
        console.log(age);
        this.handleShow();
        
    }
    constructor(){
        super();
        this.setVal=this.setVal.bind(this);
        this.handleShow = this.handleShow.bind(this);
        this.handleClose = this.handleClose.bind(this);
        this.state={
            age:'',
            gender:'',
            appearences:[],
            show:false
        }
        // this.setVal();
        // console.log(this.state.age);
    }
    handleShow() {
        console.log(this.state)
        this.setState({ show: true })
    }
    handleClose(){
        this.setState({ show: false })
    }
    render() {
    
        return (
           <div>
              <Modal show={this.state.show} onHide={this.handleClose} size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered>
              <Modal.Body>
                   <h1 id="age">Age:{this.state.age}</h1>
                   <h1 id="gender">Gender:{this.state.gender}</h1>
                   <h1 id="appearences">Appearences:</h1>
                 </Modal.Body>
                 <Modal.Header closeButton>
                 </Modal.Header>
                 
              </Modal>
            </div>
        )
      }
    }
export default InfoModal;