export class ResponseBase {
  public status: boolean = false;
  public data?: object;
  public error?: { code: string, message: string };
}
