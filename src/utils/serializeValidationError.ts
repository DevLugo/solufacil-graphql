import {ValidationError} from 'yup';
interface Error {
    path: string;
    message: string;
}

export const serializeValidationError = (error: ValidationError) => {
    const invalid: Error[] = [];
    
    error.inner.forEach((e) => {
        invalid.push({
            path: e.path,
            message: e.message,
        });
    });
    return invalid;
}