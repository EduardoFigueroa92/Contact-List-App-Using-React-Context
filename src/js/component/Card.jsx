import React from "react";

export const Card = (props) => {
    return (
        <div className="card" style={{width: "18rem" }}>
            <img src={props.img} className="card-img-left" alt="..."/>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item">{props.nombre}</li>
                    <li className="list-group-item">{props.direccion}</li>
                    <li className="list-group-item">{props.telefono}</li>
                    <li className="list-group-item">{props.email}</li>
                </ul>
                <div className="card-body">
                    <a href="#" className="card-link"><i class="fas fa-pencil-alt"></i></a>
                    <a href="#" className="card-link"><i class="fas fa-trash-alt"></i></a>
                </div>
        </div>

);
}
export default Card;