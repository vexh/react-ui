import { createBrowserHistory } from "history";
import { FormValue } from "./form";

interface FormRule {
  key: string;
  required?: boolean;
  minLength?: number;
  maxLength?: number;
  validator?: (value: string) => Promise<string>;
}

// type FormRules = FormRule[];
type FormRules = Array<FormRule>;

export interface FormErrors {
  [K: string]: string[];
}

function isEmpty(value: string | undefined | null) {
  return !value?.trim();
}

export function noErrors(errors: FormErrors) {
  return !Object.keys(errors).length;
}

type OneError = string | Promise<string>;

function Validate(value: FormValue, rules: FormRules, callback: (error: any) => void) {
  const errors: { [key: string]: OneError[] } = {};
  const addError = (key: string, oneError: OneError) => {
    if (errors[key] === undefined) {
      errors[key] = [];
    }
    errors[key].push(oneError);
  };
  rules.forEach((r) => {
    const v = value[r.key];
    if (r.required && isEmpty(v)) {
      addError(r.key, "必填");
    }
    if (r.minLength && !isEmpty(v) && v?.length < r.minLength) {
      addError(r.key, "太短");
    }
    if (r.maxLength && !isEmpty(v) && v?.length > r.maxLength) {
      addError(r.key, "太长");
    }
    if (r.validator) {
      const promise = r.validator(v);
      addError(r.key, promise);
    }
  });

  function hasError(item: [string, undefined] | [string, string]): item is [string, string] {
    const [key, value] = item;
    return !!value;
  }

  const flattenErrors = Object.keys(errors)
    .map((key) => errors[key].map<[string, OneError]>((error) => [key, error]))
    .flat();

  const formattedPromises = flattenErrors.map((item) => {
    const [key, stringOrPromise] = item;
    const promise = stringOrPromise instanceof Promise ? stringOrPromise : Promise.reject(stringOrPromise);
    return promise.then<[string, undefined], [string, string]>(
      () => [key, undefined],
      (reason) => [key, reason]
    );
  });

  Promise.all(formattedPromises).then((results) => {
    callback(zip(results.filter<[string, string]>(hasError)));
  });
}

// [ ['username', 'unique']
// ['username', 'unique']
// ['password', 'unique']
// ['password', 'unique'] ]
function zip(kvList: [string, string][]) {
  const result: { [key: string]: string[] } = {};
  kvList.map(([key, value]) => {
    result[key] = result[key] || [];
    result[key].push(value);
  });
  return result;
}

export default Validate;
