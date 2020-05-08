import React, { Component } from 'react'
import './InfoModal.css'
import { 
    Popover,
    Tooltip,
    Modal
  } from 'react-bootstrap';
class InfoModal extends Component{
    setVal=(data)=>{
        this.handleShow();
        
    }
    constructor(){
        super();
        this.setVal=this.setVal.bind(this);
        this.handleShow = this.handleShow.bind(this);
        this.handleClose = this.handleClose.bind(this);
        this.state={
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
              <Modal show={this.state.show} animation={true} onHide={this.handleClose} size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered scrollable={true}> 
              <Modal.Body>
                   <p id="age">Age:</p>
                   <p id="gender">Gender:</p>
                   <p id="appearences">Appearences:</p>
                 </Modal.Body>
                 <Modal.Header closeButton>
                 </Modal.Header>
                 
              </Modal>
            </div>
        )
      }
    }
export default InfoModal;