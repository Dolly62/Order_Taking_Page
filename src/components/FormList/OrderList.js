import React from "react";
import List from "./List";

const OrderList = (props) => {
const filteredOrdersTable1 = props.orders.filter((order) => order.selectedtable === "Table 1")
const filteredOrdersTable2 = props.orders.filter((order) => order.selectedtable === "Table 2")
const filteredOrdersTable3 = props.orders.filter((order) => order.selectedtable === "Table 3")

  return (
    <>
      <h1>Orders</h1>
      <div>
      <h3>Table 1</h3>
      <ul>
        {filteredOrdersTable1.map((order) => (
          <li key={order.id}>
            <List key={order.id} id={order.id} onDelete={props.onDeleteOrder}>
              {order.orderID} - {order.price} - {order.name} -{" "}
              {order.selectedtable}
            </List>
          </li>
        ))}
      </ul>
      </div>
<div>
      <h3>Table 2</h3>
      <ul>
        {filteredOrdersTable2.map((order) => (
          <li key={order.id}>
            <List key={order.id} id={order.id} onDelete={props.onDeleteOrder}>
              {order.orderID} - {order.price} - {order.name} -{" "}
              {order.selectedtable}
            </List>
          </li>
        ))}
      </ul>
      </div>
      <div>
      <h3>Table 3</h3>
      <ul>
        {filteredOrdersTable3.map((order) => (
          <li key={order.id}>
            <List key={order.id} id={order.id} onDelete={props.onDeleteOrder}>
              {order.orderID} - {order.price} - {order.name} -{" "}
              {order.selectedtable}
            </List>
          </li>
        ))}
      </ul>?
      </div>
    </>
  );
};

export default OrderList;
