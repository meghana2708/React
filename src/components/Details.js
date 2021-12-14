import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
const Details  = () => {
    console.log(useParams())
    const {text} = useParams()
    const state = useSelector(state => state)
    const products = state.find(products => products.text === text)
    return ( 
        <div>
            <h2>{text} Details</h2>
            {products.description}
        </div>
     );
}
 
export default Details ;