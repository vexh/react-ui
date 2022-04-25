import * as React from "react";
import Form from "./form";
import Button from "../../lib/button/button";
import validator, { FormErrors, noErrors } from "./validator";
import { FormValue } from "./form";
import { useState } from "react";

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

export default function Example() {
  const formFields = [
    { label: "姓名", name: "username", input: { type: "text" } },
    { label: "密码", name: "password", input: { type: "password" } },
  ];
  const [formData, setFormData] = useState<FormValue>({ username: "姓名", password: 111100 });
  const [formErrors, setFormErrors] = useState<FormErrors>({});
  
  const formChange = (value: FormValue) => {
    const errors = validator(formData, rules);
    console.log(noErrors(errors));
    setFormData(value);
    setFormErrors(errors);
  };
  return (
    <Form
      onSubmit={() => {
        console.log("onSubmit");
      }}
      fields={formFields}
      value={formData}
      onChange={formChange}
      errors={formErrors}
      buttons={[
        <Button key="1" type="submit" size="small">
          提交
        </Button>,
        <Button key="2" size="small">
          返回
        </Button>,
      ]}
    />
  );
}
