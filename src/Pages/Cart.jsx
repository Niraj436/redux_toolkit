import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { remove } from "../Store/cartSlice";

const Cart = () => {
  const products = useSelector((state) => state.cart);
  const dispatch = useDispatch()

 const handleRemove = (productId) =>{
    dispatch(remove(productId))
 }

  console.log(products);
  return (
    <div>
      <h1 className="text-3xl text-center my-2 font-black">Cart items</h1>
      <div className=" flex flex-col">
        {products && products.length > 0 ? (
          products.map((product) => (
            <div className=" border border-gray-300 text-center my-1 px-2 shadow-lg flex justify-evenly ">
              <div>
                <img
                  src={product.image}
                  alt={product.title}
                  className="h-44 mx-auto"
                />
              </div>
              <div className=" my-auto">
                <h1 className="text-lg font-bold text">{product.title}</h1>
              </div>
              <div className=" my-auto">
                <h1> $ {product.price}</h1>
              </div>
              <div className=" my-auto">
                <button className="btn bg-blue-600 rounded px-4 py-2" onClick={()=>{handleRemove(product.id)}}>
                  Remove
                </button>
              </div>
            </div>
          ))
        ) : (
          <p>No cart items available</p>
        )}
      </div>
    </div>
  );
};

export default Cart;
