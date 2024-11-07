
import { useState } from 'react'
import {appContainer} from "./styles/App.module.css"
import Card from './components/Card'
import Form from './components/Form'

function App() {

  const [show, setShow] = useState(false)
  const [user, setUser] = useState({
    nombre: "",
    email:"",
    password: ""
})
  

  return (
    
      <div className={appContainer}>
        
        {show ? 
        <>
        <h1>Bienvenid@ a nuestro sitio</h1> 
        <Card user={user}/> 
        </>
        
        : 
        <>
        <h1>Formulario de registro:</h1>
        <Form setShow={setShow} setUser={setUser} user={user}/>
        </>
        
        }
        
        
      </div>
    
  )
}

export default App
