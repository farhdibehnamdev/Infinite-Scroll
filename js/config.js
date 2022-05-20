class Config {
  constructor(endPoint, method, headers, data) {
    this.endPoint = endPoint;
    this.method = method;
    this.headers = headers;
    this.data = data;
  }
  #apiBase = "https://api.unsplash.com/";
  #_key;
  static set AccessKey(value) {
    return (this._key = `Client-ID ${value}`);
  }

  static get AccessKey() {
    return this._key;
  }
  // #accessKey = "Client-ID HGXt8lN7WnaA2chkM1MfxXkLFFHDlxeyBPOSpR2xJM8";

  async createRequest() {
    const options = this.#createOptions(this.method, this.headers, this.data);
    return await fetch(this.#apiBase + this.endPoint, options);
  }
  #createOptions(method, headers, data) {
    const options = {};
    if (headers) options.headers = headers;
    if (data) options.data = data;
    options.method = method;
    return options;
  }
}
