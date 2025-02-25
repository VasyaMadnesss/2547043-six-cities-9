export enum UserType {
  default = 'default',
  pro = 'pro'
}

export type User = {
  name: string;
  email: string;
  avatar?: string | null;
  password: string;
  userType: UserType;
}
