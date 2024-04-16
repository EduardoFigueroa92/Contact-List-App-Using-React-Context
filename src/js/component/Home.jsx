import React,{useContext} from "react"; 
import {Context} from "../store/appContext";

import Formulario from "./Formulario";
import Alert from "./Alert";

const Home = () => {
    const {store,actions }= useContext(Context)
    return (
        <div className="container">
            <Navbar />
            <div className="row" >
                <button onClick={() => actions.createAgenda()}>Crear agenda</button>
                <button onClick={() => actions.createContacto()}>Crear contacto</button>
                <button onClick={() => actions.getContacts()}>Traer contacto</button>
                <Formulario />
                <Alert />



            </div>
        </div>






    );
}
export default Home;

















export default Home;