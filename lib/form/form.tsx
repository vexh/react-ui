import React, { ChangeEvent, ChangeEventHandler, FormEventHandler, FormHTMLAttributes, ReactElement, useState } from "react";
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

const Form: React.FunctionComponent<Props> = (props) => {
  // const { className, onSubmit } = props;
  const formData = props.value;

  const onInputChange = (name: string, value: string) => {
    props.onChange({ ...formData, [name]: value });
  };

  return (
    <>
    {JSON.stringify(formData)}
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
