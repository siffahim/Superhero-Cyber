import React from 'react';
import './Card.css';

const Card = (props) => {
    const { name,img,salary,title,country} = props.worker;
    return (
        <div className='card-container'>
            <img src={img} alt="" />
            <h5>{name}</h5>
            <p>{title}</p>
            <p><small>{country}</small></p>
            <h6>${salary}</h6>
            <button className='rounded-pill' onClick={()=>props.handle(props.worker)}><i class="fas fa-plus"></i> Select</button>
            <div className='icon-container'>
                <a href="#f"><i class="fab fa-linkedin icon"></i></a>
                <a href="#f"><i class="fab fa-facebook-square icon"></i></a>
                <a href="#f"><i class="fab fa-instagram-square icon"></i></a>
                <a href="#f"><i class="fab fa-twitter-square icon"></i></a>
            </div>
        </div>
    );
};

export default Card;