import React from "react";

interface ItemProps {
  id: number;
  value: number;
  isHex: boolean;
  handler: (val: number) => void;
}

const Item = function ({ id, value, isHex, handler }: ItemProps) {
  const handleDelete = (itemId: number, handlerFn: (val: number) => void) => {
    handlerFn(itemId);
  };

  return (
    <>
      <button onClick={() => handleDelete(id, handler)}>Delete</button>
    </>
  );
};

export default Item;
