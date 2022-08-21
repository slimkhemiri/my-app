import React,{useEffect} from 'react';
import {useDispatch,useSelector} from 'react-redux';
import { decrement, increment } from './Redux/counterSlice'

const Counter = () => {

    /* Getting the value from the redux store. */
    const count = useSelector((state) => state.counter.value)
console.log(count)
/* A hook that gives access to the dispatch function. */
const dispatch = useDispatch()

/**
 * The handleInc function is a function that calls the dispatch function, which is passed in as a prop,
 * and passes in the increment function, which is imported from the actions file, as an argument.
 */
const handleInc=()=>{
    dispatch(increment())
}
const handleDec=()=>{
    dispatch(decrement())
}



/* A hook that is used to perform side effects in function components. */
useEffect(()=>{

},[])

    return (
        <>
        <p>{count} </p>

        <button onClick={handleInc} >Increment</button>
        <button onClick={handleDec} >Decrement</button>
       
        </>
    )
}

export default Counter;