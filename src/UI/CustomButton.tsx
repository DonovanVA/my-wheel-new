import React from "react";

const CustomButton = ({ onClick, text }: { onClick: any; text: string }) => {
  return (
    <div
      style={{
        backgroundColor: "#0000EE",
        color: "#FFFFFF",
        width: 120,
        borderRadius: 20,
        cursor: "pointer",
        textAlign: "center",
        padding: "2px",
      }}
      onClick={onClick}
    >
      <p>{text}</p>
    </div>
  );
};

export default CustomButton;
