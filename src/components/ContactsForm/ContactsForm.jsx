import { Label, Form, Title, Input, Add } from './ContactsForm.styled';
import { nanoid } from 'nanoid';
import { addContactsThunk } from 'redux/contactThunk';
import { useDispatch, useSelector } from 'react-redux';


export const ContactForm = () => {
  const contacts = useSelector(state => state.contacts.items);
  const dispatch = useDispatch();

  const nameInputId = nanoid();
  const numberInputId = nanoid();

  const handleSubmit = e => {
    e.preventDefault();

    const contact = {
      id: nanoid(),
      name: e.target.name.value,
      phone: e.target.number.value,
    };
    if (contacts.find(({ name }) => name === contact.name)) {
      alert('sorry, something went wrong');
      return;
    }
    dispatch(addContactsThunk(contact));
    alert(' Add contact');
    e.target.reset();
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Label htmlFor={nameInputId}>
        <Title>Name</Title>
        <Input
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          id={nameInputId}
        />
      </Label>

      <Label htmlFor={numberInputId}>
        <Title>Number</Title>
        <Input
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          id={numberInputId}
        />
      </Label>
      <Add type="submit">Add contact</Add>
    </Form>
  );
};