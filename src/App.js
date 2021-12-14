import { useState } from "react";
import Products from "./components/Products";
import Details from './components/Details';
import {Routes,Route} from 'react-router-dom'
import Navbar from "./layout/Navbar";
const App = () => {



    return ( 
        <div>
            <Navbar />
            <Routes>
                <Route path = '/' element = {<Products />} />
                <Route path = '/products/:text' element = {<Details />} />
            </Routes>
        </div>
     );
}
 
export default App;