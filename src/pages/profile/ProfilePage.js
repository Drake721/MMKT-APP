import React from "react";
import "../../assets/css/profile.css"
import userProfileLayout from "../../hoc/userProfileLayout";

class ProfilePage extends React.Component {
    constructor(props){
        super(props);

        this.state = {}
    }

    render(){
        return <>
                <div className="my-3 p-3 bg-body rounded shadow-sm">
                    <h6 className="border-bottom pb-2 mb-0 mb-3">Información Personal</h6>
                        <form>
                            <div className="row">
                                <div className="col">
                                    <label htmlFor="exampleInputEmail1" className="form-label">Usuario</label>
                                    <div className="input-group mb-3">
                                        <input type="text" className="form-control" placeholder="Usuario" aria-label="Recipient's username" aria-describedby="basic-addon2"/>
                                        <span className="input-group-text" id="basic-addon2"><i className="fa fa-user"></i></span>
                                    </div>
                                </div>
                                <div className="col">
                                    <label htmlFor="exampleInputEmail1" className="form-label">Email</label>
                                    <div className="input-group mb-3">
                                        <input type="text" className="form-control" placeholder="Email" aria-label="Recipient's username" aria-describedby="basic-addon2"/>
                                        <span className="input-group-text" id="basic-addon2">@</span>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col">
                                    <label htmlFor="exampleInputEmail1" className="form-label">Nombre</label>
                                    <div className="input-group mb-3">
                                        <input type="text" className="form-control" placeholder="Nombre" aria-label="Recipient's username" aria-describedby="basic-addon2"/>
                                        <span className="input-group-text" id="basic-addon2"><i className="fa fa-user"></i></span>
                                    </div>
                                </div>
                                <div className="col">
                                    <label htmlFor="exampleInputEmail1" className="form-label">Apellido</label>
                                    <div className="input-group mb-3">
                                        <input type="text" className="form-control" placeholder="Apellido" aria-label="Recipient's username" aria-describedby="basic-addon2"/>
                                        <span className="input-group-text" id="basic-addon2"><i className="fa fa-user"></i></span>
                                    </div>
                                </div>
                            </div>

                            <div className="row">
                                <div className="col-md-6">
                                    <label htmlFor="exampleInputEmail1" className="form-label">Numero contacto</label>
                                    <div className="input-group mb-3">
                                        <input type="text" className="form-control" placeholder="Numero contacto" aria-label="Recipient's username" aria-describedby="basic-addon2"/>
                                        <span className="input-group-text" id="basic-addon2"><i className="fa fa-mobile"></i></span>
                                    </div>
                                </div>
                            </div>
                           
                            <button type="submit" className="btn btn-default">Enviar</button>
                        </form>
                </div>
            
        </>
    }
}

export default userProfileLayout(ProfilePage);