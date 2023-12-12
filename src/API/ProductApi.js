export const getAllProducts = () =>{
    return fetch('https://fakestoreapi.com/products')
    .then(res=>res.json())
    .catch(err=>console.log(err))
}