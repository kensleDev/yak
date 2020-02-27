export const map = <T>(callbackfn, index?: number) => (value: any[]) => {
  return value.map<T>(callbackfn, index);
};

export const filter = (callbackfn, index?: number) => (value: []) => {
  return value.filter(callbackfn, index);
};

export const find = predicate => (value: []) => {
  return value.find(predicate);
};

export const findIndex = predicate => (value: []) => {
  return value.findIndex(predicate);
};

export const flat = (depth?) => (value: Array<any>) => {
  return value.flat(depth);
};

export const flatMap = <T>(callbackfn) => (value: any[]) => {
  return value.flatMap<T>(callbackfn);
};

export const join = (seperator: string) => (value: []) => {
  return value.join(seperator);
};
