import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import {
    fetchTeam,
    resetSearch,
    setLoading
} from '../../../redux/actions/actions';
import Spinner from '../../layout/spinner/Spinner';
import './team.scss';

const Team = () => {
    const loading = useSelector((state) => state.teams.loading);
    const team = useSelector((state) => state.teams.team);
    const name = team?.teams?.map((i) => i.strTeam);
    const photo = team?.teams?.map((i) => i.strTeamBadge);
    const dispatch = useDispatch();
    let { id: idRoute } = useParams();
    const [id, setId] = useState(null);
    useEffect(() => {
        dispatch(resetSearch());
        setId(idRoute);
        dispatch(fetchTeam(idRoute));
        dispatch(setLoading());
    }, []);
    useEffect(() => {
        if (id !== idRoute) {
            dispatch(resetSearch());
            dispatch(fetchTeam(idRoute));
        }
        dispatch(setLoading());
    }, [idRoute]);
    let teamInfo = (
        <div className="team-page">
            <section className="left-section">
                <div className="left-section__header">
                    <h2 className="team-page__title-block">Info</h2>
                    <button className="btn">
                        <svg
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                fill-rule="evenodd"
                                clip-rule="evenodd"
                                d="M5 10C3.89543 10 3 10.8954 3 12C3 13.1046 3.89543 14 5 14C6.10457 14 7 13.1046 7 12C7 10.8954 6.10457 10 5 10ZM10 12C10 10.8954 10.8954 10 12 10C13.1046 10 14 10.8954 14 12C14 13.1046 13.1046 14 12 14C10.8954 14 10 13.1046 10 12ZM17 12C17 10.8954 17.8954 10 19 10C20.1046 10 21 10.8954 21 12C21 13.1046 20.1046 14 19 14C17.8954 14 17 13.1046 17 12Z"
                                fill="white"
                            />
                        </svg>
                    </button>
                </div>

                <div className="left-section__list">
                    <ul>
                        <li className="left-section__list__item">
                            <img
                                className="left-section__list__item__photo"
                                src="https://picsum.photos/800/201/?random"
                                alt=""
                            />
                            <div className="left-section__list__item__desc">
                                <div className="left-section__list__item__desc__name">
                                    Firestarter
                                </div>
                                <div className="left-section__list__item__desc__small-name">
                                    The Prodigy
                                </div>
                            </div>
                            <time className="left-section__list__item__time">
                                4:22
                            </time>
                            <button className="left-section__list__item__btn">
                                <svg
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
                                        stroke="#5ABC61"
                                        stroke-width="2"
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                    />
                                    <path
                                        d="M12 8V16"
                                        stroke="#5ABC61"
                                        stroke-width="2"
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                    />
                                    <path
                                        d="M8 12H16"
                                        stroke="#5ABC61"
                                        stroke-width="2"
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                    />
                                </svg>
                            </button>
                        </li>
                        <li className="left-section__list__item">
                            <img
                                className="left-section__list__item__photo"
                                src="https://picsum.photos/800/201/?random"
                                alt=""
                            />
                            <div className="left-section__list__item__desc">
                                <div className="left-section__list__item__desc__name">
                                    Firestarter
                                </div>
                                <div className="left-section__list__item__desc__small-name">
                                    The Prodigy
                                </div>
                            </div>
                            <time className="left-section__list__item__time">
                                4:22
                            </time>
                            <button className="left-section__list__item__btn">
                                <svg
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
                                        stroke="#5ABC61"
                                        stroke-width="2"
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                    />
                                    <path
                                        d="M12 8V16"
                                        stroke="#5ABC61"
                                        stroke-width="2"
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                    />
                                    <path
                                        d="M8 12H16"
                                        stroke="#5ABC61"
                                        stroke-width="2"
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                    />
                                </svg>
                            </button>
                        </li>
                        <li className="left-section__list__item">
                            <img
                                className="left-section__list__item__photo"
                                src="https://picsum.photos/800/201/?random"
                                alt=""
                            />
                            <div className="left-section__list__item__desc">
                                <div className="left-section__list__item__desc__name">
                                    Firestarter
                                </div>
                                <div className="left-section__list__item__desc__small-name">
                                    The Prodigy
                                </div>
                            </div>
                            <time className="left-section__list__item__time">
                                4:22
                            </time>
                            <button className="left-section__list__item__btn">
                                <svg
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
                                        stroke="#5ABC61"
                                        stroke-width="2"
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                    />
                                    <path
                                        d="M12 8V16"
                                        stroke="#5ABC61"
                                        stroke-width="2"
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                    />
                                    <path
                                        d="M8 12H16"
                                        stroke="#5ABC61"
                                        stroke-width="2"
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                    />
                                </svg>
                            </button>
                        </li>
                        <li className="left-section__list__item">
                            <img
                                className="left-section__list__item__photo"
                                src="https://picsum.photos/800/201/?random"
                                alt=""
                            />
                            <div className="left-section__list__item__desc">
                                <div className="left-section__list__item__desc__name">
                                    Firestarter
                                </div>
                                <div className="left-section__list__item__desc__small-name">
                                    The Prodigy
                                </div>
                            </div>
                            <time className="left-section__list__item__time">
                                4:22
                            </time>
                            <button className="left-section__list__item__btn">
                                <svg
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
                                        stroke="#5ABC61"
                                        stroke-width="2"
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                    />
                                    <path
                                        d="M12 8V16"
                                        stroke="#5ABC61"
                                        stroke-width="2"
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                    />
                                    <path
                                        d="M8 12H16"
                                        stroke="#5ABC61"
                                        stroke-width="2"
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                    />
                                </svg>
                            </button>
                        </li>
                    </ul>
                </div>
            </section>
            <section className="right-section">
                <h2 className="team-page__title-block">{name}</h2>
                <img src={photo} alt="" className="right-section__photo" />
            </section>
        </div>
    );

    let content = loading ? <Spinner /> : teamInfo;
    return <div>{content}</div>;
};

export default Team;
