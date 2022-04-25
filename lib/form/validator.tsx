import { FormValue } from "./form";

interface FormRule {
  key: string,
  required?: boolean;
  minLength?: number;
  maxLength?: number;
}

// type FormRules = FormRule[];
type FormRules = Array<FormRule>;

export interface FormErrors {
  [K: string] :string[]
}

function isEmpty(value: string | undefined | null) {
  return !(value?.trim())
}

export function noErrors(errors: FormErrors) {
  return !Object.keys(errors).length;
}

function validator(value: FormValue, rules: FormRules) {
  const errors: FormErrors = {};
  const addErrorMsg = (key: string, message: string) => {
    if (errors[key] === undefined) {
      errors[key] = []
    }
    errors[key].push(message);

  }
  rules.forEach(r => {
    const v = value[r.key];
    console.log()
    if (r.required && isEmpty(v)) {
      addErrorMsg(r.key, '必填');
    }
    if (r.minLength && v?.length < r.minLength) {
      addErrorMsg(r.key, '太短');
    }
    if (r.maxLength && v?.length > r.maxLength) {
      addErrorMsg(r.key, '太长');
    }
  })
  return errors;
}

export default validator;