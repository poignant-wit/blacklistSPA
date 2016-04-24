import React, { PropTypes, Component } from 'react';
import { connect } from 'react-redux';
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
                <form onSubmit={ handleSubmit }>
                    <InputField />
                    <br/>
                    <InputField/>
                    <br/>
                    <InputField/>
                    <br/>
                    <button type="submit">BUTTON</button>

                </form>
            </div>

        )
    }


}

export default reduxForm({
    form: 'SignInForm',
    fields: ['email', 'password']
})(SignInPage)






