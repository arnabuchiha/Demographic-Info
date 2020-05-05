import React from 'react';
import "./ImageLinkForm.css"
const ImageLinkForm=({onInputChange,onButtonSubmit})=>{
    return(
        <div>
            <p className="f3 text center">
                {'Behind every mask'}<br/>{'there is a face,and'}<br/>{'behind that a story.'}<br/>{'Lets find that!'}
            </p>
            <div className="center">
                <div className="form center pa4 br3">
                    <input className="f4 pa2 w-70 center" type="text" onChange={onInputChange}/>
                    <div className="button start grow w-30 f4 link ph3 pv2 dib" onClick={onButtonSubmit}>DETECT</div>
                </div>
                
            </div>
        </div>
    )
}
export default ImageLinkForm;