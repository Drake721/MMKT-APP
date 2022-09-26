import React from "react";
import "../../assets/css/login.css"
import { Link } from 'react-router-dom';
import authLayout from "../../hoc/authLayout";
const URL_LOGIN = "http://localhost/ws-login/login.php";


class LoginPage extends React.Component {
    constructor(props){
        super(props);

        this.refUsuario = React.createRef(null);
        this.refClave = React.createRef(null);
        this.state = {};
        
        
    }


    render(){
        const enviarData = async (url, data)=> {

            const resp = await fetch (url, {
                method: 'POST',
                body: JSON.stringify(data),
                headers: {  
                    'content-type': 'application/json'
                }
            } );
            //console.log(resp);
            const json = await resp.json();
            //console.log(json);
            return json;
        }
        const handlelogin= async ()=> {
            const data = {
                "usuario" : this.refUsuario.current.value,
                "clave" : this.refClave.current.value
            };
            console.log(data);
            const respuestaJson = await enviarData (URL_LOGIN, data);
            console.log("respuesta desde el evento", respuestaJson.conectado);

            this.props.acceder(respuestaJson.conectado);
        
        }

        return <>
            <form className="login-form">
                <div className="d-flex align-items-center my-4">
                    <h1 className="text-center fw-normal mb-0 me-3">Iniciar Sesión</h1>
                </div>
                {/* <!-- Email input --> */}
                <div className="form-outline mb-4">
                    <label className="form-label" htmlFor="form3Example3">Email</label>
                    <input type="email" id="form3Example3" className="form-control form-control-lg"
                    placeholder="Ingresa una dirección de email valida" ref={this.refUsuario} />
                </div>

                {/* <!-- Password input --> */}
                <div className="form-outline mb-3">
                    <label className="form-label" htmlFor="form3Example4">Contraseña</label>
                    <input type="password" id="form3Example4" className="form-control form-control-lg"
                    placeholder="Ingresa tu contraseña" ref={this.refClave} />
                </div>

                <div className="d-flex justify-content-between align-items-center">
                    {/* <!-- Checkbox --> */}
                    <div className="form-check mb-0">
                    <input className="form-check-input me-2" type="checkbox" value="" id="form2Example3" />
                    <label className="form-check-label" htmlFor="form2Example3">
                        Recordar credenciales
                    </label>
                    </div>
                    <Link to="/reset-password" className="text-body">Olvidaste tu clave?</Link>
                </div>
                <div className="alert alert-danger">
                    error
                </div>
                <div className="text-center text-lg-start mt-4 pt-2">
                    <Link to="/" type="button" onClick={ handlelogin } className="btn btn-primary btn-lg">Acceder</Link>
                    <p> </p><br />
                </div>
            </form>
        </>
    }
}

export default authLayout(LoginPage);