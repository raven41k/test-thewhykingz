import {
    SEARCH_TEAM,
    FETCH_TEAMS,
    FETCH_TEAM,
    LOADING,
    RESET_SEARCH,
    RESET_STATE
} from '../constants';

const initialState = {
    text: '',
    teams: [],
    loading: false,
    team: []
};

export default function (state = initialState, action) {
    switch (action.type) {
        case SEARCH_TEAM:
            return {
                ...state,
                text: action.payload,
                loading: false
            };
        case RESET_SEARCH:
            return {
                ...state,
                teams: [],
                text: '',
                loading: false
            };
        case FETCH_TEAMS:
            return {
                ...state,
                teams: action.payload,
                loading: false
            };
        case FETCH_TEAM:
            return {
                ...state,
                team: action.payload,
                loading: false
            };
        case LOADING:
            return {
                ...state,
                loading: true
            };
        case RESET_STATE:
            return {
                initialState
            };
        default:
            return state;
    }
}
