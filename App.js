import './App.css';
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import * as actions from './actions'

//STORE can be displayed from any component.

function App() {
  //useSelector - Helps access the whole state. 
  //To access a piece of state (myCounter or isLogged) we use state.name
  const myCounter = useSelector(state => state.myCounter);
  const isLogged = useSelector(state => state.isLogged);

  //useDispatch will be equal to string "dispatch"
  const dispatch = useDispatch();

  return (
    <div className="App">
      <div className="log">
        {/*Conditional Statement for Logged - If user is logged in then counter will show - Else: wont show anything*/}
        {isLogged ? 
        <div className="counter">
          <h1>Counter {myCounter}</h1>
          {/*In order to update the count - Dispatching Action via Buttons*/}
          <button className="add" onClick={() => dispatch(actions.increment())}>+</button>
          <button className="subtract" onClick={() => dispatch(actions.decrement())}>-</button>
        </div> : ''}
        <button className="sign_in" onClick={() => dispatch(actions.sign_in())}>Sign In</button>
        <button className="sign_out" onClick={() => dispatch(actions.sign_out())}>Sign Out</button>
      </div>
    </div>
  );
}


export default App;
