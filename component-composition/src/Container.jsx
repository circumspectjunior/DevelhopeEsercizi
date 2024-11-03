import { useState } from "react";

const Container = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div
      style={{
        backgroundColor: "white",
        border: "1px solid red",
      }}
    >
      <button onClick={toggleOpen}>{title}</button>

      {isOpen && children}
    </div>
  );
};

export default Container;
