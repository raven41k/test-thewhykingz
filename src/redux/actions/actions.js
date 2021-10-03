import {
    SEARCH_TEAM,
    FETCH_TEAMS,
    FETCH_TEAM,
    LOADING,
    RESET_SEARCH,
    RESET_STATE
} from '../constants';
import axios from 'axios';

export const searchTeam = (text) => (dispatch) => {
    dispatch({
        type: SEARCH_TEAM,
        payload: text
    });
};

export const resetSearch = () => {
    return {
        type: RESET_SEARCH
    };
};

export const fetchTeams = (text) => (dispatch) => {
    axios
        .get(
            `https://www.thesportsdb.com/api/v1/json/1/searchteams.php?t=${text}`
        )
        .then((response) =>
            dispatch({
                type: FETCH_TEAMS,
                payload: response.data
            })
        )
        .catch((err) => console.log(err));
};

export const fetchTeam = (id) => (dispatch) => {
    axios
        .get(
            `https://www.thesportsdb.com/api/v1/json/1/lookupteam.php?id=${id}`
        )
        .then((response) =>
            dispatch({
                type: FETCH_TEAM,
                payload: response.data
            })
        )
        .catch((err) => console.log(err));
};

export const setLoading = () => {
    return {
        type: LOADING
    };
};

export const resetState = () => {
    return {
        type: RESET_STATE
    };
};
