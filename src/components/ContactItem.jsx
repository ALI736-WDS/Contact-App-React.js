import React from "react";

//style
import styles from "./ContactItem.module.css";

function ContactItem({
  data: { id, name, lastName, email, phone },
  deleteHandler, //props of ContactsList
}) {
  //   console.log(props);
  return (
    <li className={styles.item}>
      <p>
        {name} {lastName}
      </p>
      <p>
        <span>Email</span> {email}
      </p>
      <p>
        <span>Phone</span>
        {phone}
      </p>
      <button onClick={() => deleteHandler(id)}>Delete</button>{" "}
      {/* func deleteHandler(id) dar file Contacts tarif shode va barayye inke
      contacts va setContacts ro harbar ba props pas nadid be jelo va sholugh nashe, dar file Contacts ke ham array ham id hast, func ro
      tarif kardim va ba props be ContactsList va be inja pas dadim */}
    </li>
  );
}

export default ContactItem;
