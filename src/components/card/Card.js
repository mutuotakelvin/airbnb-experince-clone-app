import React from 'react';
import zaImg from './../../images/zaf.png'
import startImg from './../../images/star.png'

const Card = () => {
    return (
        <div>
            <img className='card--img' src={zaImg} alt='zaf img'/>
            <div className='car--stats' >
                <img src={startImg} alt=''/>
            </div>
        </div>
    );
};

export default Card;