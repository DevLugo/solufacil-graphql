import * as yup from 'yup';
import {borrowerValidations} from '../borrower/validations';
import {personalDataValidations} from '../personal-data/validations';
import { CreateAvalInput } from './types';

export const LoanCreateInputValidations = yup.array().of( 
    yup.object().shape({
        firstPaymentDate: yup.date().required(),
        loanLeadId: yup.string().required(), 
        isRenovation: yup.boolean().required(),
        amountGived: yup.number().required(),
        loanTypeId: yup.string().required(),
        granterId: yup.string(),
        signDate: yup.date().required(),
        borrowerId: yup.string().when('isRenovation', {
            is: true,
            then: (schema) => schema.required(),
        }),
        borrower:  yup.object().when('isRenovation', {
            is: false,
            then: () => borrowerValidations
        }),
        avals:  yup.array().min(1).of(
            yup.object().shape({
                //TODO: Validate that at least one of this two exists
                avalId: yup.string(),
                newAval: yup.object().shape({
                    personalDataValidations
                })
            })
        ),

}));
