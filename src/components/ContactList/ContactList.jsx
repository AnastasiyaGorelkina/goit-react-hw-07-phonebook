import { useEffect } from "react";
import { Item, List, Button, Loading } from "./ContactList.styled";
import { useDispatch, useSelector } from "react-redux";
import { deleteContactsThunk, getContactsThunk } from "redux/contactThunk";

export const ContactList = () => {
  const contacts = useSelector(state => state.contacts.items);
  const filterContact = useSelector(state => state.filter);
  const isLoading = useSelector(state => state.contacts.isLoading);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getContactsThunk());
  }, [dispatch]);

  const deletContact = id => {
    dispatch(deleteContactsThunk(id));
  };

  const getVisibleContacts = () => {
    return contacts.filter(({ name }) =>
      name.toLowerCase().includes(filterContact.filter)
    );
  };

  const visible = getVisibleContacts();

  return (
    <>
      <Loading>{isLoading && <p>Loading...</p>}</Loading>
    <List>
      {visible.map(({ id, name, phone }) => {
        return (
          <Item key={id}>
            {name}: {phone}
            <Button type="button" onClick={() => deletContact(id)}>
              Delete
            </Button>
          </Item>
        );
      })}
      </List>
      </>
  );
};