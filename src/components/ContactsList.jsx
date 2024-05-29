import ContactItem from "./ContactItem";

//style
import styles from "./ContactList.module.css";

//props of Contacts.jsx file
function ContactsList({ contacts, deleteHandler }) {
  // console.log(contacts);

  return (
    <div className={styles.container}>
      <h3> ContactsLists </h3>
      {contacts.length ? (
        <ul className={styles.contacts}>
          {contacts.map((contact) => (
            <ContactItem
              key={contact.id}
              data={contact}
              deleteHandler={deleteHandler} //props to ContactsItem.jsx
            />
          ))}
        </ul>
      ) : (
        <p className={styles.message}> No Contacts Yet!</p>
      )}
    </div>
  );
}
export default ContactsList;
