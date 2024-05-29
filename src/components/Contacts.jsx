import { useState } from "react";
import { v4 } from "uuid";

//Components
import ContactsList from "./ContactsList";
import inputs from "../constants/inputs";

//style
import styles from "./Contacts.module.css";

function Contacts() {
  const [alert, setAlert] = useState("");
  const [contacts, setContacts] = useState([]);
  const [contact, setContact] = useState({
    id: "",
    name: "",
    lastName: "",
    email: "",
    phone: "",
  });

  const changeHandler = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    // console.log({ name, value });

    setContact((contacts) => ({ ...contacts, [name]: value }));
  };

  const addHandler = () => {
    if (
      !contact.name ||
      !contact.lastName ||
      !contact.email ||
      !contact.phone
    ) {
      setAlert("Please Enter Valid Data!");
      return;
    }
    setAlert(""); //delete alert bad az click add contact
    const newContact = { ...contact, id: v4() }; //ezafe kardane id
    setContacts((contacts) => [...contacts, newContact]);
    // console.log(contacts);
    //bardashtane maghadir dar UI bad az zadane add contact
    setContact({
      name: "",
      lastName: "",
      email: "",
      phone: "",
    });
  };

  const deleteHandler = (id) => {
    const newContacts = contacts.filter((contact) => contact.id !== id);
    setContacts(newContacts);
  };

  return (
    <div className={styles.container}>
      <div className={styles.form}>
        {inputs.map((input, index) => (
          <input
            key={index}
            type={input.type}
            name={input.name}
            placeholder={input.placeholder}
            value={contact[input.name]}
            onChange={changeHandler}
          />
        ))}
        <button onClick={addHandler}> Add Contact </button>
      </div>
      <div className={styles.alert}> {alert && <p>{alert} </p>} </div>
      {/* ContactsList: props to ContactsList.jsx */}
      <ContactsList contacts={contacts} deleteHandler={deleteHandler} />{" "}
    </div>
  );
}

export default Contacts;

// {
/* <input
  type="text"
  name="name"
  placeholder="First Name"
  value={contact.name}
  onChange={changeHandler}
/>
<input
  type="text"
  name="lastName"
  placeholder="Last Name"
  value={contact.lastName}
  onChange={changeHandler}
/>
<input
  type="email"
  name="email"
  placeholder="Email"
  value={contact.email}
  onChange={changeHandler}
/>
<input
  type="number"
  name="phone"
  placeholder="Phone"
  value={contact.phone}
  onChange={changeHandler}
/> */
// }
