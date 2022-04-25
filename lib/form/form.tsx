import React, { FormEventHandler, FormHTMLAttributes, ReactElement } from "react";
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
  errors: FormErrors;
  errorsDisplayMode?: "first" | "all";
  onChange: (value: FormValue) => void;
  onSubmit: FormEventHandler;
}

const showErrorMessage = () => {};

const Form: React.FunctionComponent<Props> = (props) => {
  // const { className, onSubmit } = props;
  const formData = props.value;
  const onInputChange = (name: string, value: string) => {
    props.onChange({ ...formData, [name]: value });
  };

  return (
    <>
      <form
        onSubmit={(formData) => {
          props.onSubmit(formData);
        }}
      >
        <table className="deepin-form">
          <tbody>
            {props.fields.map((field) => (
              <tr key={field.name}>
                <td>{field.label}</td>
                <td>
                  <Input type={field.input.type} value={formData[field.name]||''} onChange={(e) => onInputChange(field.name, e.target.value)} />
                  <div className="deepin-form-errors">
                    {props.errors[field.name] ? (
                      props.errorsDisplayMode === "first" ? (
                        props.errors[field.name]?.[0]
                      ) : (
                        props.errors[field.name].join(" ")
                      )
                    ) : (
                      <span>&nbsp;</span>
                    )}
                  </div>
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

Form.defaultProps = {
  errorsDisplayMode: "first",
};
export default Form;
