import React, { useState } from 'react'

const Input = (props) => {
const [enteredOrderID, setEnteredOrderID] = useState("")
const [enteredPrice, setEnteredPrice] = useState("")
const [enteredOrderName, setEnteredOrderName] = useState("")
const [selectTable, setSelectedTable] = useState("")

const addOrderHandler = (event) => {
    event.preventDefault();
    props.onAddOrder(enteredOrderID, enteredPrice, enteredOrderName, selectTable);
    setEnteredOrderID("")
    setEnteredPrice("")
    setEnteredOrderName("")
    setSelectedTable("")
}

const orderIDHandler = (event) => {
    setEnteredOrderID(event.target.value)
}
const orderPriceHandler = (event) => {
    setEnteredPrice(event.target.value)
}
const orderNameHandler = (event) => {
    setEnteredOrderName(event.target.value)
}
const selectTableHandler = (event) => {
    setSelectedTable(event.target.value)
}


  return (
    <>
      <h1>Order Form</h1>
      <form onSubmit={addOrderHandler} >
        <label htmlFor="orderid">Unique order ID:</label>
        <input
          type="number"
          id="orderid"
          value={enteredOrderID}
          onChange={orderIDHandler}
        />
        <label htmlFor="price">Order Price:</label>
        <input
          type="number"
          id="price"
          value={enteredPrice}
          onChange={orderPriceHandler}
        />
        <label htmlFor="dishname">Choose Dish:</label>
        <input
          type="text"
          id="dishname"
          value={enteredOrderName}
          onChange={orderNameHandler}
        />
        <label htmlFor='dish'>Choose a Table</label>
        <select id='dish' value={selectTable} onChange={selectTableHandler}>
            <option >Table 1</option>
            <option >Table 2</option>
            <option >Table 3</option>
        </select>
        <button type="submit">Add Order</button>
      </form>
    </>
  )
}

export default Input
