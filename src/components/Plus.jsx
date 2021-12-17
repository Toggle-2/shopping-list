import React from "react";

function Add(props) {
  return (
    <>
      <div
        className="Add-button"
        onMouseDown={props.addHandler}
        onMouseUp={() => props.setActive(false)}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          version="1"
          viewBox="0 0 768 768"
        >
          <defs>
            <clipPath id="a">
              <path d="M11.754 11.754h744.75v744.75H11.754zm0 0"></path>
            </clipPath>
          </defs>
          <g clipPath="url(#a)">
            <path d="M686.684 314.309H453.949V81.574c0-38.566-31.258-69.82-69.82-69.82-38.567 0-69.82 31.254-69.82 69.82V314.31H81.574c-38.566 0-69.82 31.253-69.82 69.82 0 38.562 31.254 69.82 69.82 69.82H314.31v232.735c0 38.562 31.253 69.82 69.82 69.82 38.562 0 69.82-31.258 69.82-69.82V453.949h232.735c38.562 0 69.82-31.258 69.82-69.82 0-38.567-31.258-69.82-69.82-69.82zm0 0"></path>
          </g>
        </svg>
      </div>
      <h3 className="Add-item">
        ADD ITEM
      </h3>
    </>
  );
}

export default Add;
