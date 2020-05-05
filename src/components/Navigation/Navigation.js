import React from 'react'
import brain from "../Logo/brain.png"
const Navigation=()=>{
    // return(
    //     <div>
    //     <img src={brain} alt="logo" className="grow ma2" style={{padding:"2px",float:"left", height: 60, width: 60 }}/>
    //     <nav style={{display:'flex',justifyContent:'flex-end'}}>
    //         <p className="white">Rank: #5</p>
    //         <p className="f3 link dim white underline pa3 pointer">Sign Out</p>
    //         <a class="f6 link dib white dim mr3 mr4-ns" href="#0">About</a>
    //         <a class="f6 link dib white dim mr3 mr4-ns" href="#0">Sign In</a>
    //     </nav>
    //     </div>
    // )
    return(
        <nav class="flex justify-between ">
            <a class="link white-70 hover-white no-underline flex items-center pa3" href="">
                <img src={brain} alt="logo" className="grow ma2" style={{padding:"2px",float:"left", height: 40, width: 40 }}/>
            </a>
            <div class="flex-grow pa3 flex items-center">
                <a class="f4 dib white dim mr3 mr4-ns ">Rank is #5</a>
                <a class="f4 dib white bg-animate hover-bg-white hover-black no-underline pv2 ph4 br-pill ba b--white-20" href="#0">Sign Out</a>
            </div>
        </nav>

    )
}
export default Navigation;