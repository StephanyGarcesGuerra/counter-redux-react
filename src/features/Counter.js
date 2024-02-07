
import { useDispatch, useSelector} from "react-redux"; 
import { selectCount } from "./counterSlice";
import { increment,decrement,reset } from "./counterSlice";
import { useState } from "react";



function Counter() {
    //*reading the count state; global state
    const count = useSelector(selectCount);
    //* dispatch
    const dispatch = useDispatch();
    //* local state
    const [incrementAmount, setIncrementAmount]= useState(1);

    return(
        <div>
            <h2> Count: {count} </h2>
            <input 
            type='number' 
            min='1' 
            step='1' 
            value={incrementAmount}
            onChange={(e)=> setIncrementAmount(e.target.value)}
            />
            <button onClick={() => dispatch(increment(incrementAmount))}> + </button>
            <button onClick={() => dispatch(decrement(incrementAmount))}> - </button>
            <br/>
            <button onClick={() =>{
                setIncrementAmount(1);
                dispatch(reset());
            }}> Reset </button>

        </div>
    )
}

export default Counter;