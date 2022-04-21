import React, { FormHTMLAttributes } from "react";
import "./form.scss";

interface FieldType {
  name: string;
  type: string;
  label: string;
}

interface Props extends FormHTMLAttributes<HTMLFormElement> {
  fields: Array<FieldType>;
  data: any;
}

const Form: React.FunctionComponent<Props> = (props) => {
  const { className, data, ...rest } = props;
  console.log(props.fields);
  console.log(data);
  return (
    <form {...rest}>
      <table className="react-ui-form-table">
        <tbody>
          {props.fields.map((field) => (
            <tr key={field.name}>
              <td>{field.name}</td>
              <td>
                <input type={field.type} defaultValue={data[field.name]} />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </form>
  );
};

export default Form;
