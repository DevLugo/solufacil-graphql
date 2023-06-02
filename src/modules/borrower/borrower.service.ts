import { BorrowerWhereInput } from '../../@generated/borrower/borrower-where.input';
import { BorrowerCreateInput } from '../../@generated/borrower/borrower-create.input';
import { PrismaService } from '../../core/prisma/prisma.service';
import { Injectable } from '@nestjs/common';
import { BorrowerWhereUniqueInput } from 'src/@generated/borrower/borrower-where-unique.input';

@Injectable()
export class BorrowerService {
    constructor(private readonly db: PrismaService) {}

    async create(data: BorrowerCreateInput) {
        // Validate unique email
        if (!!data.email){
            const dbEmail = await this.db.borrower.findUnique({
                where: {email: data.email},
            });
            if (!!dbEmail)
                throw new Error(`El email ${dbEmail.email} ya existe`);
        }
        //Validate  Unique Phone number
        for(const phone of data.personalData.create.phones.create){
            const dbPhone = await this.db.phone.findUnique({
                where: {number: phone.number}
            });
            if (!!dbPhone)
                throw new Error(`El télefono ${dbPhone.number} ya existe`);
        }
        
        // @ts-ignore
        return await this.db.borrower.create({data:{
        // @ts-ignore
            personalData: {
                ...data.personalData
            }
        }});
    }
      
    async getMany(data:BorrowerWhereInput) {
        return await this.db.borrower.findMany(
            {where:data, 
                include:{
                    personalData:{
                        include:{
                            /* aval:{
                                include:{
                                    personalData:{
                                        include:{
                                            phones:true,
                                            addresses:{
                                                include:{
                                                    location:{
                                                        include:{
                                                            address:true
                                                        }
                                                    }
                                                }
                                            }
                                        }
                                    }
                                }
                            }, */
                            phones:true,
                            addresses:{
                                include:{
                                    location:{
                                        include:{
                                            address:true
                                        }
                                    }
                                }
                            }
                        }
                    },

                }
            });
    }

    async findOne(where:BorrowerWhereUniqueInput) {
       /*  console.log("ELE", where)
        const a = await this.db.borrower.findUnique({
            where
           
        });
        console.log("-------", a)
 */
        return await this.db.borrower.findUnique({
            where:{
                email:where.email,
                id:where.id,
            },
            include:{
                personalData:{
                    include:{
                        addresses:{
                            include:{
                                location:true
                            }
                        }
                    }
                },

            }
        });
    }

    async activeLoan(borrowerId:string) {
        return await this.db.loan.findFirst({
            where:{
                status:"APPROVED",
                contract:{
                    borrowerId
                }
            },
            include:{
                employee:{
                    include:{
                        user:true
                    }
                }
            }
        });
    }

    async calculateMaximumAmountToGive(
        increasedPerLoan: number, 
        initialMaxamount: number,
        increaseEveryNLoans: number,
        loansFinishedCount: number, 
        ){
             //TODO: 
            //Store a maximum amount gived in to de db.  
            // Todo:  Obtain the last 2 loans
            // check if the last two loan are equals of the maximum amount.
            // if are equals, then increase by {increasedPerLoan}
        /* const maxAmount = initialMaxamount;
        
        if(increaseEveryNLoans / loansFinishedCount){

        }
        while (){
            if()
        } */

    }

}
