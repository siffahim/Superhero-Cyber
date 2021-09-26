import React from 'react';
import './Cart.css';

const Cart = (props) => {
    const { cart } = props;
    let total = 0;
    for (const x of cart) {
        total += x.salary;
    }
    return (
        <div className='cart-container'>
            <button className='btn-d'>
            <i class="fas fa-user icon"></i>
                <span className='counter'>+{props.cart.length}</span>
            </button>
            <h6>Totol Cost: ${total}</h6>
            {
                cart.map(detail => <div className='display' key={detail.id}>
                    <img src={detail.img} className='img' alt="" />
                    <li className='name'>{detail.name}</li>
                </div> )
            }
        </div>
    );  
};

export default Cart;