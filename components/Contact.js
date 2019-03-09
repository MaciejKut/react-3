var Contact = React.createClass({
    propTypes: {
        item: React.PropTypes.object.isRequired,
    },
    render: function () {
        return (
            React.createElement('li', {
                    className: 'contactItem'
                },
                React.createElement('div', {
                        className: 'inputFields1'
                    },
                    React.createElement('div', {
                            className: 'singleInput'
                        },
                        React.createElement('img', {
                            className: 'contactImage',
                            src: 'https://cdn2.iconfinder.com/data/icons/new-year-resolutions/64/resolutions-09-512.png'
                        }),
                    ),
                    React.createElement('div', {
                            className: 'singleInput'
                        },
                        React.createElement('p', {
                            className: 'contactLabel'
                        }, 'Imię: ' + this.props.item.firstName),
                        React.createElement('p', {
                            className: 'contactLabel'
                        }, 'Nazwisko: ' + this.props.item.lastName),
                    ),
                ),
                React.createElement('a', {
                    className: 'contactEmail',
                    href: 'mailto:' + this.props.item.email
                }, this.props.item.email)
            )
        )
    },
});