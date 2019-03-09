var Contact = React.createClass({
    propTypes: {
        item: React.PropTypes.object.isRequired,
    },
    render: function () {
        return (
            <li className={'contactItem'}>
                <div className={'inputFields1'}>
                    <div className={'singleInput'}>
                        <img className={'contactImage'} src={'https://cdn2.iconfinder.com/data/icons/new-year-resolutions/64/resolutions-09-512.png'} />
                    </div>
                    <div className={'singleInput'}>
                        <p className={'contactLabel'}>
                            Imię: {this.props.item.firstName}
                        </p>
                        <p className={'contactLabel'}>
                            Nazwisko: {this.props.item.lastName}
                        </p>
                    </div>
                </div>
                <a className={'contactEmail'} href={'mailto:' + this.props.item.email}>
                    {this.props.item.email}
                </a>
            </li>
        );
    },
});