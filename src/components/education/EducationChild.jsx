import React from 'react'
import {GiGiftOfKnowledge} from 'react-icons/gi'
const EducationChild = (props) => {
  return (
    <div>
        <h2>{props.standard}</h2>
            <GiGiftOfKnowledge/>
            <h2>{props.institute}</h2>
            <h6>{props.board}</h6>
            <h3>{props.boardname}</h3>
            <h5>{props.marks}</h5>
    </div>
  )
}

export default EducationChild