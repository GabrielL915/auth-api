export interface User {
    id?: string;
    name: string;
    email: string;
    age: number;
    password: string;
    createdAt?: Date;
    updatedAt?: Date;
}