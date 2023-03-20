import { Component } from 'react';

import ContactForm from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';
import Filter from './Filter/Filter';
import { Layout } from './Layout/Layout';

export class App extends Component {
  state = {
    contacts: [],
    filter: ''
  };

  formSubmitHandler = (data) => {
    const filterdContacts = this.state.contacts.map(contact => contact.name)
      .some(name => name === data.name);
    const someContact = filterdContacts;
    if (someContact) {
      return alert(`${data.name}, is already in contacts`);
    } 
    else {
    this.setState(prevState => {
      return {
      contacts: [...prevState.contacts, {...data},],
    }})
  };
  }

  handleFilterChange = evt => {
    this.setState({ filter: evt.currentTarget.value })
  };

  filteredContacts = () => {
    const { contacts, filter } = this.state;
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  };

  onDelete = (name) => {
    this.setState(prevState => ({
    contacts: prevState.contacts.filter(contact => contact.name !== name),
  }
  ));
}

  componentDidUpdate(prevProps, prevState) {
    if (this.state.contacts !== prevState.contacts) {
      localStorage.setItem('contacts', JSON.stringify(this.state.contacts))
    }
  };

  componentDidMount () {
    const contacts = localStorage.getItem('contacts');
    const parsedContacts = JSON.parse(contacts);

    if(parsedContacts) {
      this.setState({contacts: parsedContacts})
    }
  };

  render() {
    return (
      <Layout>
        <h1>Phonebook</h1>
        <ContactForm 
        onSubmit={this.formSubmitHandler} />
        <h2>Contacts</h2>
        <Filter
        value={this.state.filter}
        onChange={this.handleFilterChange} />
        {this.filteredContacts().length > 0 && <ContactList 
        filteredContacts={this.filteredContacts}
        onDelete={this.onDelete} />}
      </Layout>
    )
  }
}