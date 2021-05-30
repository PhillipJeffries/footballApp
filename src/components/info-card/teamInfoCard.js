import React from 'react';

import './teamInfoCard.css';


const InfoCard = (props) => {
    let {title, imgUrl, clubColors, website} = props
    return(
        <div className="teamsInfoCard">
            <img src={imgUrl} alt={title} />
            <h3>{title}</h3>
            <a href={website}>{website}</a>
            <div>club colors: </div>
            <div>{clubColors}</div>

            

        </div>
    )
}

export default InfoCard