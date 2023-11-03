const initialState = {
    value: 0,
  };
  const countReducer = (state=initialState,action:any) => {
   switch (action.type){
    case 'INCREMENT':
        return {value:state.value+1};
    case 'DECREMENT':
        return {value:state.value-1};
    default:
        return state;
   }
  };
  export default countReducer;