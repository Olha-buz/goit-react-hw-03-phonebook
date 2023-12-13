import React, { Component } from 'react';
import ContactForm from './ContactForm/ContactForm';
import ContactList from './ContactList/ContactList';
import Filter from './Filter/Filter';
import { nanoid } from 'nanoid';


export default class App extends Component {
  state = {
    contacts: [
          {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
          {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
          {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
          {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},
    ], 
    filter: '',
  };

  componentDidMount() {
    const contactLocalStorage = localStorage.getItem('contactList');
    const parsedContact = JSON.parse(contactLocalStorage);

    if (parsedContact) {
      this.setState({ contacts: parsedContact });
    }
  };

  componentDidUpdate(prevProps, prevState) {
    const prevStateContacts = prevState.contacts;
    const nextStateContacts = this.state.contacts;

    if (prevStateContacts !== nextStateContacts) {
      localStorage.setItem('contactList', JSON.stringify(nextStateContacts));
    }
  }

  addName = ({ name, number }) => {
    const names = this.state.contacts.map(contact =>
      contact.name.toLowerCase()
    );
    const lowerCaseName = name.toLowerCase();

    if (names.indexOf(lowerCaseName) >= 0) {
      alert(name + ' is already in contacts');
      return;
    }
    this.setState(prevState => {
      return {
        contacts: [{ name, number, id:nanoid() }, ...prevState.contacts],
      };
    });
  };

  removeName = index => {
    this.setState(prevState => {
      const newContacts = [];
      prevState.contacts.forEach(contact => {
        if (contact.id !== index) { newContacts.push(contact); }
      });
      return { contacts: newContacts };
    });
  };

  handleFilter = evt => {
    this.setState({ filter: evt.currentTarget.value });
  };

  filterList = () => {
    const normalizedFilter = this.state.filter.toLowerCase();
    const filterList = this.state.contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
    return filterList;
  };
  
  render() {
    return (
      <div
      style={{
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 24,
        color: '#010101',
        marginTop: 48
        }}
      >
        <h2>Phonebook</h2>
        <ContactForm onSubmit={this.addName} />

        <h2>Contacts</h2>
        <Filter onChange={this.handleFilter} value={this.filter} />
        <ContactList contacts={this.filterList()} onRemove={this.removeName} />

      </div>
    )
  }
};
