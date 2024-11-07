

const Card = ({user}) => {
  return (
    <>
    <h2>Gracias {user.nombre} por registrarte!</h2>
    <h3>Tu email es {user.email}</h3>
    </>
  )
}

export default Card