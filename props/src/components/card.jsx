import React from 'react'

const Card = (props) => {
  return (

    
        <div className="card">
        <img
          src="https://images.unsplash.com/photo-1776410866978-171cc3033431?q=80&w=1471&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt=" profile"
        />
        <h1>{props.user}</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis,
          provident! {props.user}
        </p>
        <button>View Profile</button>
      </div>
    
    
  )
}

export default Card
