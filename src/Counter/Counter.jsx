import {useState} from 'react';

export const Counter = () => {

    const [count, setCount] = useState(0);

    return (
    <div className="container my-5">
      <div className='card text-center my-5'>
        <div className='card-body'>
          <h1>Counter</h1>
          <div className='my-5'>
            <h2 className='my-5'>{count}</h2>
            <button type="btn" className="btn btn-success mx-3" onClick={()=> setCount(count+1)} >Increment</button>
            <button type="btn" className="btn btn-danger mx-3" onClick={()=> setCount(count-1)} disabled={count<=0}>Decrement</button>
            <button type="btn" className="btn btn-info mx-3" onClick={()=> setCount(0)} disabled={count<=0}>Reset</button>
          </div>
        </div>
      </div>
      
      
      
    </div>
  )
}