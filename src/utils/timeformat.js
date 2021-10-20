import moment from "moment";
//时间类型 转化方法
export function standardTime(timestamp, format) {
  if (timestamp) {
    return moment(timestamp).format(format || "YYYY-MM-DD HH:mm:ss");
  } else {
    return " ";
  }
} //YYYY-MM-DD HH:mm:ss

// 时间转换
export function standardMinuteTime(timestamp, format) {
  if (timestamp) {
    return moment(timestamp).format(format || "YYYY-MM-DD HH:mm");
  } else {
    return " ";
  }
} //YYYY-MM-DD HH:mm

export function MDYTime(timestamp) {
  if (timestamp) {
    return moment(timestamp).format("YYYY-MM-DD");
  } else {
    return " ";
  }
} //YYYY-MM-DD
