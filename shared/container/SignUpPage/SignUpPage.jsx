import React, { PropTypes, Component } from 'react';
import { connect } from 'react-redux';
import { reduxForm } from 'redux-form';

import { signUpUser } from '../../redux/actions/auth';



export default class SignUpPage extends Component{

    constructor(props){
        super(props);
    }


    /*---METHOD FOR RENDER INFO PANEL---*/
    renderInfo(){
        if(this.props.auth.info){
            return(
              <h2>{this.props.auth.info}</h2>
            );
        }


    }

    render(){


        const { fields:{ name, email, password }, handleSubmit, auth } = this.props;

        if(auth.sendConfirmation){
            return (
                <div>{this.renderInfo()}</div>
            )
        }

        return(
            <div>
                {this.renderInfo()}
                <form onSubmit={ handleSubmit(this.props.signUpUser) }>
                    <input type="text" {...name}/>
                    <br/>
                    <input type="text" {...email}/>
                    <br/>
                    <input type="text" {...password}/>
                    <br/>
                    <button type="submit">РЕГИСТРАЦИЯ</button>
                </form>
            </div>
        )
    }
}


function mapStateToProps(state) {
    return { auth: state.auth }
}

export default reduxForm({
    form: 'SignUpForm',
    fields: ['name', 'email', 'password']
}, mapStateToProps, { signUpUser })(SignUpPage)






