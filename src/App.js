import React,{useState,useReducer} from 'react';
import Routes from './routes';
import Context from './utils/context';
import * as Reducer from "./store/hooks_state/hooks_reducer";
import * as ACTIONS from './store/actions/actions';
import * as UserReducer from './store/hooks_state/user_input_hooks_reducer';
//main app 
const App =()=> {

const [stateGlobal,setStateGlobal] = useState(0)
const [stateContextGlobal,dispatchContextGlobal] = useReducer(Reducer.HooksReducer,Reducer.initialState);
const [stateContext, dispatchContext] = useReducer(UserReducer.UserReducer, UserReducer.initialState);
const [stateUser, dispatchUser] = useReducer(UserReducer.UserReducer, UserReducer.initialState);
const incrementGlobalStae= () =>{

  setStateGlobal(stateGlobal + 1)
}
const decrementGlobalStae= () =>{
  setStateGlobal(stateGlobal - 1)
}
const handleContextDispatchTrue= () =>{
  dispatchContextGlobal(ACTIONS.success())
}
const handleContextDispatchFalse= () =>{
  dispatchContextGlobal(ACTIONS.failure())
}
const handleuseContextChange = (event) => {
  dispatchUser(ACTIONS.user_input_change(event.target.value))
};

const handleuseContextSubmit = (event) => {
  event.preventDefault();
  event.persist();
  dispatchUser(ACTIONS.user_input_submit(event.target.useContext.value))
};

return(
      <div>
      React
      <Context.Provider value={{
        valueGlobalState :stateGlobal,
        addGlobalValue :()=>incrementGlobalStae(),
        decGlobalValue :()=>decrementGlobalStae(),
        reducerGlobalState : stateContextGlobal.stateprop2,
        dispatchContextTrue : ()=> handleContextDispatchTrue(),
        dispatchContextFalse : ()=> handleContextDispatchFalse(),

        useContextChange: stateUser.user_text_change,
            useContextSubmit: stateUser.user_text_submit,
            useContextHandleChange: (event) => handleuseContextChange(event),
            useContextHandleSubmit: (event) => handleuseContextSubmit(event)
      }}>
      <Routes />
      </Context.Provider>
      </div>
    )
}


export default App;
