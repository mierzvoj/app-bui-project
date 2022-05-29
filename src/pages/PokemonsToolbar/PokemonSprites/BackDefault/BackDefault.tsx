import React from "react";

const BackDefault = ({ url }: { url: string }) => {
  console.log(url);
  return (
    <div>
      <img src={url} alt="back_default" />
    </div>
  );
};
export default BackDefault;
