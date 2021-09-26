import React from 'react';
import './Cart.css';

const Cart = (props) => {
    const { cart } = props;
    let total = 0;
    let names = [];
    for (const x of cart) {
        total += x.salary;
        names.push(x.name);
    }
    return (
        <div className='cart-container'>
            <button className='btn-d'>
            <i class="fas fa-user icon"></i>
                <span className='counter'>+{props.cart.length}</span>
            </button>
            <h6>Totol Cost: ${total}</h6>
            {
                names.map(name => <li className='name'><i class="fas fa-user icon2"></i> {name}</li>)
            }
        </div>
    );  
};

export default Cart;