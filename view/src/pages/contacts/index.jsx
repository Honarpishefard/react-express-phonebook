import { mainInstance } from "api/constants";
import { Button, Container, LinkComp } from "components";
import React, { useState, useEffect } from "react";

export function Contacts() {
  const [contacts, setContacts] = useState([]);

  useEffect(() => {
    const fetchContacts = async (data) => {
      const info = await mainInstance.get("/contacts", data);
      setContacts(info.data);
    };
    fetchContacts();
  }, [contacts]);

  const cards = () => {
    return contacts.map((i) => (
      <div className="py-2" key={i._id}>
        <div className="flex items-center">
          <p className="font-bold text-xl grow">{i.name}</p>
          <p>{i.number}</p>
        </div>
        <div className="flex gap-12 py-4">
          <Button onClick={() => console.log("edite", i._id)}>Edit</Button>
          <Button onClick={() => mainInstance.post("/contacts", { id: i._id }).then(() => setContacts(contacts))}>
            Delete
          </Button>
        </div>
      </div>
    ));
  };

  return (
    <Container>
      {contacts.length == 0 ? (
        <div className="flex justify-center text-gray-400 py-24">
          No contacts saved
        </div>
      ) : (
        cards()
      )}
      <LinkComp value="Save more contacts" to="/" />
    </Container>
  );
}
