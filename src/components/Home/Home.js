import React, { useEffect, useState } from 'react';
import League from '../League/League';

const Home = () => {
    const [teams, setTeams] = useState([]);
    useEffect(() =>{
        fetch('https://www.thesportsdb.com/api/v1/json/1/search_all_teams.php?l=English%20Premier%20League')
        .then(res => res.json())
        .then(data => setTeams(data.teams))
    }, [])
    return (
        <div>
            <h1 style={{textAlign: 'center', color: 'white'}}>Choose your favorite team</h1>
            {
                teams.map(team => <League team={team}></League>)
            }
        </div>
    );
};

export default Home;