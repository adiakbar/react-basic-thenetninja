import React, { Component } from 'react'

import { connect } from 'react-redux'

class Counter extends Component {
  render() {
    return (
      <div>
        <button onClick={this.props.handleMinus}>Kurangi</button>
        <input type="text" value={this.props.order} readOnly />
        <button onClick={this.props.handlePlus}>Tambah</button>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    order: state.totalOrder
  }
}

const mapDispatctToProps = (dispatch) => {
  return {
    handlePlus: () => dispatch({ type: 'PLUS_ORDER' }),
    handleMinus: () => dispatch({ type: 'MINUS_ORDER' })
  }
}

export default connect(mapStateToProps, mapDispatctToProps)(Counter);