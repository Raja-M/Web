import React  from "react";
import { useNavigate, useLocation, Link } from "react-router-dom";
import user from "../images/user.png";
 

const ContactDetail = (props) => {

const {state}=useLocation()
 
    
    return(
        <div className = "main">
            <div className="image">
                <img src={user} alt="user"/>
            </div>
            <div className="content">
                <div className="header">{state.contact.name}</div>
                <div className="description"> {state.contact.email} </div>
            </div>
            <Link to="/">
                <div className="center-div">
                    <button className="ui button blue center">Back to Contact List</button>
                </div>
            </Link>

        </div>
    );
};

export default ContactDetail;
