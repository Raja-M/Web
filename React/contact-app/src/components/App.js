import React, {useState, useEffect} from "react";
import { BrowserRouter as Router , Routes, Route } from "react-router-dom";
import { v4 as uuid } from "uuid";
import "./App.css";

import api from "../api/contacts";

import Header from "./Header";
import AddContact from "./AddContact";
import ContactList from "./ContactList";
import ContactDetail from "./ContactDetail";


function App() {

  const LOCAL_STORAGE_KEY = "contacts";
  const [contacts, setContacts ] = useState( []);
  
  // RetrieveContacts

  const retrieveContacts = async () => {
    const response =  await api.get("/contacts");
    return response.data ;
  }

  const addContactHandler = async (contact) => {

    const request = {
      id : uuid(),
      ...contact,
    }
    const response = await api.post( "/contacts" , request);
    setContacts(
      [ ...contacts, response.data ] );
  } ; 

  const removeContactHandler = async (id) => {
    await api.delete (`/contacts/${id} `);
    const newContactList = contacts.filter((contact) => {
      return contact.id !== id;
    });
    setContacts( newContactList);
  }

  useEffect ( () => {
/*
    console.log( RetrieveContacts )
    const retriveContacts = JSON.parse(localStorage.getItem( LOCAL_STORAGE_KEY ) );
    console.log( "retrv :" , retriveContacts)
    if(retriveContacts) setContacts(retriveContacts)

*/
  const getAllContacts = async () => {
      const allContacts = await retrieveContacts();
      if ( allContacts ) setContacts(allContacts) ;
    };

    getAllContacts();

  }, []
  );


  useEffect ( () => {
  //   if(contacts.length > 0) localStorage.setItem( LOCAL_STORAGE_KEY, JSON.stringify(contacts))
  }, [contacts]

  );
  return (
    <div>
      <Router>
        <Header />      
        <Routes>
          <Route path="/" exact element={< ContactList contacts={contacts}    getContactId={removeContactHandler} /> } >  </Route>
    
          <Route path="/add" element={<AddContact  addContactHandler={addContactHandler} />}  />
          <Route path="/contact/:id" element={<ContactDetail/>}  />
       
      </Routes>

        { /*
        <AddContact addContactHandler={addContactHandler}/>   
        <ContactList contacts={contacts}    getContactId={removeContactHandler} />  
        */ }  
      </Router>           
    </div>
  );
}

export default App;
