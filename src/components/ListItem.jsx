import React from "react";
import classes from "./list.module.css";

function ListItems(props) {

  return (
    <>
      {props.itemList.map((item) => {
        return (
          <div className={classes.item} key={item.key}>
            <h2>{item.title}</h2>
            <button onClick={() => props.removeHandler(item.key)}>remove</button>
          </div>
        );
      })}
    </>
  );
}

export default ListItems;
