import * as React from "react";
import Form from "./form";
import Button from "../../lib/button/button";
import validator from "./validator";
import { FormValue } from "./form";

export default function Example() {
  const formFields = [
    { label: "姓名", name: "username", input: { type: "text" } },
    { label: "密码", name: "password", input: { type: "password" } },
  ];
  const [formData, setFormData] = React.useState<FormValue>({ username: "姓名", password: 11110000 });
  const formChange = (value: FormValue) => {
    setFormData(value);
  };
  return (
    <Form
      onSubmit={() => {
        console.log("onSubmit");
      }}
      fields={formFields}
      value={formData}
      onChange={formChange}
      buttons={[
        <Button key="1" type="submit" size="small">
          提交
        </Button>,
        <Button key="2" size="small">返回</Button>,
      ]}
    />
  );
}
