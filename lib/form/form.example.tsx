import * as React from "react";
import Form from "./form";

export default function Example() {
  const formFields = [
    { label: "姓名", type: "text", name: "username" },
    { label: "电话号码", type: "text", name: "tel" },
  ];
  const formData = {username: "姓名", tel: 11110000};
  return <Form fields={formFields} data={formData} />;
}
