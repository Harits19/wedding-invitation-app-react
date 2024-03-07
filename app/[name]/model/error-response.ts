export default class ErrorResponse extends Error {
  toString() {
    return this.message;
  }
}
