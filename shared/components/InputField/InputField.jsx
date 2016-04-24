import React, { PropTypes, Component } from 'react';


class InputField extends Component {

    constructor(props) {
        super(props);
        this.state = {
            value: ''
        }
    }
    render() {
        return (
                <input type="text" onChange={event => this._handleChange(event)} value={this.state.value}/>
        )
    }
    _handleChange(event) {
        this.setState({value: event.target.value});
        this.props.value = this.state.value;
    }

}

export default InputField;






