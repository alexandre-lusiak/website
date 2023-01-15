import React from 'react'

const Box = (props) => {
  return (
    <div className='s-box'>
        <div className='s-b-img'>
            <img src={props.img} alt ={props.alte}/>
        </div>
        <div className='s-b-text'>
            <p>
                {props.text}
            </p>
            <a >{props.button}</a>
        </div>

    </div>
  )
}

export default Box