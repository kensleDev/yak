export const pipe = (...fns) => x => fns.reduce((v, f) => f(v), x);

export const tap = callbackFn => (value: any) => callbackFn(value);
