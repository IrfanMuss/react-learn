import Label from "../../Atoms/Label/Label";
import Input from "../../Atoms/Input/Input";

const InputForm = (props) => {
  const { name, children, placeholder, type } = props;
  return (
    <div className="mb-6">
      <Label htmlFor={name}>{children}</Label>
      <Input type={type} name={name} placeholder={placeholder} />
    </div>
  );
};

export default InputForm;
