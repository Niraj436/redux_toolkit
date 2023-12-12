import React, { useEffect, useState } from 'react'
import { getAllProducts } from '../API/ProductApi'
import { useDispatch } from 'react-redux';
import { add } from '../Store/cartSlice';


const Home = () => {
    const [products, setProducts] = useState([])
    const dispatch = useDispatch()

    useEffect(() => {
        getAllProducts()
        .then(data=>{
            if(data.error){
                console.log(error)
            }
            else{
                setProducts(data)
            }
        })
    }, []);

    const handleAdd = (product) =>{
        dispatch(add(product))
    }

  return (
    <div>
    <h1 className='text-3xl text-center my-2 font-black'>Products</h1>
    <div className='flex justify-evenly align-middle flex-wrap '>

    {products && products.length > 0 ? (
        products.map((product) => (
            <div key={product.id} className='w-1/4 border border-gray-300 text-center my-1 px-2 shadow-lg'>
                <img src={product.image} alt={product.title} className='h-44 mx-auto'/>
                <h1 className='text-lg font-bold'>{product.title}</h1>
                <h1> $ {product.price}</h1>
                <button className='btn bg-blue-600 rounded px-2 py-1 my-3' onClick={()=>{handleAdd(product)}}>Add to cart</button>
            </div>
        ))
    ) : (
        <p>No products available</p>
    )}
    </div>
</div>
);
};

export default Home