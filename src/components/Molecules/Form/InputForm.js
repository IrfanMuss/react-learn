import Label from "../../Atoms/Label/Label";
import Input from "../../Atoms/Input/Input";
import { forwardRef } from "react";

const InputForm = forwardRef((props, ref) => {
  const { name, children, placeholder, type } = props;
  return (
    <div className="mb-6">
      <Label htmlFor={name}>{children}</Label>
      <Input type={type} name={name} placeholder={placeholder} ref={ref} />
    </div>
  );
});

export default InputForm;
