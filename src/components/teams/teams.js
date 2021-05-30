import React from 'react';

import './teams.css'

import SearchPanel from '../search-panel/searchPanel'

import InfoCard from '../info-card/teamInfoCard'


export default class Teams extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        error: null,
        isLoaded: false,
        items: [],
        term: '',
        infoData: {}
        
      }
    }
  
    componentDidMount() {
      fetch('http://api.football-data.org/v2/teams', {headers:{'X-Auth-Token': '74fdf8bc660c4852bbcf2154369b933d'}})
        .then(res => res.json())
        .then((result)=>{
          console.log(result)
          this.setState({
            isLoaded: true,
            items: result.teams
          })
        },
        
        (error) => {
          this.setState({
            isLoaded: true,
            error
          });
        })
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

    showData(data){
      this.setState({infoData: data});
      console.log(this.state)
    }
  
    render(){
      
      const {error, isLoaded, items, term, infoData} = this.state;
      const searchItems = this.search(items, term);

      if(error) {
        return <p>Error{error.messege}</p>
      } else if (!isLoaded) {
        return <p>Loading...</p>
      } else {
        return (
          <div className="teamsContainer">
            <h4>Teams</h4>
            <SearchPanel onSearchChange={this.onSearchChange}/>
            <div className="teamsWrapper">
              <div className="teamsListWrapper">
                <ul className="teamsList">
                  {searchItems.map(item=>(
                    <li className="teamListItem" key={item.id} onClick={()=>{this.showData(item)}}>
                    {item.shortName}
                    </li>
                  ))}
              </ul>
              </div>
              <div className="teamInfoWrapper">
                <InfoCard imgUrl={infoData.crestUrl} title={infoData.name}
                          website={infoData.website}
                          clubColors={infoData.clubColors}/>
              </div>
            </div>
          </div>

          

            
          
            
        )
      }
    }
  
  
  
  }
  
  