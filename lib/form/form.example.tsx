import * as React from "react";
import Form from "./form";
import Button from "../../lib/button/button";
import Validate, { FormErrors, noErrors } from "./validator";
import { FormValue } from "./form";
import { useState } from "react";

const usernames = ["Jackjack", "Alice", "Bobbob"];
const passwords = ["123456", "123123", "123"];
const checkUserName = (username: string, succeed: (value: any) => void, fail: () => void) => {
  setTimeout(() => {
    if (usernames.indexOf(username) >= 0) {
      fail();
    } else {
      succeed(value);
    }
  }, 1000);
};

const checkPassword = (password: string, succeed: (value: any) => void, fail: () => void) => {
  setTimeout(() => {
    if (passwords.indexOf(password) >= 0) {
      fail();
    } else {
      succeed(value);
    }
  }, 1000);
};

const validator = (username: string) => {
  return new Promise<string>((resolve, reject) => {
    checkUserName(username, resolve, () => reject('unique'));
  });
};

const validatorPsw = (password: string) => {
  return new Promise<string>((resolve, reject) => {
    checkPassword(password, resolve, () => reject('unique'));
  });
}

export default function Example() {
  const formFields = [
    { label: "用户名", name: "username", input: { type: "text" } },
    { label: "密码", name: "password", input: { type: "password" } },
  ];
  const [formData, setFormData] = useState<FormValue>({});
  const [formErrors, setFormErrors] = useState<FormErrors>({});
  const rules = [
    { key: "username", required: true },
    { key: "username", validator },
    { key: "username", validator },
    { key: "password", validator: validatorPsw },
    { key: "password", validator: validatorPsw },
  ];
  const onSubmit = () => {
    Validate(formData, rules, (errors: any) => {
      console.log({errors});
      setFormErrors(errors);
    });
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
