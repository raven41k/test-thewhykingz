import React from 'react';
import { useSelector } from 'react-redux';
import TeamCard from '../team-card/TeamCard';
import './team-list.scss';

const TeamList = () => {
    const teams = useSelector((state) => state.teams.teams);
    const content = teams?.teams?.map((team, index) => (
        <TeamCard key={index} team={team} />
    ));

    return <div className="team-list">{content}</div>;
};

export default TeamList;
