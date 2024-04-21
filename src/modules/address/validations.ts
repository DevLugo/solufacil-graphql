import * as yup from 'yup';

export const addressValidations = yup.object().required().shape({
    street: yup.string().required(),
    exteriorNumber: yup.string(),
    interiorNumber: yup.string(),
    postalCode: yup.string().required(),
    references: yup.string().required(),
});
