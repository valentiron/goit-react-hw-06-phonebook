import { useSelector } from 'react-redux';
import ContactsItem from '../ContactsItem/ContactsItem';

const ContactList = () => {
  const contacts = useSelector(state => state.contacts);
  const filter = useSelector(state => state.filter);

  const filterContacts = getFilterContacts();

  function getFilterContacts() {
    const lowercaseFilter = filter.toLowerCase();

    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(lowercaseFilter)
    );
  }

  return (
    <>
      <ul>
      {filterContacts.map(({id, name, number}) => (
          <ContactsItem
            key={id}
            contact={{ id, name, number }}
          />
        ))}
      </ul>
    </>
  );
};

export default ContactList;