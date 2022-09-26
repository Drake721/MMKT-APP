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
                    <h6 className="border-bottom pb-2 mb-0 mb-3">Cambiar contraseña </h6>

                    <div className="row">
                        <div className="col-4">
                            <p>Su contraseña debe contener.</p>
                            <p> <i className="fa fa-check"></i> Al menos 8 caracteres.</p>
                            <p> <i className="fa fa-check"></i> Al menos un número.</p>
                            <p> <i className="fa fa-check"></i> Al menos un caracter especial.</p>
                            <p> <i className="fa fa-check"></i> Mesclar mayusculas y minusculas.</p>
                        </div>
                        <div className="col-8">
                            <form>
                                <div className="mb-3">
                                    <label htmlFor="exampleInputEmail1" className="form-label">Contraseña actual</label>
                                    <div className="input-group mb-3">
                                        <input type="password" className="form-control" placeholder="Contraseña actual" aria-label="Recipient's username" aria-describedby="basic-addon2"/>
                                        <span className="input-group-text" id="basic-addon2"><i className="fa fa-key"></i></span>
                                    </div>
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="exampleInputEmail1" className="form-label">Nueva contraseña</label>
                                    <div className="input-group mb-3">
                                        <input type="password" className="form-control" placeholder="Nueva contraseña" aria-label="Recipient's username" aria-describedby="basic-addon2"/>
                                        <span className="input-group-text" id="basic-addon2"><i className="fa fa-key"></i></span>
                                    </div>
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="exampleInputEmail1" className="form-label">Confirmar nueva contraseña</label>
                                    <div className="input-group mb-3">
                                        <input type="password" className="form-control" placeholder="Confirmar nueva contraseña" aria-label="Recipient's username" aria-describedby="basic-addon2"/>
                                        <span className="input-group-text" id="basic-addon2"><i className="fa fa-key"></i></span>
                                    </div>
                                </div>
                                <hr/>
                                <button type="submit" className="btn btn-default">Enviar</button>
                            </form>
                        </div>
                    </div>
                </div>
            
        </>
    }
}

export default userProfileLayout(ProfilePage);