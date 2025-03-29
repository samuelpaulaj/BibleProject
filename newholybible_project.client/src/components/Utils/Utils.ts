import { isEmpty as _isEmpty } from "lodash";

export const isEmpty = (value: any) => {
  return (
    value === undefined ||
    value === null ||
    String(value).trim() === "" ||
    value?.length === 0 ||
    (Object.prototype.toString.call(value) === "[object Object]" &&
      _isEmpty(value))
  );
};
