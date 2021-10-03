import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
    searchTeam,
    fetchTeams,
    setLoading, resetState
} from '../../../redux/actions/searchActions';
import TeamList from "../team-list/TeamList";
import './search-form.scss';

const SearchForm = () => {
    const text = useSelector(state => state.teams.text);
    const dispatch = useDispatch();
    const onChange = (e) => {
        dispatch(fetchTeams(e.target.value))
        dispatch(searchTeam(e.target.value));
    };

    const onSubmit = (e) => {
        e.preventDefault();
        dispatch(fetchTeams(text));
        dispatch(setLoading());
    };

    return (
        <div className="search-form">
            <form onSubmit={onSubmit}>
                <div className="search-form__wrapper">
                    <button type="submit" className="search-form__btn">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M4 11C4 7.13401 7.13401 4 11 4C14.866 4 18 7.13401 18 11C18 12.886 17.2541 14.5978 16.0413 15.8565C16.0071 15.8828 15.9742 15.9116 15.9429 15.9429C15.9116 15.9742 15.8827 16.0071 15.8564 16.0413C14.5977 17.2542 12.886 18 11 18C7.13401 18 4 14.866 4 11ZM16.6177 18.0319C15.078 19.2635 13.125 20 11 20C6.02944 20 2 15.9706 2 11C2 6.02944 6.02944 2 11 2C15.9706 2 20 6.02944 20 11C20 13.125 19.2635 15.078 18.0319 16.6177L21.7071 20.2929C22.0976 20.6834 22.0976 21.3166 21.7071 21.7071C21.3166 22.0977 20.6834 22.0977 20.2929 21.7071L16.6177 18.0319Z" fill="#8B8E97"/>
                        </svg>
                    </button>
                    <input
                        type="text"
                        className="search-form__input"
                        name="searchText"
                        placeholder="Search for football teams"
                        onChange={onChange}
                        value={text}
                        autoComplete="off"
                    />
                </div>
            </form>
            {text && <TeamList/>}
        </div>
    );
}

export default SearchForm;