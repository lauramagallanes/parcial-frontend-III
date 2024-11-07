import { useState } from "react"
import {formContainer, errors} from "../styles/Form.module.css"

const Form = ({setShow, setUser, user}) => {
    console.log(setShow);
    
    // const [user, setUser] = useState({
    //     nombre: "",
    //     email:"",
    //     password: ""
    // })

    const [error, setError] = useState(false)
    

    const handleSubmit = (event) => {
        event.preventDefault();
        if(user.nombre.length >= 3 && !user.nombre.startsWith(' ') && user.email.length >=6 ){
            setShow(true)
        }else{
            setError(true)
        }

    }
  return (
    <>
    
    <form onSubmit={handleSubmit} className={formContainer}>
        <label >Ingresa tu nombre de usuario</label>
        <input type="text" value={user.nombre} onChange={(event)=>setUser({...user, nombre:event.target.value})}/>
        <label >Ingresa tu email</label>
        <input type="text" value={user.email} onChange={(event)=>setUser({...user, email:event.target.value})} />        
        <label >Ingresa tu contraseña</label>
        <input type="text" value={user.password} onChange={(event)=>setUser({...user, password:event.target.value})} />
        <button>Enviar</button>
        {error ? <h3 className={errors}>Por favor chequea que la informacion sea correcta</h3> : ""}
    </form>
    </>
  )
}

export default Form