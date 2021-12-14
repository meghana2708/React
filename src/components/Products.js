import { useSelector } from "react-redux";
const Products = () => {
    const products = useSelector(state => state)
    return ( 
        <div>
            <h2>Products</h2>
           {products.map(products => <li><a href ={`products/${products.text}`}>{products.text}</a></li>)}
        </div>
     );
}
 
export default Products;