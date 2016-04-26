import React, { PropTypes, Component } from 'react';
import { connect } from 'react-redux';
import Header from '../../components/Header/Header.jsx'
import Footer from '../../components/Footer/Footer.jsx'
import SearchBar from '../../components/SearchBar/SearchBar.jsx'
import SearchResult from '../../components/SearchResult/SearchResult.jsx'

import { bindActionCreators } from 'redux'

class InfoPage extends Component{

    constructor(props){
        super(props);
    }


    render(){
        return(
            <div>

                <h2>INFO</h2>

            </div>

        )
    }


}

function mapStateToProps(state){
    return {
        test: state.tests
    };
}

function mapDispatchToProps(dispatch){
    return bindActionCreators(
        {

        },
        dispatch
    )
}



export default connect(mapStateToProps, mapDispatchToProps)(InfoPage);

