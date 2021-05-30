import React from 'react';

import './searchPanel.css'

export default class SearchPanel extends React.Component {

    state = { 
        term: ''
    };

    onSearchChange = (e) =>{
        const term = e.target.value;
        this.setState({term});
        this.props.onSearchChange(term);
        console.log(this.state.term)
      };

    

    render(){

        return(
            <div>
                <input 
                    className="searchInput"
                    placeholder="search"
                    onChange={this.onSearchChange}>
                </input>
            </div>
        );
    };
};


