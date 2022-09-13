import React from "react";
import user from "../images/user.png";
import {Link} from "react-router-dom";

const ContactCard = (props) => {
    const contact = props.contact;
    
    return(

        <div className="item">
            <img className="ui avatar image" src={user} alt="user"/>
            <div className="content">
                {console.log(props.contact.name)}
                <Link to={ { pathname:`/contact/${contact.id}`}}  state={{contact: props.contact} } >
                    <div className="header">{contact.name}</div>
                    <div> {contact.email}</div>
                </Link>    
                </div>
                <i className="trash alternate outline icon" style={{color: "red", marginTop: "7px"}}
                    onClick={ () => {props.clickHandler(contact.id)}} >
                </i>
                
        </div>

    );
};

export default ContactCard;
