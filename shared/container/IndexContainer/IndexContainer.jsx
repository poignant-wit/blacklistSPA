import React, { PropTypes, Component } from 'react';
import { connect } from 'react-redux';
import Header from '../../components/Header/Header.jsx'
import Footer from '../../components/Footer/Footer.jsx'
import SearchBar from '../../components/SearchBar/SearchBar.jsx'
import SearchResult from '../../components/SearchResult/SearchResult.jsx'
import { testAction } from '../../redux/actions/index'
import { bindActionCreators } from 'redux'

class IndexContainer extends Component{

    constructor(props){
        super(props);
    }


    render(){
        return(
                <div>
                    <SearchBar onSubmit={(text) => this.props.testing(text)}/>
                    <SearchResult results={this.props.test}/>

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
            testing: testAction
        },
        dispatch
    )
}



export default connect(mapStateToProps, mapDispatchToProps)(IndexContainer);

