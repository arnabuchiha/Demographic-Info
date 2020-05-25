import React, { Component } from 'react'
import brain from "../Logo/brain.png";
import axios from 'axios';
class Navigation extends Component{
    constructor(props){
        super(props);
        this.state={
            score:0
        };
        
    }componentDidMount(){
        axios.post('https://facerecognition-backennd.herokuapp.com/api/rank/get',{
          token:localStorage.getItem('jwt-token')
        }).then(res=>{
            console.log(res);
            if(res.data.success){
                this.setState({
                    score:res.data.rank
                })
            }
            else{
                // localStorage.removeItem('jwt-token');
                // this.props.onRouteChange('signin');
            }
		}).catch(err=>{
            console.log(err);
		})
        if(!localStorage.getItem('jwt-token')){
            this.props.onRouteChange('signin');
        }
    }
    signout=(e)=>{
        e.preventDefault();
        try{
            localStorage.removeItem('jwt-token');
            this.props.onRouteChange('signin');
        }catch{
            console.log('Signout failed');
        }
    }
    render(){
        return(
            <nav class="flex justify-between ">
                <a class="link white-70 hover-white no-underline flex items-center pa3" href="">
                    <img src={brain} alt="logo" className="grow ma2" style={{padding:"2px",float:"left", height: 40, width: 40 }}/>
                </a>
                <div className="flex-grow pa3 flex items-center">
                    <a id="rank" className="f4 dib white dim mr3 mr4-ns ">Score is {this.state.score}</a>
                    <a id="signout" onClick={(e)=>this.signout(e)} className="f4 dib white bg-animate hover-bg-white hover-black no-underline pv2 ph4 br-pill ba b--white-20" href="#0">Sign Out</a>
                </div>
            </nav>

        )
    }
}
export default Navigation;