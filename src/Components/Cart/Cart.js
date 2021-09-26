import React from 'react';

const Cart = (props) => {
    const { cart } = props || {};
    /*   const totalReducer=(prevValue,currentValue)=>prevValue+currentValue.salary;
      const total=cart.reduce(parseInt( totalReducer),0) */
      let total=0;
   
      for(const dev of cart)
      {
          if(!dev.quantity)
          {
              dev.quantity=1;
          }
          total=total+(dev.salary)*(dev.quantity);
      }
    return (

        <div className="my-cart me-2">
            <div className="calc border border-3 border-dark rounded-2 mb-4 p-3">
                <h3>Added:{cart.length} </h3>
                <h3>Total Cost: {total}$</h3>
                <ul className="fs-3 fw-bold">
                    {
                        cart.map(dev => <li>{dev.name}</li>)
                    }
                </ul>
            </div>

            
        </div>
    );
};

export default Cart;