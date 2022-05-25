"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const client_1 = require("@prisma/client");
const bcryptjs_1 = require("bcryptjs");
const prisma = new client_1.PrismaClient();
async function main() {
    const userId1 = "546321879";
    const salt = await (0, bcryptjs_1.genSalt)(10);
    const password = await (0, bcryptjs_1.hash)("test1234", salt);
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
            phones: { create: { number: "54545454" } }
        }
    });
    await prisma.contractType.createMany({
        data: [
            {
                name: "Tiendas, anual, 20%",
                maxRate: .30,
                monthDuration: 12,
                amount: 50000,
            },
            {
                name: "Tiendas, anual, 30%",
                maxRate: .30,
                monthDuration: 12,
                amount: 50000,
            }
        ],
    });
    await prisma.loantype.createMany({
        data: [
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
    });
}
main()
    .catch((e) => {
    console.error(e);
    process.exit(1);
})
    .finally(async () => {
    await prisma.$disconnect();
});
//# sourceMappingURL=seed.js.map