export class ApiResponse {
  statusCode: number;
  data: any;
  message: string;
  success: boolean;

  constructor(statusCode: number, data: any, message: string = "Success") {
    this.data = data;
    this.message = message;
    this.statusCode = statusCode;
    this.success = statusCode < 400;
  }
}
