import React from 'react';
// import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import './ImageLinkForm.css';


const ImageLinkForm =({onInputChange, onButtonSubmit}) =>{
    return(
        <div className='ma4 mt0 pa2'>
            
            <div className='center'>
                <div className='form center pa2 br3 shadow-5'> 
                    <input className='f4 pa2 w-70 center op bord' type='text' onChange={onInputChange}/>  
                    <button className='w-20 grow link ph3 dib white bg-orange rad' onClick={onButtonSubmit}><div className="style">Route</div></button>
                    <button className='w-20 link grow ph3 dib white bg-orange rad' onClick={() => window.location.reload(false)}><div className="style">Refresh</div></button>

                    
                </div>
            </div>
        </div>
    );
}

export default ImageLinkForm;