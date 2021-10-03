import React from 'react';
import {useSelector} from 'react-redux';
import stadiumSlider4 from '../../../img/stadium-slider3.jpg'
import {Carousel} from '3d-react-carousal';
import './home-page.scss';

const HomePage = () => {
    let slides = [
        <img  src={stadiumSlider4} alt="1" />,
        <img  src={stadiumSlider4} alt="2" />  ,
        <img  src={stadiumSlider4} alt="3" />  ,
        <img  src={stadiumSlider4} alt="4" />];
    return (
        <div>
            <Carousel slides={slides}  interval={1000}/>
            <img src="https://picsum.photos/800/198/?random" alt="" className="main__img-mob"/>
            <section className="featured">
                <h2 className="featured__title">Featured</h2>
                <small className="featured__subtitle">this week</small>
                <nav className='featured__list'>
                    <a className='featured__list__item' href="#">
                        <img className='featured__list__item__photo' src="https://picsum.photos/800/201/?random" alt=""/>
                        <span className="featured__list__item__name">NAO</span>
                        <span className="featured__list__item__subname">Selena</span>
                    </a>
                    <a className='featured__list__item' href="#">
                        <img className='featured__list__item__photo' src="https://picsum.photos/800/202/?random" alt=""/>
                        <span className="featured__list__item__name">NAO</span>
                        <span className="featured__list__item__subname">Selena</span>
                    </a>
                    <a className='featured__list__item' href="#">
                        <img className='featured__list__item__photo' src="https://picsum.photos/800/203/?random" alt=""/>
                        <span className="featured__list__item__name">NAO</span>
                        <span className="featured__list__item__subname">Selena</span>
                    </a>
                    <a className='featured__list__item' href="#">
                        <img className='featured__list__item__photo' src="https://picsum.photos/800/205/?random" alt=""/>
                        <span className="featured__list__item__name">NAO</span>
                        <span className="featured__list__item__subname">Selena</span>
                    </a>
                    <a className='featured__list__item' href="#">
                        <img className='featured__list__item__photo' src="https://picsum.photos/800/209/?random" alt=""/>
                        <span className="featured__list__item__name">NAO</span>
                        <span className="featured__list__item__subname">Selena</span>
                    </a>
                    <a className='featured__list__item' href="#">
                        <img className='featured__list__item__photo' src="https://picsum.photos/800/777/?random" alt=""/>
                        <span className="featured__list__item__name">NAO</span>
                        <span className="featured__list__item__subname">Selena</span>
                    </a>
                    <a className='featured__list__item' href="#">
                        <img className='featured__list__item__photo' src="https://picsum.photos/800/155/?random" alt=""/>
                        <span className="featured__list__item__name">NAO</span>
                        <span className="featured__list__item__subname">Selena</span>
                    </a>
                </nav>
            </section>
        </div>
    );

}

export default HomePage;