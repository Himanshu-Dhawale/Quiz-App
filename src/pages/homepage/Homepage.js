import React from 'react'
import "./homepage.css";
import { Navigation } from '../../components/navigation/Navigation';
import { Card } from '../../components/card/Card';
import { Categories } from '../../database/category';
const Homepage = () => {
  return (
    <div>
        <Navigation/>
        <main className="homepage__main">
        <h1 className = "main__heading">⚡ Choose Category ⚡</h1>
        <div className="space__2rem"></div>
        <section className="quiz__card-section">
            {Categories.map((items) => {
                return(
                    <Card items = {items} key={items.id}/>
                
                )
              
            })}
        </section>
      </main>
    </div>
  )
}

export  {Homepage}