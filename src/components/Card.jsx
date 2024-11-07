import {cardContainer} from "../styles/Card.module.css"

const Card = ({user}) => {
  return (
    <div className={cardContainer}>  
      <h2>Gracias {user.nombre} por registrarte!</h2>
      <h3>Tu email es {user.email}</h3>
    </div>
  )
}

export default Card