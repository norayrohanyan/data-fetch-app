import { users, IUser, IAuthResponse } from "mock/users";

export const mockLogin = async ({ email, password }: IUser): Promise<IAuthResponse | null> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const user = users.find((user) => user.email === email && user.password === password);
      if (user) {
        resolve({ user, token: 'token' });
      } else {
        resolve(null);
      }
    }, 1000);
  });
};

export const mockRegister = async ({ email, password }: IUser): Promise<boolean> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const userExists = users.some((user: IUser) => user.email === email);
      if (userExists) {
        resolve(false);
      } else {
        const newUser: IUser = { email, password };
        users.push(newUser);
        resolve(true);
      }
    }, 1000);
  });
};