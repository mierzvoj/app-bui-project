import React from "react";

const Other = ({ url }: { url: string }) => {
  const onClick = (event: React.MouseEvent<HTMLImageElement, MouseEvent>) =>
    console.log("X = ", event.clientX, ", Y = ", event.clientY);

  return (
    <div>
      <img src={url} alt={url} onClick={(event) => onClick(event)} />
    </div>
  );
};
export default Other;
