import React, { PropTypes, Component } from 'react';


class SearchBar extends Component {

    constructor(props) {
        super(props);
        this.state = {
            term: ''
        }
    }

    render() {
        return (
            <form onSubmit={event => this._onSubmit(event)}>
                <input type="text" onChange={event => this.setState({term: event.target.value})}/>
                <span>
                    <button type="submit">Press</button>
                </span>
            </form>
        )
    }

    _onSubmit(event) {
        event.preventDefault();
        this.props.onSubmit(this.state.term)
    }

}

export default SearchBar;