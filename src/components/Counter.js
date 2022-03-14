import React from 'react';
import './css/styles.css'
import { connect } from 'react-redux'
import { incrementCounter, decrementCounter } from '../Redux'
function Counter(props) {
    return <div className='redux-container'>
        <h2>Counter Application</h2>
        <button onClick={props.incrementCounter}>Increment +</button>
        <h2> {props.count}  </h2>
        <button onClick={props.decrementCounter}>Decrement -</button>
    </div>;
}

const mapStateToProps = (state) => {
    return {
        count: state.counter.count
    }
}
const mapDispatchToProps = dispatch => {
    return {
        incrementCounter: () => dispatch(incrementCounter()),
        decrementCounter: () => dispatch(decrementCounter())
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Counter);
