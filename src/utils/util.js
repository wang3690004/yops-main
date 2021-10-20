// 工具方法
export function checkDataType(value) {
  if (!value) {
    return "";
  }
  switch (Object.prototype.toString.call(value)) {
    case "[object String]":
      return "String";
    case "[object Number]":
      return "Number";
    case "[object Boolean]":
      return "Boolean";
    case "[object Null]":
      return "Null";
    case "[object Undefined]":
      return "Undefined";
    case "[object Array]":
      return "Array";
    case "[object Function]":
      return "Function";
    case "[object Object]":
      return "Object";
    default:
      return "";
  }
} //检测数据类型 object array string number function  boolean

export function isEmpty(val) {
  if (val === undefined || val === null) {
    return true;
  }

  if (typeof val === "string") {
    return val.trim().length === 0;
  }

  if (val instanceof Array) {
    if (val.length === 0) {
      return true;
    }
  }

  return false;
} //校验是否为空
