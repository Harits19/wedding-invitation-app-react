export interface LoginRequestModel {
  name: string;
  password: string;
}

export interface LoginResponseModel {
  access_token: string;
  refresh_token: string;
}
