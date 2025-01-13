const INCREMENT='INCREMENT';
const DECREMENT='DECREMENT';

const incrementCount=()=>({
  type: INCREMENT
});

const decrementCount=()=>{
  return {
    type:DECREMENT
  };
}

export {INCREMENT,incrementCount,decrementCount,DECREMENT};