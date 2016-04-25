import React, { PropTypes, Component } from 'react';
import { connect } from 'react-redux';

import signInUser from '../../redux/actions/auth';
import SignInForm from '../../components/SignInForm/SignInForm.jsx'

import { reduxForm } from 'redux-form';
import InputField from '../../components/InputField/InputField.jsx';


export default class SignInPage extends Component{

    constructor(props){
        super(props);
    }


    render(){

        const { fields:{ email, password }, handleSubmit } = this.props;

        console.log(email);
        return(
            <div>
                <form onSubmit={ handleSubmit(this.props.signInUser) }>
                    <input type="text" {...email}/>
                    <br/>
                    <input type="text" {...email}/>
                    <br/>
                    <button type="submit">SIGNIN</button>


                </form>
            </div>

        )
    }


}

export default reduxForm({
    form: 'SignInForm',
    fields: ['email', 'password']
}, null, { signInUser })(SignInPage)






