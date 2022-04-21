function classes(...names: (string | undefined | null)[]) {
  return names.filter(Boolean).join(" ");
}

interface ClassToggle {
  [K: string]: boolean;
}
interface Options {
  extra: string | undefined;
}

export function scopedClass(prefix: string) {
  return function (name: ClassToggle | string, options?: Options) {
    const classNames = name instanceof Object ? name : { [name]: name };
    
    return Object.entries(classNames)
      .filter((cn) => cn[1])
      .map((cn) => cn[0])
      .map((cn) => [prefix, cn].filter(Boolean).join("-"))
      .concat(options?.extra || [])
      .join(" ");
  };
}

export default classes;
