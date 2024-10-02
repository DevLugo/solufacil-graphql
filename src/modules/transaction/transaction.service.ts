import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../core/prisma/prisma.service';

@Injectable()
export class TransactionService {
    constructor(private readonly db: PrismaService) {}

    // Helper function to check if an ID is an account or an employee
    async checkAccountOrEmployee(id: string): Promise<'account' | 'employee'> {
        const account = await this.db.account.findUnique({
            where: { id },
        });
        if (account) return 'account';

        const employee = await this.db.employee.findUnique({
            where: { id },
        });
        if (employee) return 'employee';

        throw new Error(`The entity with ID ${id} does not exist`);
    }
}
