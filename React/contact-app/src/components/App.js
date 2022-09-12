import React, {useState, useEffect} from "react";
import { BrowserRouter as Router , Switch, Route} from "react-router-dom";
import { v4 as uuid } from "uuid";
import "./App.css";
import Header from "./Header";
import AddContact from "./AddContact";
import ContactList from "./ContactList";


function App() {

  const LOCAL_STORAGE_KEY = "contacts";
  const [contacts, setContacts ] = useState( []);
  
  const addContactHandler = (contact) => {
    setContacts(
      [ ...contacts, { id: uuid(), ...contact } ]
    )
    console.log( "contact :",{contacts})

  }

  const removeContactHandler = (id) => {
    const newContactList = contacts.filter((contact) => {
      return contact.id !== id;
    });
    setContacts( newContactList);
  }

  useEffect ( () => {
    const retriveContacts = JSON.parse(localStorage.getItem( LOCAL_STORAGE_KEY ) );
    console.log( "retrv :" , retriveContacts)
    if(retriveContacts) setContacts(retriveContacts)
  }, []
  );
  useEffect ( () => {
    if(contacts.length > 0) localStorage.setItem( LOCAL_STORAGE_KEY, JSON.stringify(contacts))
  }, [contacts]

  );
  return (
    <div>
      <Router>
        <Header />        
        <AddContact addContactHandler={addContactHandler}/>   
        <ContactList contacts={contacts}    getContactId={removeContactHandler} />    
      </Router>           
    </div>
  );
}

export default App;
