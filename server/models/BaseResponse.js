class BaseResponse {
  constructor(
    success,
    response = {},
    error = [],
  ) {
    this.success = success;
    this.error = error;
    this.response = response;
  }
}

module.exports = BaseResponse;