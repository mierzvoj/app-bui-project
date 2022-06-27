import React, { useState } from "react";
import Item from "./pages/Cascading/Item/Item";
import Number from "./pages/Cascading/ViewNumber/ViewNumber";

const Items = () => {
  const [numbers, setNumbers] = useState(
    Array.from({ length: 10 }, (id: number) => {
      return {
        id,
        num: Math.floor(Math.random() * 100),
        isHex: false,
      };
    })
  );

  const [state, setState] = useState(numbers);

  const updateData = () => {
    let temp_state = [...state];
    let temp_element = { ...state[1] };
    temp_element.num = Math.random() * 100;
    temp_state[1] = temp_element;
    setState(temp_state);
  };

  const handleDelete = function (itemId: number) {
    const newItems = [...numbers];
    var index = newItems.findIndex((i) => i.id === itemId);
    if (index !== -1) {
      newItems.splice(index, 1);
      setNumbers(newItems);
    }
  };

  const deleteHandler = (itemId: number) => handleDelete(itemId);
  const refresh = () => updateData();

  return (
    <>
      <>
        <button onClick={refresh}>Refresh</button>
        {numbers.map((item) => (
          <Item
            key={item.id}
            id={item.id}
            handler={deleteHandler}
            value={item.num}
            isHex={item.isHex}
          />
        ))}
      </>
      <>
        {numbers.map((item) => (
          <Number number={item.num} isHex={item.isHex} />
        ))}
      </>
    </>
  );
};

export default Items;
