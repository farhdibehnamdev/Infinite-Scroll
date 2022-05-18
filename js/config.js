class Config {
  #apiBase = "";
  constructor(endPoint, method, headers, data) {
    this.endPoint = endPoint;
    this.method = method;
    this.headers = headers;
    this.data = data;
  }
  #createOptions() {
    const options = {};
    if (headers) options.headers = headers;
    if (data) options.data = data;
    options.method = method;
    return options;
  }
}
