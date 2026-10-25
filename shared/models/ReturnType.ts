export class ReturnType<T> {
    statusCode: number;
    data: T;
    message: string;
    success: boolean;
    pagination?: Pagination

    constructor({ statusCode, data, message, success, pagination }: { statusCode: number, data: T, message: string, success: boolean, pagination?: Pagination }) {
        this.statusCode = statusCode;
        this.data = data;
        this.message = message;
        this.success = success;
        this.pagination = pagination;
    }
}

export type Pagination = {
    total: number;
    page: number;
    limit: number;
    totalPages: number;
}