import classes from './Counter.module.css';
import { useSelector,useDispatch,connect }from 'react-redux'
import { INCREMENT } from '../Store/index';

const Counter = () => {
  const dispatch = useDispatch();


  const counter = useSelector(state => state.counter);
  const show = useSelector(state => state.showCounter);


  const toggleCounterHandler = () => {
    dispatch({ type: 'toggle'});
  };
  const incrementHandler = () => {
    dispatch( { type: });
  };

  const decremnetHandler = () => {
    dispatch( { type: 'decrement'});
  };

  const increaseHandler = () => {
    dispatch( { type: 'increase', amount: 5});
  };

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {show && <div className={classes.value}>{counter}</div>}
      <div>
        <button onClick={incrementHandler}>Increment</button>
        <button onClick={increaseHandler}>Increase by 5</button>
        <button onClick={decremnetHandler}>Decrement</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;

// class Counter extends Component{
//   incrementHandler(){
//     this.props.increment();
//   }

//   decrementHandler(){
//     this.props.decrement
//   }

//   toggleCounterHandler(){

//   }
//   constructor() {
//     render() {
//       return (
//         <main className={classes.counter}>
//           <h1>Redux Counter</h1>
//           <div className={classes.value}>{this.props.counter}</div>
//           <div>
//             <button onClick={this.incrementHandler.bind(this)}>Increment</button>
//             <button onClick={this.decrementHandler.bind(this)}>decrement</button>
//           </div>
//           <button onClick={this.toggleCounterHandler}>Toggle Counter</button>
//         </main>
//       );
//     }
//   }
// }


// const mapStateToProps = state => {
//   return{
//     counter:state.counter
//   };
// }


// const mapDispatchToProps = dispatch => {
//   return{
//     increment: () => dispatch({type: 'increment'}),
//     decrement: () => dispatch({type: 'decrement'}),
//   }
// };
// // Connect the component
// export default connect(mapStateToProps, mapDispatchToProps)(Counter);