import { useState } from "react";
import { useDispatch } from "react-redux";
import {v4 as uuidv4} from 'uuid';
const AddItem = () => {
    const [item,setItem] = useState('')
    const dispatch = useDispatch()
    const addTodo = () => {
        console.log(item)
        dispatch({
            type:"ADD_ITEM",
            payload:{
                id: uuidv4(),
                text: item
            }
        })
    }
    return (<div>
        <input onChange = {(e)=> {setItem(e.target.value)}}type = 'text' />
        <button onclick = {addTodo}>Add</button>
    </div>  
    );
}
 
export default AddItem;