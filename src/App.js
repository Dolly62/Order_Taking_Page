import React, { useEffect, useState } from "react";
import Input from "./components/FormInput/Input";
import OrderList from "./components/FormList/OrderList";

function App() {
  const initialList = JSON.parse(localStorage.getItem("orderList")) || []
  const [orderList, setOrderList] = useState(initialList);

  useEffect(() => {
    localStorage.setItem("orderList", JSON.stringify(orderList))
  }, [orderList])

  const addOrderHandler = (orderID, orderprice, ordername, table) => {
    setOrderList((prevLists) => {
      const newList = {
        id: Math.random().toString(),
        orderID: orderID,
        price: orderprice,
        name: ordername,
        selectedtable: table,
      };

      const updatedLists = [...prevLists, newList];
      return updatedLists;
    });
  };

  const deleteOrderHandler = (orderId) => {
    setOrderList((prevLists) => {
      const updatedLists = prevLists.filter((order) => order.id !== orderId)
      return updatedLists;
    });
  }

  return (
    <div className="App">
      <Input onAddOrder={addOrderHandler} />
      <OrderList orders={orderList} onDeleteOrder={deleteOrderHandler} />
    </div>
  );
}

export default App;
