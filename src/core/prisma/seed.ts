import { PrismaClient } from '@prisma/client';
import { genSalt, hash, compare } from 'bcryptjs';

const prisma = new PrismaClient();

async function main() {
    const userId1 = "546321879"
    const salt = await genSalt(10);
    const password = await hash("test1234", salt);
    await prisma.user.createMany({
        data: [
            {
                id: userId1,
                firstName: "Josue",
                lastName: "Gabriel",
                fullName: "Josue Gabriel",
                email: "josue",
                password: password,
            }
        ],
    });

    await prisma.employee.createMany({
        data: [
            {
                id: userId1,
                type: 'EJECUTIVO_DE_ENLACE',
                userId: userId1,
            }
        ],
    });
    await prisma.borrower.create({
        data: {
            id: "123",
            name: "cliente 1",
            address: "ELEFANTE",
            email: "qwea@fmol.com",
            phones: {create: {number: "54545454"}}
        }
    });
    await prisma.contractType.createMany({
        data: [
            {
                name: "Tiendas, anual, 20%",
                amount: 50000,
                monthDuration: 12,
            },
            {
                name: "Tiendas, anual, 30%",
                amount: 50000,
                monthDuration: 12,
            }
        ],
    });

     await prisma.loantype.createMany({
        data:[
            {
                name: "12 semanas",
                rate: 0.20,
                weekDuration: 12,
                overdueRate: 0.6
            },
            {
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