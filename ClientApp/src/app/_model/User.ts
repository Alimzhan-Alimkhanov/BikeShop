export interface User {
    id: number;
        name: string;
        passwordHash: string;
        passwordSalt: string;
        created: Date;
        lastActive: Date;
        gender: string;
        age: number;
        telephone_number: string;
        user_Photo?: any;
        user_List_Bike?: any;
}
