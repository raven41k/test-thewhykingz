import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import {useSelector} from "react-redux";

const TeamCard = ({team}) => {
    const text = useSelector(state => state.teams.text);
    const searchWord = (text) => {
        return team.strTeam.replace(
            new RegExp(text + '(?!([^<]+)?<)', 'gi'),
            `<b style='color: #E3556D'>$&</b>`
        );
    }
    return (
        <Link className="team-list__item" to={'/team/' + team.idTeam}>
            <img className="team-list__item__photo" src={team.strTeamBadge} alt={team.strTeam} />
            <div className="team-list__item__name" dangerouslySetInnerHTML={{
                __html: searchWord(text)
            }} />
        </Link>
    );
}

TeamCard.propTypes = {
    team: PropTypes.object
}

export default TeamCard;