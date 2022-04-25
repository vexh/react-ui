import React, { FormHTMLAttributes, ReactElement } from "react";
import { FormErrors } from "./validator";
import "./form.scss";
import Input from "../input/input";

interface FieldType {
  name: string;
  input: { type: string };
  label: string;
}

export type FormValue = { [k: string]: any };

interface Props extends FormHTMLAttributes<HTMLFormElement> {
  fields: Array<FieldType>;
  buttons: Array<ReactElement>;
  value: FormValue;
  onChange: (value: FormValue) => void;
  errors: FormErrors
}


const Form: React.FunctionComponent<Props> = (props) => {
  // const { className, onSubmit } = props;
  const formData = props.value;

  const onInputChange = (name: string, value: string) => {
    props.onChange({ ...formData, [name]: value });
  };
  console.log(props.errors);
  
  return (
    <>
      <form
        onSubmit={(formData) => {
          console.log(formData);
        }}
      >
        <table className="deepin-form-table">
          <tbody>
            {props.fields.map((field) => (
              <tr key={field.name}>
                <td>{field.name}</td>
                <td>
                  <Input
                    type={field.input.type}
                    value={formData[field.name] || ""}
                    onChange={(e) => onInputChange(field.name, e.target.value)}
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <div>{props.buttons}</div>
      </form>
    </>
  );
};

export default Form;
