import React from "react";
import ReactDOM from "react-dom";
import { createRoot }from 'react-dom/client';

import store from "./Redux/Store";
import {userAdded, userRemoved, userUpdated } from "./Redux/Actions";


import "./index.css";

import Header from "./Header";
import Footer from "./Footer";

console.log( store.getState() );
store.dispatch( userAdded  (
                    {
                        "id":100,
                        "firstname":"Steve",
                        "lastname":"Jes",
                        "email":"SteveJes@telanganainfo.com",
                        "birthDate":"1973-01-22",
                        "login":{
                            "uuid":"1a0eed01-9430-4d68-901f-c0d4c1c3bf22",
                            "username":"stevejes",
                            "password":"jsonplaceholder.org",
                            "md5":"c1328472c5794a25723600f71c1b4586",
                            "sha1":"35544a31cc19bd6520af116554873167117f4d94",
                            "registered":"2023-01-10T10:03:20.022Z"
                        },
                        "address":{
                            "street":"123 Main Street",
                            "suite":"Apt. 4",
                            "city":"Anytown",
                            "zipcode":"12345-6789",
                            "geo":{
                                "lat":"42.1234",
                                "lng":"-71.2345"
                            }
                        },
                        "phone":"(555) 555-1234",
                        "website":"www.telagnanainfo.com",
                        "company":{
                            "name":"ABC Company",
                            "catchPhrase":"Innovative solutions for all your needs",
                            "bs":"Marketing"
                        }
                    }
                  )
);

console.log( store.getState() );
store.dispatch( userRemoved( 1) );
console.log( store.getState() );
store.dispatch( userUpdated (
                    {
                        "id":100,
                        "firstname":"Steve",
                        "lastname":"Jes",
                        "email":"SteveJes@telanganainfo.com",
                        "birthDate":"1975-01-22",
                        "login":{
                            "uuid":"1a0eed01-9430-4d68-901f-c0d4c1c3bf22",
                            "username":"stevejes",
                            "password":"jsonplaceholder.org",
                            "md5":"c1328472c5794a25723600f71c1b4586",
                            "sha1":"35544a31cc19bd6520af116554873167117f4d94",
                            "registered":"2023-01-10T10:03:20.022Z"
                        },
                        "address":{
                            "street":"123 Main Street",
                            "suite":"Apt. 4",
                            "city":"Anytown",
                            "zipcode":"12345-6789",
                            "geo":{
                                "lat":"42.1234",
                                "lng":"-71.2345"
                            }
                        },
                        "phone":"(555) 555-1234",
                        "website":"www.telagnanainfo.com",
                        "company":{
                            "name":"ABC Company",
                            "catchPhrase":"Innovative solutions for all your needs",
                            "bs":"Marketing"
                        }
                    }
                  )
);

console.log( store.getState() );


const App = () => (
 
 
  <div className="container">
    
    <Header  > </Header>
    
    <div style={{  padding:"25px"}}> 
      Home Page Content
    </div>
    <Footer></Footer>
  </div>
);
const container = document.getElementById('app');
const root = createRoot(container);

root.render(<App />);
