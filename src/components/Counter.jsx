import React from 'react'
import {connect} from 'react-redux'
import {inc, dec} from '../actions/index'

const Counter = (props) => {
    console.log(props)
  return (
    <div>
    <h1>counter :{props.counter}</h1>
      <button onClick={() => props.inc()}>incremnet</button>
      <button onClick={() => props.dec()}>decrement</button>
    </div>
  )
}

const mapState = state => {
   return {counter : state.counter}
}

export default connect(mapState,{inc, dec})(Counter)
