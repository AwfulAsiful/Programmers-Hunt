import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import './Dev.css'
const Dev = (props) => {
    
    const{name,salary,img,designation,lang}=props.dev || {};

    return (
       <div className="col-md-4 border border-3 rounded-2 border-dark w-25 m-3">
            <div className="dev ">
          <div className="my-2">
              <img src={img} className="rounded-circle" alt="" />
          </div>
          <div className="details">
              <h4 className="fw-bolder">Name: {name}</h4>
              <h4 className="fw-bolder">Salary: {salary}$ </h4>
              <p className="">Designation: {designation} </p>
              <p className="text-break">Language: {lang} </p>
              <button className="btn-dark mb-2 p-2" onClick={()=>props.handleAddToCart(props.dev)}>
                  <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon>Add to cart
              </button>
          </div>
            </div>
       </div>
        
    );
};

export default Dev;