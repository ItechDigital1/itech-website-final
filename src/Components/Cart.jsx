import React from 'react';
import { Link } from 'react-router-dom';
import emptyCartImage from '../img/empty-cart.png'; // Adjust the path based on your project structure

function Cart() {
  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
        <div>
    <div className='cart-items-empty text-xl font-bold mb-1'><h1>Oops the Cart is Empty... 😕</h1> </div>
     <h1 className="text-3xl font-bold mb-12"></h1> 
        <img style={{ width: '30%' }} className="mx-auto " src={emptyCartImage} alt="empty-cart" />
       
       {/* <Link to="/hardware" className="inline-block px-6 py-2 rounded-full btn-primary text-white font-bold mt-12">
       <h1> Go Back</h1> </Link> */}
      </div>
      
    </div>
  )
}

export default Cart;
