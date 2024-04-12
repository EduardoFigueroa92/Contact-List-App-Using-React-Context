import React from "react";

import Card from "./Card";
import Button from "./Button";
import Formulario from "./Formulario";
import Alert from "./Alert";


const Home = () => {
    return (
        <div className="container">
            <Button />
            <div className="row" >
                <Card
                    img={"https://w7.pngwing.com/pngs/935/68/png-transparent-cartoon-self-portrait-drawing-portrait-painting-animation-comics-face-comic-book.png"}
                    nombre={ }
                    direccion={ }
                    telefono={ }
                    email={ }
                />
                <Formulario />
                <Alert />



            </div>
        </div>






    );
}
export default Home;

















export default Home;