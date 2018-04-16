import React from 'react';

const FormSearch=(props)=>{
    return(
        <div className='form_serch' >
            <input
            type='text'
            placeholder={"Search"}
            onChange={props.onChange}
            value={props.value} 
            />
        </div>
    )
}

export default FormSearch;