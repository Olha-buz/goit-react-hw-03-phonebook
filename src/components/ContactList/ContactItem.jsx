
import React from 'react';
import css from './ContactList.module.css';

export const ContactItem = ({ id, name, number, onRemove }) => {
    return (
        <li className={css.itemcontact}>
            <p className={css.pItem}>{name}:{number}</p>
            <button
                className={css.buttonremove}
                type="button"
                id={name}
                onClick={() => { onRemove(id) }}>
                Delete
            </button>
        </li>
    );
};