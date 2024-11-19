import React from 'react'

function Players(props) {
  return (
     
          
      
    <div className="playersDiv">
         
         

        <img src={props.imgUrl}></img>
       <h3>Name:{props.name} </h3>  
       <h3>Team: {props.team}</h3>  
       <h3> Profession:{props.profession}</h3>
        
      
    </div>
     
     
  )
}

export default Players

