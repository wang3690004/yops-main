const responseBody = {};

export const builder = (data, headers = {}) => {
  responseBody.data = data;

  if (headers !== null && typeof headers === "object" && Object.keys(headers).length > 0) {
    responseBody._headers = headers;
  }

  return responseBody;
};
//table返回数据格式

export const formBuilder = (data) => {
  return { ...data };
};
//查询详情返回格式

export const getQueryParameters = (options) => {
  const url = options.url;
  const search = url.split("?")[1];
  if (!search) {
    return {};
  }
  return JSON.parse('{"' + decodeURIComponent(search).replace(/"/g, '\\"').replace(/&/g, '","').replace(/=/g, '":"') + '"}');
};

export const getBody = (options) => {
  return options.body && JSON.parse(options.body);
};
