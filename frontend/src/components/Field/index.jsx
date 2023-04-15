import React from "react";

const Field = ({ error, onChange, ...props }) => {
  const _onChange = (e) => {
    onChange(e.target.value);
  };

  return (
    <div className="relative">
      <input
        {...props}
        onChange={_onChange}
        className="border border-black rounded p-4 w-full mt-5 outline-none"
      />
      {error && (
        <span className="text-red-500 absolute top-full left-0 italic">
          {error}
        </span>
      )}
    </div>
  );
};

export default Field;
