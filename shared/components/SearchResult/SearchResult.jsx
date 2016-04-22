import React, { Component } from 'react';


class SearchResult extends Component {


    constructor(props){
        super(props);
    }

    _renderList() {

        if (this.props.results) {
            return this.props.results.map(result => {
                return (
                    <li>{result.title}</li>
                )
            });
        }

        return (
            <li>NOTHING</li>
        )

    }

    render() {
        return (
            <div>
                <ul>
                    {this._renderList()}
                </ul>
            </div>



        )
    }

}

export default SearchResult;

