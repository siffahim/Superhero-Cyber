import React, { useEffect, useState } from 'react';
import Card from '../Card/Card';
import Cart from '../Cart/Cart';
import './News.css';

const News = () => {
    const [workers, setWorkers] = useState([]);
    const [carts, setCarts] = useState([]);
    useEffect(() => {
        fetch('./data.json')
            .then(res => res.json())
        .then(data => setWorkers(data))
    }, [])
    const handleSelect = (worker) => {
        const newWorker = [...carts, worker];
        setCarts(newWorker)
    }
    return (
        <div className='display-container'>
            <div className='containers'>
                <div className='worker-container'>
                    {
                        workers.map(worker => <Card key={worker.id} worker={worker} handle={handleSelect} />)
                    }
                </div>
                <div>
                    <Cart cart={carts} />
                </div>
            </div>
        </div>
    );
};

export default News;