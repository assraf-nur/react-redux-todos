import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { getAllTodos } from '../Services/Actions/Action';

const Todos = () => {

    const {loading, todos, error} = useSelector(state => state);

    const dispatch = useDispatch();
    
    useEffect(() =>{
        dispatch(getAllTodos());
    },[])

    return (
        <div>
            <h1 className='text-center font-semibold text-5xl mt-5'>ToDo S</h1>

            {
            loading ? <h1 className='text-center font-semibold text-5xl mt-5'>Loading...</h1> : null
            }
            {
            error ? <h1 className='text-center font-semibold text-5xl mt-5'>Error...</h1> : null
            }
            
        </div>
    );
};

export default Todos;