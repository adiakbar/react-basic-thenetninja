import React, { Component } from 'react'

class ShoppingCart extends Component {
  state = {
    total: 0,
    fruits: [
      {id: 1, name: 'Apple'},
      {id: 2, name: 'Orange'},
      {id: 3, name: 'Grape'}
    ]
  }

  // constructor() {
  //   super()
  //   this.handleIncrement = this.handleIncrement.bind(this)
  // }

  handleIncrement = (fruit) => {
    const itemFruit = this.state.fruits[this.state.fruits.findIndex(item => item.id === fruit.id)]
    const keyQty = "qty" in itemFruit
    if(!keyQty) {
      itemFruit['qty'] = 1
    } else {
      itemFruit['qty'] += 1
    }

    this.setState({
      ...this.state,
      fruits: [...this.state.fruits]
    })

  }
  
  render() {
    return (
      <div className="container home">
        {this.renderFruit()}
      </div>
    )
  }

  renderFruit() {
    if(this.state.fruits.length === 0) return <p>There are no fruits!</p>

    return(
      <ul>
        {this.state.fruits.map(fruit => 
          <li key={fruit.id} style={{ margin: 5 }}>
            <button>-</button>
            <span style={{ margin: 10 }}>{fruit.name} { this.checkKey(fruit) }</span>
            <button onClick={() => this.handleIncrement(fruit)}>+</button>
          </li>
        )}
      </ul>
    )
  }

  checkKey(fruit) {
    const keyQty = "qty" in fruit

    if(!keyQty) return "(0)"
    return fruit.qty
  }

  formatCount() {
    const {count} = this.state
    return count === 0 ? 'Zero' : count
  }
}

export default ShoppingCart