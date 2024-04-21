import { Args, Parent, Query, ResolveField, Resolver } from '@nestjs/graphql';
import { PersonalData } from '../personal-data/types';
import { Employee } from '../employee/types';
import { PrismaService } from '../../core/prisma/prisma.service';
import { Borrower, BorrowerWhereInput, BorrowerWhereUniqueInput } from './types';
import { Loan } from '../loan/types';

@Resolver(Borrower)
export class BorrowerResolver {

    constructor(
        private readonly _db: PrismaService,  
    ){}



    @Query(() => Borrower)
    async getBorrower(@Args('where') where: BorrowerWhereUniqueInput): Promise<Borrower> {
        return this._db.borrower.findUnique({where});
    }

    @Query(() => [Borrower])
    async getBorrowers(
        @Args('where', {nullable:true}) where: BorrowerWhereInput
    ): Promise<Borrower[]> {

        //find all the borrowers that have an address in the location with the given id or that has the leadId
        if(where?.locationId){
            const borrowers = await this._db.borrower.findMany({
                where:{
                    personalData:{
                        addresses:{
                            some:{
                                locationId:where.locationId
                            }
                        }
                    }
                }
            });
            console.log(borrowers)
            return borrowers;
        }
        /* //seartch by the leadId
        if(where?.leadId){
            const borrowers = await this._db.borrower.findMany({
                where:{
                    contract:{
                        some:{
                            loanLeadId:where.leadId
                        }
                    }
                }
            });
            return borrowers;
        } */
    }

    @ResolveField(() => Loan)
    async activeLoan(@Parent() root: Borrower) {
        const { id } = root;
        return this._db.loan.findFirst({
            where: {
                contract: {
                    borrowerId: id,
                },
            },
            orderBy: {
                createdAt: 'desc',
            },
        });
    }
    
    @ResolveField(() => PersonalData)
    async personalData(@Parent() root: Borrower): Promise<PersonalData> {
        const { personalDataId:id } = root;
        return this._db.personalData.findUnique({ where: { id } });
    }
}
