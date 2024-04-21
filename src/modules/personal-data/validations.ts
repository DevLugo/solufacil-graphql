import * as yup from 'yup';
import { phoneValidations } from '../phone/validations';
import { addressValidations } from '../address/validations';

export const personalDataValidations = yup.object().required().shape({
    firstName: yup.string().required(),
    lastName: yup.string().required(),
    phones: yup.array().min(1).of(phoneValidations),
    adresses: yup.array().min(1).of(addressValidations),
});
