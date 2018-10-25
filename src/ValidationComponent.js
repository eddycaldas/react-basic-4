import React from 'react';

const validationComponent = (props) => {
    const validationText = props.theLength;
    return(
        <div>
        {
         validationText > 5 ? <p>Text long enough</p> : <p>Text too short</p> 
        }
        </div>
    ) };



export default validationComponent;