import { forwardRef } from "react";

const Input= forwardRef( ({ name, type, placeholder }, ref) => {
  return (
    <input
      name={name}
      id={name}
      type={type}
      placeholder={placeholder}
      ref={ref}
      className="text-sm border rounded w-full py-2 px-3 text-slate-700 placeholder : opacity-50"
    />
  );
});

export default Input;
