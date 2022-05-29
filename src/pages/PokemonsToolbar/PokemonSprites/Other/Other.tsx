import React from "react";

const Other = ({ url }: { url: string }) => {
  console.log(url);
  return (
    <div>
      <img src={url} alt={url} />
    </div>
  );
};
export default Other;
