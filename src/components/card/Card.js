import React from 'react'
import "./Card.css"
const Card = ({items}) => {
  return (
    <div>
        <div className=" card card__vertical">
                <div className="image-container-vert">
                    <img className="img responsive-image"
                        src={items.image}
                        alt={items.category}/>
                </div>
                <div className="text-btn-container">
                <h6><strong>{items.category} </strong></h6>
                <div className="play__cta">
                <button className="btn btn-primary-solid">Play</button>
                 </div>
                    </div>
                    </div>
                </div>
          
  )
}

export {Card}