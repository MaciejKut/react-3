var ContactForm = React.createClass({
    propTypes: {
        contact: React.PropTypes.object.isRequired
    },

    render: function () {
        return (
            React.createElement('form', { className: 'contactForm' },
                React.createElement('div', { className: 'inputFields1' },
                    React.createElement('div', { className: 'singleIput' },
                        React.createElement('p', { className: 'contactFormLabel' }, 'Imię:'),
                        React.createElement('input', {
                            type: 'text',
                            placeholder: 'Imię',
                            value: this.props.contact.firstName,
                        }),
                    ),
                    React.createElement('div', { className: 'singleInput' },
                        React.createElement('p', { className: 'contactFormLabel' }, 'Nazwisko:'),
                        React.createElement('input', {
                            type: 'text',
                            placeholder: 'Nazwisko',
                            value: this.props.contact.lastName,
                        }),
                    ),
                ),
                React.createElement('div', { className: 'inputFields1' },
                    React.createElement('div', { className: 'singleInput' },
                        React.createElement('p', { className: 'contactFormLabel' }, 'email:'),
                        React.createElement('input', {
                            type: 'email',
                            placeholder: 'Email',
                            value: this.props.contact.email,
                        }),
                    ),
                    React.createElement('button', { type: 'submit' }, "Dodaj kontakt")
                ),
            )
        )
    },
})