import React from 'react';

const MoreButton=(props)=>{
    return(
        <div className='more_btn'>
            <button 
            type="submit"
            onClick={props.onClick}
            hidden={props.hidden}>Load more</button>
        </div>
    );
}

export default MoreButton;