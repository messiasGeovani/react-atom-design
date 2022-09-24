export interface IObject {
  [key: string]: any;
}

export function normalizeObject(object: IObject): IObject {
  Object.keys(object).forEach((key) => {
    if (!object[key]) {
      delete object[key];
    }
  });

  return object;
}
