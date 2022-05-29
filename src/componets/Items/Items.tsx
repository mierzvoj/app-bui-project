import React, { useState } from "react";
import Item from "../Item/Item";
import ViewNumber from "../ViewNumber/ViewNumber";
import items from "../../Items";

const Items = () => {
  const [numbers, setNumbers] = useState(
    Array.from({ length: 10 }, (val, key) => {
      return {
        id: key,
        num: Math.floor(Math.random() * 100),
        isHex: false,
      };
    })
  );

  const [state, setState] = useState(numbers);

  const updateData = () => {
    let temp_state = [...state];
    let temp_element = { ...state[1] };
    temp_element.num = Math.random() * 10;
    temp_state[1] = temp_element;
    setState(temp_state);
  };

  // const generateNumbers = () => {
  //   setNumbers(Array.from({length: 10}, () => {
  //     return {
  //       num: Math.floor(Math.random() * 10),
  //       isHex: false
  //     }
  //   }));
  // }

  const handleDelete = function (itemId: number) {
    const newItems = [...numbers];
    var index = newItems.findIndex((i) => i.id === itemId);
    if (index !== -1) {
      newItems.splice(index, 1);
      setNumbers(newItems);
    }
  };

  const deleteHandler = (itemId: number) => handleDelete(itemId);
  const refresh = () => items();

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
          <ViewNumber key={item.id} number={item.num} isHex={item.isHex} />
        ))}
      </>
    </>
  );
};

export default Items;
