
export interface User {
    id?: string;
    firstname: string;
    lastname: string
    email: string;
    role: string;
    phone_number: string
    alt_phone_number: string
}

export interface Company {
    id: string;
    name: string;
    license: string;
    type: string;
    address: string
    city: string
    province: string;
    postal_code: string
}

export interface Client {
    id: string;
    firstname: string;
    lastname: string;
    email: string;
    status: string;
    dob: string,
    id_number: string,
    cip: string,
    cip_office: string,
    cfs_status: string[]
    supervisor: string
    lastest_report: string
}


// auth DTO
export interface LoginDto {
    email: string
    password: string
}

export interface LoginToken {
    token: string
}