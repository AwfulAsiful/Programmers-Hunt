import React, { useEffect, useState } from 'react';
import Dev from '../Dev/Dev';
import Cart from '../Cart/Cart';
const Devs = () => {
    const[devs,setDevs]=useState([]);
    const[cart,setCart]=useState([]);
   
    const handleAddToCart=(dev)=>{
        const newCart = [...cart,dev];
        setCart(newCart);
    }
   
    useEffect(()=>{
        fetch("/fake.json")
        .then(res=>res.json())
        .then(data=>setDevs(data))
    },[]);


    return (
        <div className="devs-container row">
            <div className="dev-container col-md-9 col-lg-9">
                <div className="row ms-5">
                   {
                       devs.map(dev=><Dev key={dev.key} dev={dev} handleAddToCart={handleAddToCart}></Dev>)
                   }
                </div>
            </div>
            <div className="cart-container col-md-3 col-lg-3">
                {<Cart cart={cart}>
                    </Cart>
                }
            </div>
        </div>
    );
};

export default Devs;