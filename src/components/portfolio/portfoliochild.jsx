import React from 'react'

const Portfoliochild = (props) => {
  return (
    <div>
        <div className="portfolio_image">
            <img  src={props.image} alt="" />
          </div>
          <h3>{props.projectName}</h3>
          <a href={props.gitlink} target="_blank" rel="noreferrer">Github</a>
    </div>
  )
}

export default Portfoliochild