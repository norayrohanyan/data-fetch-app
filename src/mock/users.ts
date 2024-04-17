export interface IUser {
  email: string;
  password: string;
}

export interface IAuthResponse {
  user: IUser;
  token: string;
}

export const users: IUser[] = [
  {
    email: 'user@example',
    password: 'password',
  },
];