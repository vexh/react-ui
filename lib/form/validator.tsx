import { createBrowserHistory } from "history";
import { FormValue } from "./form";

interface FormRule {
  key: string,
  required?: boolean;
  minLength?: number;
  maxLength?: number;
  validator?: (value: string) => Promise<string>
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

type OneError = string | Promise<string>

function validate(value: FormValue, rules: FormRules, callback: (error: any) => void) {
  const errors: { [key: string]: OneError[] } = {};
  const addErrorMsg = (key: string, oneError: OneError) => {
    if (errors[key] === undefined) {
      errors[key] = []
    }
    errors[key].push(oneError);

  }
  rules.forEach(r => {
    const v = value[r.key];
    if (r.required && isEmpty(v)) {
      addErrorMsg(r.key, '必填');
    }
    if (r.minLength && !isEmpty(v) && v?.length < r.minLength) {
      addErrorMsg(r.key, '太短');
    }
    if (r.maxLength && !isEmpty(v) && v?.length > r.maxLength) {
      addErrorMsg(r.key, '太长');
    }
    if (r.validator) {
      const promise = r.validator(v);
      addErrorMsg(r.key, promise);
    }
  })
  console.log(errors);
  
  const promises = Object.keys(errors).map(errorKey => errors[errorKey]).flat().filter((error: OneError) => error instanceof Promise);
  // console.log(errors, Object.keys(errors), promises)
  Promise.all(promises).then(() => {
    Object.keys(errors).map(key => {
      const ers = errors[key].filter(stringOrPromise => !(stringOrPromise instanceof Promise));
      console.log(ers);
      callback(errors);
    })
  }, () => {
    console.log('出问题了')
  })
}

export default validate;