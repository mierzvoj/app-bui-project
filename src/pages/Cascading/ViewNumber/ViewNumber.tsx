import React from "react";
import "./ViewNumber.css";

export interface ViewNumberProps {
  number: number;
  isHex: boolean;
}

const ViewNumber = ({ number, isHex }: ViewNumberProps) => {
  const [hex, setHex] = React.useState(isHex);

  // console.log(hex);
  // console.log(setHex);
  // console.log(number.toString(16));

  const toggle = () => {
    setHex(!hex);
  };

  return (
    <div>
      My number is <b>{hex ? number.toString(16) : number}</b>
      <button className="button" onClick={toggle}>
        toggle from number
      </button>
    </div>
  );
};
export default ViewNumber;
