import React from "react";
import { NavLink } from "react-router-dom";
import "./../assets/css/profile.css";
import adminLayout from "../hoc/adminLayout"

class PageError extends React.Component {
    constructor(props){
        super(props);

        this.state = {};
    }

    
    render(){
        return(
            <>
        <div className="Error-form">
            <div className="Error-container2" >
                <img alt="hey" src={require('./../assets/images/Cis.png')} className="img-fluid"/>
                <h3 className="tittleSError"> Error 404<br></br> <br></br><br></br></h3>
                <h3 className="tittleSError"> Pagina no encontrada <br></br><br></br><br></br></h3>
                <h2 className="tittleSError"> Disculpe las molestias <br></br><br></br><br></br></h2>
            <NavLink to="/" className="tittleSErrorBack"> Volver al Inicio  </NavLink>
            </div>
        </div>
        </>
        )  
        
    }
}
export default adminLayout(PageError);