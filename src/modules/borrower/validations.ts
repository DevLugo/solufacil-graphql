import * as yup from 'yup';
import { personalDataValidations } from '../personal-data/validations';

export const borrowerValidations = yup.object().required().shape({
    email: yup.string().email().required(),
    grantorId: yup.string(),
    //personalData: personalDataValidations
});

