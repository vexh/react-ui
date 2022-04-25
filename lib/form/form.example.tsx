import * as React from "react";
import Form from "./form";
import Button from "../../lib/button/button";
import validate, { FormErrors, noErrors } from "./validator";
import { FormValue } from "./form";
import { useState } from "react";

const usernames = ['Jackjack', 'Alice', 'Bobbob'];
const checkUsername = (username: string, success: (value: any) => void, fail: () => void) => {
  setTimeout(() => {
    console.log('username 验证完毕')
    if (usernames.indexOf(username)) {
      success(value);
    } else {
      fail();
    }
  }, 3000)
}

const rules = [
  {
    key: "username",
    required: true,
    minLength: 6,
  },
  {
    key: "password",
    required: true,
    maxLength: 12,
    validator: (value: string) => {
      return new Promise<string>((resolve, reject) => {
        checkUsername(value, resolve, reject);
      });
    }
  }
];

export default function Example() {
  const formFields = [
    { label: "用户名", name: "username", input: { type: "text" } },
    { label: "密码", name: "password", input: { type: "password" } },
  ];
  const [formData, setFormData] = useState<FormValue>({});
  const [formErrors, setFormErrors] = useState<FormErrors>({});

  const onSubmit = () => {
    const cb = (errors: any) => {
      setFormErrors(errors);
    }
    validate(formData, rules, cb)
    if (noErrors(formErrors)) {
    }
  };
  const onFormChange = (value: FormValue) => {
    setFormData(value);
  };
  return (
    <Form
      onSubmit={onSubmit}
      fields={formFields}
      value={formData}
      onChange={onFormChange}
      errors={formErrors}
      buttons={[
        <Button key="1" type="submit" size="small" style={{ marginRight: "10px" }}>
          提交
        </Button>,
        <Button key="2" size="small">
          返回
        </Button>,
      ]}
    />
  );
}
function value(value: any) {
  throw new Error("Function not implemented.");
}

