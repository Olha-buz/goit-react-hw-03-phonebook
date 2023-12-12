import PropTypes from 'prop-types';
import React from 'react';
import { ContactItem } from './ContactItem';
import css from './ContactList.module.css';

const ContactList = ({ contacts, onRemove }) => {
    return (
        <ul className={css.contacts}>
            {contacts.map(({ id, name, number }) => (
                <ContactItem
                    key={id}
                    id={id}
                    name={name}
                    number={number}
                    onRemove={onRemove}
                />
            ))}
        </ul>
    )
};

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    }).isRequired
  ),
  onRemove: PropTypes.func.isRequired,
};

export default ContactList;