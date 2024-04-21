import * as yup from 'yup';

export const phoneValidations = yup.object().required().shape({
    number: yup.number().required(),
});
