// src/components/molecules/FormField.jsx
import Input from "../atoms/Input";

const FormField = ({ label, ...props }) => {
  return (
    <div className="mb-4">
      <label className="block mb-1 text-sm font-medium">{label}</label>
      <Input {...props} />
    </div>
  );
};

export default FormField;
