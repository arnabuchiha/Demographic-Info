import React from 'react'
import './FaceRecognition.css';
const FaceRecognition=({box,imageUrl})=>{
    return(
        <div class="pt0">
            <div class="ma4 ">
                <img id="inputimage" src={imageUrl} alt="Face" style={{width:"300px",height:"auto", position: "absolute", zIndex: -1}} />
                <canvas id="canvas" style={{zIndex:1}}></canvas>
            </div>
            <div>
                <p className="white" id="invisibletext" style={{visibility:"hidden"}}>
                    Click on the box to know!
                </p>
            </div>
        </div>
    )
}
export default FaceRecognition;