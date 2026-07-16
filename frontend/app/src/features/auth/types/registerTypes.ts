
export type RegisterData = {
     first_name : string,
        last_name : string,
        phone_number: string,
        email: string,
        password: string,
        agree_to_terms: boolean,
}

export type RegisterAction = {
    type: string;
    field: keyof RegisterData;
    value: string | boolean;
};