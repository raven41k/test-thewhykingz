import React, { useEffect, useState, useCallback } from 'react';

import SearchForm from '../../home/search-form/SearchForm';
import Settings from '../../layout/settings/Settings';
import './header.scss';

const Header = () => {
    return (
        <header className="header">
            <button className="header__mob-menu">
                <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        d="M3 12H21"
                        stroke="#8B8E97"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                    />
                    <path
                        d="M3 6H21"
                        stroke="#8B8E97"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                    />
                    <path
                        d="M3 18H21"
                        stroke="#8B8E97"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                    />
                </svg>
            </button>
            <a href="/" className="header__mob-logo">
                <svg
                    width="74"
                    height="24"
                    viewBox="0 0 74 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        d="M12.552 3.264H18.96V3.72H17.64V19.608H18.96V20.064H11.64V19.608H12.96V4.608H12.864L9.264 20.064H6.264L2.04 4.536H1.944V19.608H3.264V20.064H0V19.608H1.32V3.72H0V3.264H6.48L9.672 15.624L12.552 3.264Z"
                        fill="#5ABC61"
                    />
                    <path
                        d="M26.0603 14.952C26.0603 16.424 26.3083 17.552 26.8043 18.336C27.3162 19.12 28.2283 19.512 29.5403 19.512C30.8523 19.512 31.8603 19.104 32.5643 18.288C33.2683 17.472 33.6203 16.232 33.6203 14.568V3.72H32.0603V3.264H35.5643V3.72H34.2443V14.4C34.2443 16.384 33.8043 17.864 32.9243 18.84C32.0443 19.816 30.4842 20.304 28.2442 20.304C26.0202 20.304 24.3162 19.84 23.1322 18.912C21.9643 17.984 21.3802 16.392 21.3802 14.136V3.72H20.0602V3.264H27.6203V3.72H26.0603V14.952Z"
                        fill="#5ABC61"
                    />
                    <path
                        d="M43.5047 19.8C44.3047 19.8 45.0087 19.584 45.6167 19.152C46.2407 18.72 46.5527 18.072 46.5527 17.208C46.5527 16.328 46.2167 15.656 45.5447 15.192C44.8887 14.728 43.9447 14.328 42.7127 13.992C41.4967 13.64 40.6087 13.336 40.0487 13.08C39.5047 12.824 38.9847 12.488 38.4887 12.072C37.4967 11.24 37.0007 9.952 37.0007 8.208C37.0007 6.784 37.5047 5.56 38.5127 4.536C39.5367 3.512 40.9287 3 42.6887 3C43.5367 3 44.4167 3.128 45.3287 3.384C46.2567 3.624 46.8327 3.744 47.0567 3.744C47.2807 3.744 47.4807 3.584 47.6567 3.264H47.9207L48.0887 8.112H47.7047C46.9367 6.72 46.1287 5.608 45.2807 4.776C44.4487 3.928 43.5367 3.504 42.5447 3.504C41.5687 3.504 40.8087 3.736 40.2647 4.2C39.7207 4.648 39.4487 5.256 39.4487 6.024C39.4487 6.776 39.7687 7.36 40.4087 7.776C41.0647 8.176 41.8647 8.504 42.8087 8.76C43.7527 9.016 44.3687 9.192 44.6567 9.288C44.9607 9.384 45.3287 9.52 45.7607 9.696C46.2087 9.856 46.5687 10.032 46.8407 10.224C47.1287 10.4 47.4247 10.632 47.7287 10.92C48.0487 11.192 48.2967 11.496 48.4727 11.832C48.9047 12.6 49.1207 13.512 49.1207 14.568C49.1207 16.296 48.5767 17.688 47.4887 18.744C46.4167 19.784 45.0007 20.304 43.2407 20.304C42.3287 20.304 41.2807 20.184 40.0967 19.944C38.9287 19.704 38.2807 19.584 38.1527 19.584C37.9287 19.584 37.7127 19.824 37.5047 20.304H37.1687L36.9287 14.592H37.3367C38.0407 15.984 38.9367 17.2 40.0247 18.24C41.1287 19.28 42.2887 19.8 43.5047 19.8Z"
                        fill="#5ABC61"
                    />
                    <path
                        d="M50.6953 3.264H58.0153V3.72H56.6953V19.608H58.0153V20.064H50.6953V19.608H52.0153V3.72H50.6953V3.264Z"
                        fill="#5ABC61"
                    />
                    <path
                        d="M68.2266 3.48C65.7466 3.48 64.5066 5.872 64.5066 10.656V12.552C64.5066 14.824 64.8346 16.608 65.4906 17.904C66.1466 19.184 67.1146 19.824 68.3946 19.824C70.1546 19.824 71.7706 18.112 73.2426 14.688H73.6746L73.5066 20.04H73.2426C73.1466 19.864 73.0586 19.744 72.9786 19.68C72.8986 19.6 72.7786 19.56 72.6186 19.56C72.4746 19.56 71.8986 19.688 70.8906 19.944C69.8826 20.184 68.8586 20.304 67.8186 20.304C65.2106 20.304 63.1866 19.6 61.7466 18.192C60.3226 16.784 59.6106 14.672 59.6106 11.856C59.6106 9.024 60.3546 6.84 61.8426 5.304C63.3466 3.768 65.3626 3 67.8906 3C68.8666 3 69.8186 3.128 70.7466 3.384C71.6906 3.624 72.2426 3.744 72.4026 3.744C72.5626 3.744 72.6826 3.712 72.7626 3.648C72.8426 3.568 72.9306 3.44 73.0266 3.264H73.2906L73.4826 8.472H73.0506C72.3306 6.856 71.5866 5.624 70.8186 4.776C70.0666 3.912 69.2026 3.48 68.2266 3.48Z"
                        fill="#5ABC61"
                    />
                </svg>
            </a>
            <SearchForm />
            <Settings />
        </header>
    );
};

export default Header;
