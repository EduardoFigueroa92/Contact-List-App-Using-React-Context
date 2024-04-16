import React from "react";

export const Formulario = () => {
    return (
<>
<div className="container">
<div className="mt-5">
        <label className="form-label d-flex text-start"><i className="fa fa-user bigicon mx-2" style={{color: "#ffff",fontSize : 24}}></i>Full Name</label>
        <input type="email" className="form-control"  placeholder="Full Name" />
    </div>
    <div className="my-3">
        <label  className="form-label d-flex text-start"><i className="fas fa-envelope mx-2" style={{color: "#ffff",fontSize : 24}}></i>Email</label>
        <input type="email" className="form-control" placeholder="name@example.com" />
    </div>
    <div className="my-3">
        <label  className="form-label d-flex text-start"><i class="fas fa-phone-square mx-2" style={{color: "#ffff",fontSize : 24}}></i>Phone</label>
        <input type="text" className="form-control"  placeholder="+34-666-66-66-66" />
    </div>
    <div className="my-3">
        <label className="form-label d-flex text-start"><i class="fas fa-map-marker-alt mx-2" style={{color: "#ffff", fontSize : 24}}></i>Address</label>
        <input type="email" className="form-control"  placeholder="Address" />
</div>
</div>
        <Link to="/">
            <button className="btn btn-primary">Back home</button>
        </Link>
</>

);
}
export default Formulario;
















    export default Formulario;