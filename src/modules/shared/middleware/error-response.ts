import { ResponseBase } from "./response-model";

export class ErrorResponse extends ResponseBase {
  constructor(code: string, message: string) {
    super();

    this.status = false;
    this.error = { code, message };
  }
}
