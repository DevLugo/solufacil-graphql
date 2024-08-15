import { PrismaClient } from '@prisma/client';
import { genSalt, hash, compare } from 'bcryptjs';

const prisma = new PrismaClient();

async function main() {
    const userId1 = "1";
    const userId2 = "2";
    console.log('Seeding database...');
    const salt = await genSalt(10);
    const password = await hash("test12345", salt);
    await prisma.state.createMany({
        data:[
            {
                name: "Campeche",
                id: "001"
            },
            {
                name: "QuintanaRoo",
                id: "002"
            }
        ]
    });
    await prisma.municipality.createMany({
        data:[
            //Campeche
            {
                id: "001",
                name: "Calkiní",
                stateId: "001",
                
            },
            {
                id: "002",
                name: "Campeche",
                stateId: "001"
            },
            {
                id: "003",
                name: "Carmen",
                stateId: "001"
            },
            {
                id: "004",
                name: "Champotón",
                stateId: "001"
            },
            {
                id: "005",
                name: "Hecelchakán",
                stateId: "001"
            },
            {
                id: "006",
                name: "Hopelchén",
                stateId: "001"
            },
            {
                id: "007",
                name: "Palizada",
                stateId: "001"
            },
            {
                id: "008",
                name: "Tenabo",
                stateId: "001"
            },
            {
                id: "009",
                name: "Escárcega",
                stateId: "001"
            },
            {
                id: "010",
                name: "Calakmul",
                stateId: "001"
            },
            {
                id: "011",
                name: "Candelaria",
                stateId: "001"
            },
            {
                id: "012",
                name: "Seybaplaya",
                stateId: "001"
            },
            //QuintanaRoo
            {
                id: "Q001",
                name: "Cozumel",
                stateId: "002"
            },
            {
                id: "Q002",
                name: "Felipe Carrillo Puerto	",
                stateId: "002"
            },
            {
                id: "Q003",
                name: "Isla Mujeres	",
                stateId: "002"
            },
            {
                id: "Q004",
                name: "Othón P. Blanco	",
                stateId: "002"
            },
            {
                id: "Q005",
                name: "Benito Juárez",
                stateId: "002"
            },
            {
                id: "Q006",
                name: "José María Morelos	",
                stateId: "002"
            },
            {
                id: "Q007",
                name: "Lázaro Cárdenas",
                stateId: "002"
            },
            {
                id: "Q008",
                name: "Solidaridad",
                stateId: "002"
            },
            {
                id: "Q009",
                name: "Tulum",
                stateId: "002"
            },
            {
                id: "Q010",
                name: "Bacalar",
                stateId: "002"
            },
            {
                id: "Q011",
                name: "Puerto Morelos",
                stateId: "002"
            },
        ]
    });

    await prisma.location.createMany({
            data: [
                { 
                    name: "XPUJIL",
                    municipalityId:"001"      
                },
                { 
                    name: "CHUNCHINTOK",
                    municipalityId:"006"      
                },
                { 
                    name: "GONZALEZ ORTEGA",
                    municipalityId:"Q004"      
                },
                { 
                    name: "NICOLAS BRAVO",
                    municipalityId:"Q004"      
                },
                { 
                    name: "XPUJIL-2",
                    municipalityId:"001"      
                },
                { 
                    name: "HERIBERTO JARA CORONA",
                    municipalityId:"010"      
                },
                { 
                    name: "KM 36",
                    municipalityId:"009"      
                },
                { 
                    name: "JOSE MARIA MORELOS Y PAVON",
                    municipalityId:"004"      
                },
                { 
                    name: "ALVARO OBREGON",
                    municipalityId:"Q004"      
                },
                { 
                    name: "FRANCISCO VILLA",
                    municipalityId:"Q004"      
                },
                { 
                    name: "EL PALMAR",
                    municipalityId:"Q004"      
                },
                { 
                    name: "XULHA",
                    municipalityId:"Q010"      
                },
                { 
                    name: "XBACAB",
                    municipalityId:"004"      
                },
                { 
                    name: "ALLENDE",
                    municipalityId:"Q004"      
                },
                { 
                    name: "DIAZ ORDAZ",
                    municipalityId:"Q004" 
                },
                { 
                    name: "CONSTITUCION",
                    municipalityId:"010"      
                },
                { 
                    name: "MIGUEL ALEMAN",
                    municipalityId:"Q010"      
                },
                { 
                    name: "RIO VERDE",
                    municipalityId:"Q010"      
                },
                { 
                    name: "MOROCOY",
                    municipalityId:"Q004"      
                },
                { 
                    name: "ALTOS DE SEVILLA",
                    municipalityId:"Q010"      
                },
                { 
                    name: "CARLOS A MADRAZO",
                    municipalityId:"Q004"      
                },
                { 
                    name: "BACALAR",
                    municipalityId:"Q010"      
                },
            ]
    })
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
                        fullName: "Josue Santos",
                        birthDate: new Date(),
                        curp: "SACJ000000HDFNTA1",
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
                        firstName: "Minerva ",
                        lastName: "CORTES GARCIA",
                        fullName: "Minerva CORTES GARCIA",
                        curp: "SACJ000000HDFNTA3",
                        phones:{
                            create:{
                                number: "9999999999",
                            }
                        },
                        addresses:{
                            create:{
                                street: "koben",
                                interiorNumber: "41",
                                postalCode: "24060",
                                exteriorNumber: "41",
                                location:{
                                    connect:{
                                        name: "ALVARO OBREGON"
                                    }
                                }

                            }
                        },
                        birthDate: new Date(),
                    }
                },
            },
    });
    const borrower = await prisma.borrower.create({
        data: {
            
            id: "1",
            email: "borrower@email.com",
            personalData:{
                create:{
                    firstName: "borrower Name",
                    lastName: "borrower lastName",
                    fullName :"fullName",
                    birthDate: new Date(), 
                    curp: "SACJ000000HDFNTA2",
                }
            },
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
                overdueRate: 0.6,
                weeksToRenew:10,
            },
            {
                id: "12",
                name: "12 semanas",
                rate: 0.20,
                weekDuration: 12,
                overdueRate: 0.6,
                weeksToRenew:10,
            },
            {
                id: "10",
                name: "Lideres 10 semanas",
                rate: 0,
                weekDuration: 10,
                overdueRate: 0.6,
                weeksToRenew:8,
            }
        ]
    });
    const contract = await prisma.contract.create({
        data:{
            id: "1",
            dueDate:new Date("2023-09-17"),
            signDate: new Date(),
            borrower: {
                connect:{id:borrower.id}
            },
            contractType:{
                connect:{
                    id: "14"
                }
            },
            grantor: {
                connect:{
                    id:userId1
                }
            },
            loanLead:{
                connect:{
                    userId:userId2
                }
            }
        }
    });
    const currentDate = new Date();
    const futureDate = new Date(currentDate.getTime() + (14 * 7 * 24 * 60 * 60 * 1000));
    /* const loan = await prisma.loan.create({
        data:{
            id: "1",
            amountGived: 3000,
            amountToPay: 4200,
            pendingAmount: 4200,
            baseProfitAmount: 1200,
            totalProfitAmount: 1200,
            firstPaymentDate: futureDate,
            contract:{
                connect:{
                    id: contract.id
                }
            },
            status: "APPROVED",
            weeklyPaymentAmount: 300,
            grantor:{
                connect:{
                    id: userId1
                }
            },
            loanType: {
                connect:{
                    id: "14"
                }  
            }
        }
    }); */

    await prisma.route.create({
        data:{
            id: "1",
            name: "Solucam 1",
            loantypes: {connect:[{id:"10"}, {id:"14"}]},
            localities: {
                connect:[
                    { 
                        name: "XPUJIL",
                    },
                    { 
                        name: "CHUNCHINTOK",
                    },
                    { 
                        name: "GONZALEZ ORTEGA",
                    },
                    { 
                        name: "NICOLAS BRAVO",
                    },
                    { 
                        name: "XPUJIL-2",
                    },
                    { 
                        name: "HERIBERTO JARA CORONA",
                    },
                    { 
                        name: "KM 36",
                    },
                    { 
                        name: "JOSE MARIA MORELOS Y PAVON",
                    },
                    { 
                        name: "ALVARO OBREGON",
                    },
                    { 
                        name: "FRANCISCO VILLA",
                    },
                    { 
                        name: "EL PALMAR",
                    },
                    { 
                        name: "XULHA",
                    },
                    { 
                        name: "XBACAB",
                    },
                    { 
                        name: "ALLENDE",
                    },
                    { 
                        name: "DIAZ ORDAZ",
                    },
                    { 
                        name: "CONSTITUCION",
                    },
                    { 
                        name: "MIGUEL ALEMAN",
                    },
                    { 
                        name: "RIO VERDE",
                    },
                    { 
                        name: "MOROCOY",
                    },
                    { 
                        name: "ALTOS DE SEVILLA",
                    },
                    { 
                        name: "CARLOS A MADRAZO",
                    },
                    { 
                        name: "BACALAR",
                    },
                ]
            }
        }
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