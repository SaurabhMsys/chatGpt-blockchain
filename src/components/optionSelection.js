import React from "react";

export default function OptionSelection({ arrayItem, selectOption }) {
    
  return (
    <>
      <h1 className="heading">Blockchain with ChatGPT</h1>

      <div className="grid-main">
        {arrayItem.map((item) => {
          return (
            <div
              className="grid-child"
              onClick={() => selectOption(item.option)}
            >
              <h3>{item.name}</h3>
              <p>{item.description}</p>
              
            </div>

          );
        })}
      </div>
    </>
  );
}
