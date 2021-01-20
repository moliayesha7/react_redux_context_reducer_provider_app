import React, {useState,useReducer, useContext}  from 'react';
import * as ACTIONS from '../store/actions/actions';
import * as UserReducer from '../store/hooks_state/user_input_hooks_reducer';
import Context from '../utils/context';
const HooksForm =()=>{
    const [valueChange, setValueChange] = useState('');
    const [valueSubmit, setValueSubmit] = useState('');
    const context = useContext(Context)
    const [userState,userDispatch] = useReducer(UserReducer.UserReducer,UserReducer.initialState);
    const handleuseStateChange = (event) => (
        setValueChange(event.target.value)
      );
      const handleuseStateSubmit = (event) => {
        event.preventDefault();
        setValueSubmit(event.target.useState.value)
      };
    
      const handleuseReducerChange = (event) => (
        userDispatch(ACTIONS.user_input_change(event.target.value))
      );
      const handleuseReducerSubmit = (event) => {
        event.preventDefault();
        userDispatch(ACTIONS.user_input_submit(event.target.useReducer.value))
      };
        
return(
    <div>
<form onSubmit={handleuseStateSubmit}>
          <label> React useState: </label>
          <input id="useState" onChange={handleuseStateChange} type="text" />
          <button type="submit"> Submit </button>
        </form>
        <br />
        <form onSubmit={handleuseReducerSubmit}>
          <label> React useReducer: </label>
          <input id="useReducer" onChange={handleuseReducerChange} type="text" />
          <button type="submit"> Submit </button>
        </form>
        <br />
        <form onSubmit={context.useContextHandleSubmit}>
          <label> React useContext: </label>
          <input id="useContext" onChange={context.useContextHandleChange} type="text" />
          <button type="submit"> Submit </button>
        </form>
        <br />

        <h3>React useState:</h3>
        <p>Change: {valueChange}</p>
        <p>Submit: {valueSubmit}</p>
        <br />
        <h3>React useReducer:</h3>
        <p>Change: {userState.user_text_change}</p>
        <p>Submit: {userState.user_text_submit}</p>
        <br />
        <h3>React useContext:</h3>
        <p>Change: {context.useContextChange}</p>
        <p>Submit: {context.useContextSubmit}</p>
        <br />
        <br />
    </div>
)
  }
  
  export default HooksForm;