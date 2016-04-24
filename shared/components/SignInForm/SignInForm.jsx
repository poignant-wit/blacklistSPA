import React, { PropTypes, Component } from 'react';
import InputField from '../InputField/InputField.jsx';


class SignInForm extends Component {

    constructor(props) {
        super(props);
        this.state = {
            name: '',
            email: ''
        }
    }
    render() {
        return (
            <form onSubmit={this._onSubmit}>
                <InputField/>
                <br/>
                <InputField/>
                <br/>
                <InputField/>
                <br/>
                <button type="submit">BUTTON</button>

            </form>
        )
    }

    _onSubmit(event) {
        event.preventDefault();
        this.props.onSubmit(this.state.value)
    }


}

export default SignInForm;






