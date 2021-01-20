import React, {useState,useEffect,useReducer, useContext} from 'react';
import * as Reducer from "../store/hooks_state/hooks_reducer";
import * as ACTIONS from '../store/actions/actions';
import Context from "../utils/context";

//main app 
const HooksContainer1 =()=> {
    const context = useContext(Context);
const [stateValue,setValue] = useState(0);
const [useEffectValue,setUseEffectValue] = useState(null);
const [state,dispatch] = useReducer(Reducer.HooksReducer,Reducer.initialState);

useEffect(()=>{
    setTimeout(()=>setUseEffectValue('use effect worked'),3000)
},[stateValue])

const incrementvalue= () =>{
    setValue(stateValue + 1)
}
const decrementvalue= () =>{
    setValue(stateValue - 1)
}
const changeUseEffectValue= () =>{
    setUseEffectValue("some text")
}

const handleDispatchTrue= () =>{
    dispatch(ACTIONS.success())
}
const handleDispatchFalse= () =>{
    dispatch(ACTIONS.failure())
 }
    return(
      <div>
      React hook
 
   <button onClick={()=> incrementvalue()}>Inc local calue </button>
   <button onClick={()=> decrementvalue()}>Dec local calue </button>
   <button onClick={()=> changeUseEffectValue()}>Change Use Effect calue </button>
   <button onClick={()=> handleDispatchTrue()}>Dispatch True</button>
   <button onClick={()=> handleDispatchFalse()}>Dispatch False</button>

   <button onClick={()=> context.addGlobalValue()}>ispatchContextTrue</button>
   <button onClick={()=> context.decGlobalValue()}>Global Dec</button>

   
   <button onClick={()=> context.dispatchContextTrue()}>DispatchContext True</button>
   <button onClick={()=> context.dispatchContextFalse()}>DispatchContext False</button>
   <br/>
   Local state : {stateValue}
   <br/>
   <p>Global State : {context.valueGlobalState}</p>
   <br/>
   <br/>
   <p>{useEffectValue ? <p>{useEffectValue}</p> : <p>No value</p>}</p>
   <br/>
   <br/>
   <p>{context.useContextSubmit ? <p>{context.useContextSubmit}</p> : <p>No value</p>}</p>
   <br/>
   {state.stateprop1 ? <p>state prop1 is true</p>:
    <p>state prop1 is flase</p>
   }
   
   <br/>
   {context.reducerGlobalState ? <p>state prop2 is true</p>:
    <p>state prop2 is flase</p>
   }


      </div>
    )
    
}


export default HooksContainer1;
