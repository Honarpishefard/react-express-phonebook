import { mainInstance } from "api/constants";
import { Button, LinkComp, Spinner, TextField } from "components";
import React, { useState, useEffect, Suspense } from "react";

const Container = React.lazy(() =>
  import("./../../components/Container/index.jsx")
);

export function Contacts() {
  const [contacts, setContacts] = useState([]);
  const [updateContacts, setUpdateContacts] = useState([]);
  const [editMode, setEditMode] = useState(false);
  const [edit, setEdit] = useState("");

  useEffect(() => {
    const fetchContacts = async (data) => {
      const info = await mainInstance.get("/contacts", data);
      setContacts(info.data);
    };
    fetchContacts();
  }, [updateContacts]);

  const cards = () => {
    return contacts.map((i) => (
      <div className="py-2" key={i._id}>
        {!editMode ? (
          <div className="flex items-center">
            <p className="font-bold text-xl grow">{i.name}</p>
            <p>{i.number}</p>
          </div>
        ) : editMode & (edit === i._id) ? (
          <div className="flex justify-between">
            <TextField
              type="text"
              defaultValue={contacts.filter((i) => i._id === edit)[0].name}
              label="Contact name"
              classes="w-2/5"
            />
            <TextField
              type="number"
              defaultValue={contacts.filter((i) => i._id === edit)[0].number}
              label="contact number"
              classes="w-2/5"
            />
          </div>
        ) : (
          <div className="flex items-center">
            <p className="font-bold text-xl grow">{i.name}</p>
            <p>{i.number}</p>
          </div>
        )}
        <div className="flex gap-12 py-4">
          {!editMode ? (
            <Button
              onClick={() => {
                setEditMode(!editMode);
                setEdit(i._id);
              }}
            >
              Edit
            </Button>
          ) : edit === i._id ? (
            <Button onClick={() => setEditMode(!editMode)}>save</Button>
          ) : (
            <Button
              onClick={() => {
                setEditMode(!editMode);
                setEdit(i._id);
              }}
            >
              Edit
            </Button>
          )}

          <Button
            onClick={() =>
              mainInstance
                .post("/contacts", { id: i._id })
                .then(() => setUpdateContacts(contacts))
            }
          >
            Delete
          </Button>
        </div>
      </div>
    ));
  };

  return (
    <div className="max-w-lg mx-auto">
      <Suspense fallback={<Spinner />}>
        <Container>
          {contacts.length == 0 ? (
            <div className="flex justify-center text-gray-400 py-24">
              No contacts saved
            </div>
          ) : (
            cards()
          )}
          <LinkComp value="Save your contacts" to="/" />
        </Container>
      </Suspense>
    </div>
  );
}
