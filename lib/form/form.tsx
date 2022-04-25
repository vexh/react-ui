import React, { FormHTMLAttributes, ReactElement } from "react";
import validator from "./validator";
import "./form.scss";

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
}

const rules = [
  {
    key: "username",
    required: true,
    minLength: 6,
  },
  {
    key: "password",
    maxLength: 12,
  },
];
const Form: React.FunctionComponent<Props> = (props) => {
  // const { className, onSubmit } = props;
  const formData = props.value;

  const onInputChange = (name: string, value: string) => {
    props.onChange({ ...formData, [name]: value });
  };
  const errors = validator(formData, rules);

  return (
    <>
      {JSON.stringify(formData)} <br></br>
      {JSON.stringify(errors)}
      <form
        onSubmit={(formData) => {
          console.log(formData);
        }}
      >
        <table className="react-ui-form-table">
          <tbody>
            {props.fields.map((field) => (
              <tr key={field.name}>
                <td>{field.name}</td>
                <td>
                  <input
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
