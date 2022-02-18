import React from "react";
 
import { Link } from "react-router-dom";

const useStyles =  ((theme) => ({
  navlinks: {
    marginLeft: theme.spacing(10),
    display: "flex",
  },
 logo: {
    flexGrow: "1",
    cursor: "pointer",
  },
  link: {
    textDecoration: "none",
    color: "white",
    fontSize: "20px",
    marginLeft: theme.spacing(20),
    "&:hover": {
      color: "yellow",
      borderBottom: "1px solid white",
    },
  },
}));

function Navbar() {
 

  return (
   
          <div >
            <Link to="/" >
              Home
            </Link>
            <Link to="/about" >
              About
            </Link>
            <Link to="/contact" >
              Contact
            </Link>
            <Link to="/faq" >
              FAQ
            </Link>
          </div>

  );
}
export default Navbar;