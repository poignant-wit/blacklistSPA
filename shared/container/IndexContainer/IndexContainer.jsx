import React, { PropTypes, Component } from 'react';
import Header from '../../components/Header/Header.jsx'
import Footer from '../../components/Footer/Footer.jsx'
import SearchBar from '../../components/SearchBar/SearchBar.jsx'

class IndexContainer extends Component{


    render(){
        return(
                <div>
                    <SearchBar onSubmit={text => console.log(text)}/>
                </div>

            )
    }


}


export default IndexContainer;

