import React from 'react';
import { Provider } from 'react-redux';
import { HashRouter as Router, Route } from 'react-router-dom';
import Navbar from '../layout/nav-bar/Navbar';
import Footer from '../layout/footer/Footer';
import Header from '../layout/header/Header';
import HomePage from '../home/home-page/HomePage';
import Team from '../home/team/Team';
import store from '../../redux/store';
import './app.scss';

const App = () => {
    return (
        <Provider store={store}>
            <Router>
                <div className="container">
                    <Navbar />
                    <Header />
                    <main className="main">
                        <Route exact path="/" component={HomePage} />
                        <Route exact path="/team/:id" component={Team} />
                    </main>
                    <Footer />
                </div>
            </Router>
        </Provider>
    );
};

export default App;
