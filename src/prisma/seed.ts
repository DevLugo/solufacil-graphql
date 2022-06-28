import { PrismaClient } from '@prisma/client';
import { genSalt, hash, compare } from 'bcryptjs';

const prisma = new PrismaClient();

async function main() {
    const userId1 = "1";
    const userId2 = "2";

    const salt = await genSalt(10);
    const password = await hash("test1234", salt);
    await prisma.employee.create({
        data:{
                id: userId1,
                type: 'LIAISON_EXECUTIVE',
                user:{
                    create: {
                        id: userId1,
                        email: "josue",
                        password: password,
                    }
                },
                personalData:{
                    create:{
                        firstName: "Josue",
                        lastName: "Santos",
                        fullName: "Josue Santos"
                    }
                }
            },
    });
    await prisma.employee.create({
        data:{
                id: userId2,
                type: 'LOAN_LEAD',
                user:{
                    create: {
                        id: userId2,
                        email: "lider",
                        password: password,
                    }
                },
                personalData:{
                    create:{
                        firstName: "Loan Lead",
                        lastName: "Loan",
                        fullName: "Lead"
                    }
                }
            },
    });
    
    await prisma.borrower.create({
        data: {
            id: "1",
            email: "borrower@email.com",
            personalData:{
                create:{
                    firstName: "borrower Name",
                    lastName: "borrower lastName",
                    fullName :"fullName" 
                }
            }
        }
    });
    await prisma.contractType.createMany({
        data: [
            {
                id: "14",
                name: "Tradicional",
                maxRate:.40,
                monthDuration: 14,
                amount:50000,
            },
            {
                id: "12",
                name: "Tiendas, anual, 20%",
                maxRate:.30,
                monthDuration: 12,
                amount:50000,
            },
            {
                id: "20",
                name: "Tiendas, anual, 30%",
                maxRate:.30,
                monthDuration: 12,
                amount:50000,
            }
        ],
    });

     await prisma.loantype.createMany({
        data:[
            {
                id: "14",
                name: "Tradicional",
                rate: 0.40,
                weekDuration: 14,
                overdueRate: 0.6
            },
            {
                id: "12",
                name: "12 semanas",
                rate: 0.20,
                weekDuration: 12,
                overdueRate: 0.6
            },
            {
                id: "20",
                name: "20 semanas",
                rate: 0.30,
                weekDuration: 20,
                overdueRate: 0.6
            }
        ]
    })

}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });