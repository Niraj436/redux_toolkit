import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

const Navbar = () => {
    const items = useSelector(state=>state.cart)
  return (
    <div className='mynav'>
        <div>
        <h2 className='text-red-600 text-3xl text-bold'>Redux tool kit</h2>
        </div>
        <div className='menu flex justify-evenly gap-14'>
            <div><Link to={"/"}>Home</Link></div>
            <div><Link to={"cart"}>Cart</Link></div>
            <div><Link>Cart items: {items.length}</Link></div>
        </div>
    </div>
  )
}

export default Navbar