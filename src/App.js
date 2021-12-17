import Add from "./components/Plus";
import "./App.css";
import ListItems from "./components/ListItem";
import NewItem from "./components/NewItem";
import { useState } from "react";

function App() {
  const [active, setActive] = useState(false);
  const [itemList, setItemList] = useState([]);
  const [addingItem, setAddingItem] = useState(false);

  const addItemHandler = () => {
    setActive(true);
    setAddingItem(!addingItem);
  };

  const addToDoHandler = (newTxt) => {
    setItemList((items) => {
      return [...items, { title: newTxt, key: items.length }];
    });
    setAddingItem(false);
  };

  const removeHandler = (key) => {
    const newList = itemList.filter((items) => {
      return items.key !== key;
    });
    newList.forEach((item) => {
      if (item.key > key) {
        item.key--;
      }
      return newList;
    });
    setItemList(newList);
  };

  return (
    <div className="App">
      {addingItem && <NewItem addToDoHandler={addToDoHandler} />}
      <header className="App-header">
        <h1>Build Your Checklist</h1>
      </header>
      <div className="App-body">
        <Add
          active={active}
          setActive={setActive}
          addHandler={addItemHandler}
        />
        <ListItems itemList={itemList} removeHandler={removeHandler} />
      </div>
    </div>
  );
}

export default App;
