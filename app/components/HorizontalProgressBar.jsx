import React from 'react'

const HorizontalProgressBar = ({ percentage, color="orange" }) => {

  const bgLight = {
    orange: "bg-orange-200",
    blue: "bg-blue-200",
    green: "bg-green-200",
    red: "bg-red-200",
  };

  const bgDark = {
    orange: "bg-orange-500",
    blue: "bg-blue-500",
    green: "bg-green-500",
    red: "bg-red-500",
  };

  return (
    <div className={`w-full h-2  ${bgLight[color]} rounded`}>
      <div
        className={`h-full  ${bgDark[color]} transition-all duration-500`}
        style={{ width: `${percentage}%` }}
      />
    </div>
  );
};

export default HorizontalProgressBar;