import React from "react";

const FrontDefault = ({ url }: { url: string }) => {
  console.log(url);
  return (
    <div>
      <img src={url} alt="front_default" />
    </div>
  );
};
export default FrontDefault;
