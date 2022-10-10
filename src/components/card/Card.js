import React from 'react'
import { Link } from 'react-router-dom'
import { useQuizzContext } from '../../contexts/quiz-context'
import "./Card.css"
const Card = ({items}) => {
  const {quizzDispatch} = useQuizzContext()


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
                <Link to='/rules'>
                <button className="btn btn-primary-solid"
                onClick = {() => quizzDispatch({type : "PLAY_CLICK", payload : items})}
                >Play</button>
                </Link>
                 </div>
                    </div>
                    </div>
                </div>
          
  )
}

export {Card}