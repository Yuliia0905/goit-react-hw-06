import ContactForm from "./components/ContactForm/ContactForm";
import SearchBox from "./components/SearchBox/SearchBox";
import ContactList from "./components/ContactList/ContactList";
import { RiContactsBook2Fill } from "react-icons/ri";
import "./App.css";

function App() {
  return (
    <div className="container">
      <h1 className="mainTitle">
        Phonebook <RiContactsBook2Fill />
      </h1>
      <ContactForm />
      <SearchBox />
      <ContactList />
    </div>
  );
}

export default App;
