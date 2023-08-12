import React from 'react';

const List = (props) => {
    const deleteHandler = () => {
        props.onDelete(props.id);
    }
  return (
    <ul>
      {props.children}
      <button onClick={deleteHandler}>Delete Order</button>
    </ul>
  );
};

export default List;
