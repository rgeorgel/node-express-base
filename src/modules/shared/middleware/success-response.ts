import { ResponseBase } from "./response-model";

export class SuccessResponse extends ResponseBase {
  constructor(data: object) {
    super();

    this.status = true;
    this.data = data;
  }
}
