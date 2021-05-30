import React from 'react'

import './competitions.css'

import SearchPanel from '../search-panel/searchPanel'


export default class Competitions extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        error: null,
        isLoaded: false,
        items: [],
        term: '',
        competitionsInfo: {}
      }
    }
  
    
  
    componentDidMount() {
      fetch('http://api.football-data.org/v2/competitions', {headers:{'X-Auth-Token': '74fdf8bc660c4852bbcf2154369b933d'}})
        .then(res => res.json())
        .then(
          (result) => {
            console.log(result)
            this.setState({
              isLoaded: true,
              items: result.competitions
            });
          },
          (error) => {
            this.setState({
              isLoaded: true,
              error
            });
          }
        )
    }
  
    onSearchChange = (term) => {
      this.setState({term});
    };

    search(items, term){
      if(term.length === 0){
        return items
      }
      return items.filter((item)=>{
        return item.name
              .toLowerCase()
              .indexOf(term.toLowerCase()) >-1;
      });
    }
    
    showInfo(item){
      this.setState({
        competitionsInfo: item
      })
    }
    
  
    render(){
      
      const {error, isLoaded, items, term, competitionsInfo} = this.state;
      const searchItems = this.search(items, term);
      if(error) {
        return <p>Error{error.messege}</p>
      } else if (!isLoaded) {
        return <p>Loading...</p>
      } else {
        return (
          <div className="competitionsWrapper">
            <h4>Competitions</h4>
            <div>{competitionsInfo.name}</div>
            <SearchPanel onSearchChange={this.onSearchChange}/>
            <ul>
            {searchItems.map(item=>(
              <li key={item.id} onClick={()=>{this.showInfo(item)}}>
                {item.name}
                
              </li>
            ))}
          </ul>
          </div>
          
            
        )
      }
    }
  
  }