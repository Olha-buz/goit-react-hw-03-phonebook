import PropTypes from 'prop-types';
import React, { Component } from 'react';

import css from './ContactForm.module.css';

class ContactForm extends Component {
    state = { name: '', number: '' };

    handleChange = evt => {
        const { name, value } = evt.currentTarget;
        this.setState({ [name]: value });
    };

    handleSubmit = evt => {
        evt.preventDefault();
        this.props.onSubmit(this.state);
        this.setState({ name: '', number: '' });
        console.log(this.state);
    }

    render() {
        return (
            <form  className={css.formcontact} onSubmit={this.handleSubmit}>
                <label >
                    <div >
                        Name 
                    </div>
                    <input
                        className={css.inputform}
                        type="text"
                        name="name"
                        value={this.state.name}
                        required
                        onChange={this.handleChange}
                    />
                </label>
                <label >
                    <div >
                        Number 
                    </div>
                    <input
                        className={css.inputform}
                        type="tel"
                        name="number"
                        value={this.state.number}
                        pattern="[0-9]{3}-[0-9]{2}-[0-9]{2}"
                        title="The phone number in the form 000-00-00."
                        required
                        onChange={this.handleChange}
                    />
                </label>
                <button className={css.button}>Add contact</button>
            </form>
        );
    }
}

ContactForm.propTypes = {
    onSubmit: PropTypes.func.isRequired
};

export default ContactForm;