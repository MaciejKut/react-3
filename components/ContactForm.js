var ContactForm = React.createClass({
    propTypes: {
        contact: React.PropTypes.object.isRequired
    },

    render: function () {
        return (
            <form className='contactForm'>
                <div className='inputFields1'>
                    <div className='singleIput'>
                        <p className='contactFormLabel'>Imię: </p>
                        <input type='text' placeholder='Imię' value={this.props.contact.firstName}></input>
                    </div>
                    <div className='singleIput'>
                        <p className='contactFormLabel'>Nazwisko: </p>
                        <input type='text' placeholder='Nazwisko' value={this.props.contact.lastName}></input>
                    </div>
                </div>
                <div className='inputFields1'>
                    <div className='singleIput'>
                        <p className='contactFormLabel'>Imię: </p>
                        <input type='email' placeholder='Email' value={this.props.contact.email}></input>
                    </div>
                    <button type='submit'>Dodaj kontakt</button>
                </div>

            </form>
        )
    },
})