import React, { PropTypes, Component } from 'react';
import { connect } from 'react-redux';

import { signInUser } from '../../redux/actions/auth';
import { reduxForm } from 'redux-form';


export default class SignInPage extends Component {

    constructor(props) {
        super(props);
    }

    render() {

        const { fields:{ email, password }, handleSubmit, auth } = this.props;

        if (auth.isAuthenticated) {
            return (
                <div><h1>HELLO</h1></div>
            )
        }
        return (
            <div>
                <form onSubmit={ handleSubmit(this.props.signInUser) }>
                    <input type="text" {...email}/>
                    <br/>
                    <input type="text" {...password}/>
                    <br/>
                    <button type="submit">SIGNIN</button>
                </form>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {auth: state.auth}
}

export default reduxForm({
    form: 'SignInForm',
    fields: ['email', 'password']
}, mapStateToProps, {signInUser})(SignInPage)






