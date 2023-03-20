import { Component } from 'react';
import { Div, Label, Btn, Input } from './ContactForm.styled';
import { nanoid } from 'nanoid';

export default class ContactForm extends Component {
    state = {
        name: '',
        number: ''
    };

    handleInputChange = evt => {
    const { name, value } = evt.currentTarget;

    this.setState({ 
      [name]:  value});
    };

    handleSubmit = evt => {
        evt.preventDefault();

        this.props.onSubmit(this.state);

        this.reset();
    };

    reset = () => {
        this.setState({ name: '', number: ''});
    };

    nameInputId = nanoid();
    numberInputId = nanoid();
    
    render() {
    return (
        <Div>
            <form onSubmit={this.handleSubmit}>
            <Label htmlFor={this.nameInputId}>
                Name
                    <Input
                    id={this.nameInputId}
                    type="text"
                    name="name"
                    value={this.state.name}
                    pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                    title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                    required
                    onChange={this.handleInputChange}
                />
            </Label>
            <Label htmlFor={this.numberInputId}>
                Number
                    <Input
                    id={this.numberInputId}
                    type="tel"
                    name="number"
                    value={this.state.number}
                    pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                    title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                    required
                    onChange={this.handleInputChange}
                />
            </Label>
            <Btn type="submit">Add contact</Btn>
            </form>
        </Div>
    )
    }
};