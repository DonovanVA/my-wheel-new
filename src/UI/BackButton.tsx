import React from "react";

const BackButton = ({ onClick, text }: { onClick: any; text: string }) => {
  return (
    <div
      style={{
        cursor: "pointer",
        textAlign: "center",
        padding: "5px",
        color:"#0000FF"
      }}
      onClick={onClick}
    >
      <p>{text}</p>
    </div>
  );
};

export default BackButton;
