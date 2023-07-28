export interface User {
    _id: string;
    email: string;
    password: string;
    firstName: string;
    lastName?: string;
    avatar?: string;
    createdAt: Date;
}

export type UserDTO = Omit<User, 'password'>;

export type UserLoginDTO = Pick<User, 'email' | 'password'>;

export type UserRegisterDTO = Pick<User, 'email' | 'password' | 'firstName'>;
