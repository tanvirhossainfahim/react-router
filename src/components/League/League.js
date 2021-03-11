import React from 'react';

const League = (props) => {
    const {strTeamBadge, strTeam,strAlternate}=props.team;
    
    return (
        
        <div className="home-page">
            <div>
                <img src={strTeamBadge} alt=""/>
            </div>
            <div>
            <h3>{strTeam}</h3>
            <p>{strAlternate}</p>
            <button>Click</button>
            </div>
        </div>
    );
};

export default League;