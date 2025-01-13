import React from 'react';
import {connect} from 'react-redux';
import {incrementCount,decrementCount} from '../store/actions/counterActions';

class Counter extends React.Component{
  render(){
    const {count,incrementCount,decrementCount}=this.props;
    return (
      <div>
        <button onClick={()=>decrementCount()}>-</button>
        <span> {count} </span>
        <button onClick={()=>incrementCount()}>+</button>
      </div>
    );
  }
}
const mapStateToProps=(state)=>({
  count:state
});
const mapDispatchToProps=(dispatch)=>({
  decrementCount:()=>dispatch(decrementCount()),
  incrementCount:()=>dispatch(incrementCount())
});
export default connect(mapStateToProps,mapDispatchToProps)(Counter);