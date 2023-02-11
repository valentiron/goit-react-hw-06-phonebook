import Filter from './Filter/Filter';
import ContactList from './ContactsList/ContactsList';
import ContactForm from './ContactForm/ContactForm';

export default function App() {

  return (
    <div
      style={{
        padding: '15px 15px',
      }}
    >
      <h1>Phonebook</h1>
      <ContactForm />
      <h2>Contacts</h2>
      <Filter />
      <ContactList />
    </div>
  );
}
