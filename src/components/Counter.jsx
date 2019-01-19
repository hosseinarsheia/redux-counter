import React  from 'react'
import {connect} from 'react-redux'
import {inc, dec} from '../actions'

const Counter = props =>  {
        console.log(props)
        return (
        <div>
          <h1>Count: {props.counter.count} </h1>
          <button onClick={() => props.inc()}>increment</button>
          <button onClick={() => props.dec()}>decrement</button>
        </div>
      )
   }



const mapStateToProps = state => {
    return {
        counter: state.counter
    }
}
export default connect(mapStateToProps,{inc , dec})(Counter);
