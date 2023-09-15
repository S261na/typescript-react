import React from "react";

function Button({ color, children, colorText, onClick }) {
  return (
    <button
      style={{
        backgroundColor: color,
        color: colorText,
        border: "1px solid aqua",
        borderRadius: "20px",
        marginBottom: "4%",
      }}
      onClick={onClick}
    >
      {children}
    </button>
  );
}

export default Button;
