-- CreateEnum
CREATE TYPE "ExpensesType" AS ENUM ('LODGMENT', 'STATIONERY', 'GASOLINE', 'MECHANIC', 'SALARY', 'FOOD');

-- CreateEnum
CREATE TYPE "LeadPaymentTypes" AS ENUM ('PENDING_MONEY', 'COMPENSATORY_PENDING_MONEY');

-- CreateEnum
CREATE TYPE "CommissionPaymentStatus" AS ENUM ('PAID_OUT', 'PENDING', 'REJECTED');

-- CreateEnum
CREATE TYPE "LoanState" AS ENUM ('REQUESTED', 'IN_REVIEW', 'APPROVED', 'REJECTED', 'PAID_OUT', 'POSTPONED');

-- CreateEnum
CREATE TYPE "PaymentState" AS ENUM ('PENDING', 'PAID_OUT', 'PARTIALLY_PAID');

-- CreateEnum
CREATE TYPE "EmployeesTypes" AS ENUM ('LIAISON_EXECUTIVE', 'LOAN_LEAD', 'INVESTMENT_DIRECTOR', 'CASH_MANAGER');

-- CreateEnum
CREATE TYPE "DocumentType" AS ENUM ('DNI', 'NSS', 'RFC', 'SHOP_PHOTO', 'BANC_ACCOUNT', 'ADDRESS_PROFF', 'CREDIT_BUREAU', 'DRIVER_LICENCE', 'JOB_APPLICATION', 'CONTRACT_EVIDENCE', 'LETTER_NO_CRIMINAL_RECORD');

-- CreateEnum
CREATE TYPE "PrintableFormat" AS ENUM ('CONTRACT', 'MONEY_REQUEST', 'COLLECTION_LIST', 'RESPONSIVE_LETTER', 'PROMISSORY_NOTES', 'DISPOSAL_ORDER');

-- CreateEnum
CREATE TYPE "CommissionGoalType" AS ENUM ('NEW_LOAN', 'PAYMENT_RECEIVED');

-- CreateEnum
CREATE TYPE "CommissionType" AS ENUM ('FIXED_AMOUNT', 'PERCENTAGE');

-- CreateEnum
CREATE TYPE "AccountType" AS ENUM ('BANK', 'OFFICE_CASH_FUND', 'EMPLOYEE_CASH_FUND');

-- CreateEnum
CREATE TYPE "TransactionType" AS ENUM ('INCOME', 'EXPENSE', 'TRANSFER', 'INVESTMENT');

-- CreateEnum
CREATE TYPE "TransactionIncomeSource" AS ENUM ('LOAN_PAYMENT', 'MONEY_INVESMENT');

-- CreateEnum
CREATE TYPE "TransactionExpenseSource" AS ENUM ('VIATIC', 'GASOLINE', 'ACCOMMODATION', 'NOMINA_SALARY', 'EXTERNAL_SALARY', 'VEHICULE_MAINTENANCE', 'LOAN_GRANTED', 'LOAN_PAYMENT_COMISSION', 'LOAN_GRANTED_COMISSION', 'LEAD_COMISSION');

-- CreateEnum
CREATE TYPE "TransactionRequestState" AS ENUM ('PENDING', 'APPROVED', 'REJECTED');

-- CreateTable
CREATE TABLE "Log" (
    "id" TEXT NOT NULL,
    "requestBody" TEXT NOT NULL,
    "requestType" TEXT NOT NULL,
    "deviceType" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "systemSectionId" TEXT NOT NULL,

    CONSTRAINT "Log_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "SystemSection" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "SystemSection_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "User" (
    "id" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "lastLogin" TIMESTAMP(3),
    "profilePicture" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "accountId" TEXT,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Employee" (
    "id" TEXT NOT NULL,
    "type" "EmployeesTypes" NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "userId" TEXT NOT NULL,
    "personalDataId" TEXT NOT NULL,
    "amountGivedIncreased" BOOLEAN NOT NULL DEFAULT false,

    CONSTRAINT "Employee_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Document" (
    "id" TEXT NOT NULL,
    "type" "DocumentType" NOT NULL,
    "borrowerId" TEXT,
    "contractId" TEXT,
    "employeeId" TEXT,
    "personalDataId" TEXT,
    "loanId" TEXT,

    CONSTRAINT "Document_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "PersonalData" (
    "id" TEXT NOT NULL,
    "fullName" TEXT NOT NULL,
    "firstName" TEXT NOT NULL,
    "lastName" TEXT NOT NULL,
    "birthDate" TIMESTAMP(3) NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "curp" TEXT,
    "loanId" TEXT,

    CONSTRAINT "PersonalData_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "State" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "State_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Municipality" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "stateId" TEXT NOT NULL,

    CONSTRAINT "Municipality_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Address" (
    "id" TEXT NOT NULL,
    "street" TEXT NOT NULL,
    "exteriorNumber" TEXT NOT NULL,
    "interiorNumber" TEXT,
    "postalCode" TEXT NOT NULL,
    "references" TEXT,
    "locationId" TEXT NOT NULL,
    "localId" TEXT,
    "personalDataId" TEXT,

    CONSTRAINT "Address_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Location" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "municipalityId" TEXT NOT NULL,
    "routeId" TEXT,

    CONSTRAINT "Location_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Borrower" (
    "id" TEXT NOT NULL,
    "email" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "loanFinishedCount" INTEGER NOT NULL DEFAULT 0,
    "personalDataId" TEXT NOT NULL,

    CONSTRAINT "Borrower_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Phone" (
    "id" TEXT NOT NULL,
    "number" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "personalDataId" TEXT,

    CONSTRAINT "Phone_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ContractType" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "monthDuration" INTEGER NOT NULL,
    "amount" MONEY NOT NULL,
    "maxRate" DECIMAL(65,30) NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3),

    CONSTRAINT "ContractType_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Loantype" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "weekDuration" INTEGER NOT NULL,
    "rate" DOUBLE PRECISION NOT NULL,
    "weeksToRenew" INTEGER NOT NULL,
    "overdueRate" DOUBLE PRECISION NOT NULL,
    "initialAmount" DOUBLE PRECISION NOT NULL DEFAULT 3000,
    "maximunAmount" DOUBLE PRECISION NOT NULL DEFAULT 5000,
    "amountToIncrease" DOUBLE PRECISION NOT NULL DEFAULT 500,
    "increaseEveryNLoans" INTEGER NOT NULL DEFAULT 2,
    "availableFor" "EmployeesTypes"[],
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Loantype_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Route" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "Route_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "FalcoCompensatoryPayment" (
    "id" TEXT NOT NULL,
    "amount" MONEY NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "leadPaymentReceivedId" TEXT,

    CONSTRAINT "FalcoCompensatoryPayment_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "LeadPaymentReceived" (
    "id" TEXT NOT NULL,
    "type" "LeadPaymentTypes" NOT NULL,
    "expectedAmount" MONEY NOT NULL,
    "paidAmount" MONEY NOT NULL,
    "falco" MONEY NOT NULL,
    "pendingFalcoAmount" MONEY NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "leadId" TEXT NOT NULL,
    "agentId" TEXT NOT NULL,

    CONSTRAINT "LeadPaymentReceived_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Contract" (
    "id" TEXT NOT NULL,
    "borrowerId" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "dueDate" TIMESTAMP(3) NOT NULL,
    "signDate" TIMESTAMP(3) NOT NULL,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "contractTypeId" TEXT NOT NULL,
    "loanLeadId" TEXT,
    "grantorId" TEXT NOT NULL,

    CONSTRAINT "Contract_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Loan" (
    "id" TEXT NOT NULL,
    "status" "LoanState" NOT NULL,
    "weeklyPaymentAmount" MONEY NOT NULL,
    "previousAmountGived" MONEY,
    "amountGived" MONEY NOT NULL DEFAULT 0,
    "amountToPay" MONEY NOT NULL DEFAULT 0,
    "paidAmount" MONEY NOT NULL DEFAULT 0,
    "pendingAmount" MONEY NOT NULL DEFAULT 0,
    "renovationProfitAmount" MONEY NOT NULL DEFAULT 0,
    "renovationPendingAmount" MONEY NOT NULL DEFAULT 0,
    "baseProfitAmount" MONEY NOT NULL DEFAULT 0,
    "totalProfitAmount" MONEY NOT NULL DEFAULT 0,
    "signDate" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "finishedDate" TIMESTAMP(3),
    "firstPaymentDate" TIMESTAMP(3) NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "contractId" TEXT NOT NULL,
    "loanTypeId" TEXT NOT NULL,
    "grantorId" TEXT NOT NULL,
    "renovatedFromId" TEXT,
    "transactionId" TEXT NOT NULL,

    CONSTRAINT "Loan_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "LoanPayment" (
    "id" TEXT NOT NULL,
    "amount" MONEY NOT NULL,
    "profitAmount" MONEY NOT NULL,
    "returnToCapital" MONEY NOT NULL,
    "percentage" DECIMAL(100,9) NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "loanId" TEXT NOT NULL,
    "collectorId" TEXT NOT NULL,
    "leadPaymentReceivedId" TEXT,
    "transactionId" TEXT NOT NULL,

    CONSTRAINT "LoanPayment_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Comment" (
    "id" TEXT NOT NULL,
    "text" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "createdById" TEXT NOT NULL,
    "employeeId" TEXT NOT NULL,
    "loanPaymentId" TEXT NOT NULL,

    CONSTRAINT "Comment_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ComissionPaymentConfiguration" (
    "id" TEXT NOT NULL,
    "employeeType" "EmployeesTypes" NOT NULL,
    "loanTypeId" TEXT NOT NULL,
    "commissionGoalType" "CommissionGoalType" NOT NULL,
    "commissionType" "CommissionType" NOT NULL,
    "amount" DECIMAL(65,30) NOT NULL,
    "employeeId" TEXT,

    CONSTRAINT "ComissionPaymentConfiguration_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "CommissionPayment" (
    "id" TEXT NOT NULL,
    "amount" MONEY NOT NULL,
    "loanId" TEXT,
    "paymentScheduleId" TEXT NOT NULL,
    "employeeId" TEXT NOT NULL,
    "status" "CommissionPaymentStatus" NOT NULL,

    CONSTRAINT "CommissionPayment_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Account" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "type" "AccountType" NOT NULL,
    "amount" MONEY NOT NULL,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Account_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Transaction" (
    "id" TEXT NOT NULL,
    "amount" MONEY NOT NULL,
    "date" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "type" "TransactionType" NOT NULL,
    "incomeSource" "TransactionIncomeSource",
    "expenseSource" "TransactionExpenseSource",
    "state" "TransactionRequestState" NOT NULL DEFAULT 'PENDING',
    "sourceAccountId" TEXT,
    "destinationAccountId" TEXT,
    "loanId" TEXT,
    "loanPaymentId" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Transaction_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "PaymentSchedule" (
    "id" TEXT NOT NULL,
    "numeration" INTEGER NOT NULL,
    "amountToPay" MONEY NOT NULL,
    "paidAmount" MONEY NOT NULL,
    "returnToCapital" MONEY NOT NULL DEFAULT 0,
    "profit" MONEY NOT NULL DEFAULT 0,
    "status" "PaymentState" NOT NULL,
    "delayed" BOOLEAN NOT NULL DEFAULT false,
    "dueDate" TIMESTAMP(3) NOT NULL,
    "details" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "loanId" TEXT NOT NULL,

    CONSTRAINT "PaymentSchedule_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Expenses" (
    "id" TEXT NOT NULL,
    "amountToPay" MONEY NOT NULL,
    "status" "PaymentState" NOT NULL,
    "dueDate" TIMESTAMP(3) NOT NULL,
    "payedAt" TIMESTAMP(3) NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "userId" TEXT,
    "employeeId" TEXT NOT NULL,

    CONSTRAINT "Expenses_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "_EmployeeToRoute" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "_LoantypeToRoute" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "_LoanPaymentToPaymentSchedule" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- CreateIndex
CREATE UNIQUE INDEX "Employee_userId_key" ON "Employee"("userId");

-- CreateIndex
CREATE UNIQUE INDEX "PersonalData_curp_key" ON "PersonalData"("curp");

-- CreateIndex
CREATE UNIQUE INDEX "Location_name_key" ON "Location"("name");

-- CreateIndex
CREATE UNIQUE INDEX "Borrower_email_key" ON "Borrower"("email");

-- CreateIndex
CREATE UNIQUE INDEX "Phone_number_key" ON "Phone"("number");

-- CreateIndex
CREATE UNIQUE INDEX "Loan_transactionId_key" ON "Loan"("transactionId");

-- CreateIndex
CREATE UNIQUE INDEX "LoanPayment_transactionId_key" ON "LoanPayment"("transactionId");

-- CreateIndex
CREATE INDEX "Transaction_sourceAccountId_idx" ON "Transaction"("sourceAccountId");

-- CreateIndex
CREATE UNIQUE INDEX "_EmployeeToRoute_AB_unique" ON "_EmployeeToRoute"("A", "B");

-- CreateIndex
CREATE INDEX "_EmployeeToRoute_B_index" ON "_EmployeeToRoute"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_LoantypeToRoute_AB_unique" ON "_LoantypeToRoute"("A", "B");

-- CreateIndex
CREATE INDEX "_LoantypeToRoute_B_index" ON "_LoantypeToRoute"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_LoanPaymentToPaymentSchedule_AB_unique" ON "_LoanPaymentToPaymentSchedule"("A", "B");

-- CreateIndex
CREATE INDEX "_LoanPaymentToPaymentSchedule_B_index" ON "_LoanPaymentToPaymentSchedule"("B");

-- AddForeignKey
ALTER TABLE "Log" ADD CONSTRAINT "Log_systemSectionId_fkey" FOREIGN KEY ("systemSectionId") REFERENCES "SystemSection"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "User" ADD CONSTRAINT "User_accountId_fkey" FOREIGN KEY ("accountId") REFERENCES "Account"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Employee" ADD CONSTRAINT "Employee_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Employee" ADD CONSTRAINT "Employee_personalDataId_fkey" FOREIGN KEY ("personalDataId") REFERENCES "PersonalData"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Document" ADD CONSTRAINT "Document_borrowerId_fkey" FOREIGN KEY ("borrowerId") REFERENCES "Borrower"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Document" ADD CONSTRAINT "Document_employeeId_fkey" FOREIGN KEY ("employeeId") REFERENCES "Employee"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Document" ADD CONSTRAINT "Document_contractId_fkey" FOREIGN KEY ("contractId") REFERENCES "Contract"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Document" ADD CONSTRAINT "Document_personalDataId_fkey" FOREIGN KEY ("personalDataId") REFERENCES "PersonalData"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Document" ADD CONSTRAINT "Document_loanId_fkey" FOREIGN KEY ("loanId") REFERENCES "Loan"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PersonalData" ADD CONSTRAINT "PersonalData_loanId_fkey" FOREIGN KEY ("loanId") REFERENCES "Loan"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Municipality" ADD CONSTRAINT "Municipality_stateId_fkey" FOREIGN KEY ("stateId") REFERENCES "State"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Address" ADD CONSTRAINT "Address_locationId_fkey" FOREIGN KEY ("locationId") REFERENCES "Location"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Address" ADD CONSTRAINT "Address_personalDataId_fkey" FOREIGN KEY ("personalDataId") REFERENCES "PersonalData"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Location" ADD CONSTRAINT "Location_municipalityId_fkey" FOREIGN KEY ("municipalityId") REFERENCES "Municipality"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Location" ADD CONSTRAINT "Location_routeId_fkey" FOREIGN KEY ("routeId") REFERENCES "Route"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Borrower" ADD CONSTRAINT "Borrower_personalDataId_fkey" FOREIGN KEY ("personalDataId") REFERENCES "PersonalData"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Phone" ADD CONSTRAINT "Phone_personalDataId_fkey" FOREIGN KEY ("personalDataId") REFERENCES "PersonalData"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "FalcoCompensatoryPayment" ADD CONSTRAINT "FalcoCompensatoryPayment_leadPaymentReceivedId_fkey" FOREIGN KEY ("leadPaymentReceivedId") REFERENCES "LeadPaymentReceived"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "LeadPaymentReceived" ADD CONSTRAINT "LeadPaymentReceived_agentId_fkey" FOREIGN KEY ("agentId") REFERENCES "Employee"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "LeadPaymentReceived" ADD CONSTRAINT "LeadPaymentReceived_leadId_fkey" FOREIGN KEY ("leadId") REFERENCES "Employee"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Contract" ADD CONSTRAINT "Contract_borrowerId_fkey" FOREIGN KEY ("borrowerId") REFERENCES "Borrower"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Contract" ADD CONSTRAINT "Contract_contractTypeId_fkey" FOREIGN KEY ("contractTypeId") REFERENCES "ContractType"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Contract" ADD CONSTRAINT "Contract_loanLeadId_fkey" FOREIGN KEY ("loanLeadId") REFERENCES "Employee"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Contract" ADD CONSTRAINT "Contract_grantorId_fkey" FOREIGN KEY ("grantorId") REFERENCES "Employee"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Loan" ADD CONSTRAINT "Loan_loanTypeId_fkey" FOREIGN KEY ("loanTypeId") REFERENCES "Loantype"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Loan" ADD CONSTRAINT "Loan_grantorId_fkey" FOREIGN KEY ("grantorId") REFERENCES "Employee"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Loan" ADD CONSTRAINT "Loan_contractId_fkey" FOREIGN KEY ("contractId") REFERENCES "Contract"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Loan" ADD CONSTRAINT "Loan_transactionId_fkey" FOREIGN KEY ("transactionId") REFERENCES "Transaction"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "LoanPayment" ADD CONSTRAINT "LoanPayment_loanId_fkey" FOREIGN KEY ("loanId") REFERENCES "Loan"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "LoanPayment" ADD CONSTRAINT "LoanPayment_collectorId_fkey" FOREIGN KEY ("collectorId") REFERENCES "Employee"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "LoanPayment" ADD CONSTRAINT "LoanPayment_leadPaymentReceivedId_fkey" FOREIGN KEY ("leadPaymentReceivedId") REFERENCES "LeadPaymentReceived"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "LoanPayment" ADD CONSTRAINT "LoanPayment_transactionId_fkey" FOREIGN KEY ("transactionId") REFERENCES "Transaction"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Comment" ADD CONSTRAINT "Comment_employeeId_fkey" FOREIGN KEY ("employeeId") REFERENCES "Employee"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Comment" ADD CONSTRAINT "Comment_loanPaymentId_fkey" FOREIGN KEY ("loanPaymentId") REFERENCES "LoanPayment"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ComissionPaymentConfiguration" ADD CONSTRAINT "ComissionPaymentConfiguration_loanTypeId_fkey" FOREIGN KEY ("loanTypeId") REFERENCES "Loantype"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ComissionPaymentConfiguration" ADD CONSTRAINT "ComissionPaymentConfiguration_employeeId_fkey" FOREIGN KEY ("employeeId") REFERENCES "Employee"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CommissionPayment" ADD CONSTRAINT "CommissionPayment_paymentScheduleId_fkey" FOREIGN KEY ("paymentScheduleId") REFERENCES "PaymentSchedule"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CommissionPayment" ADD CONSTRAINT "CommissionPayment_loanId_fkey" FOREIGN KEY ("loanId") REFERENCES "Loan"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CommissionPayment" ADD CONSTRAINT "CommissionPayment_employeeId_fkey" FOREIGN KEY ("employeeId") REFERENCES "Employee"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Transaction" ADD CONSTRAINT "Transaction_sourceAccountId_fkey" FOREIGN KEY ("sourceAccountId") REFERENCES "Account"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Transaction" ADD CONSTRAINT "Transaction_destinationAccountId_fkey" FOREIGN KEY ("destinationAccountId") REFERENCES "Account"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PaymentSchedule" ADD CONSTRAINT "PaymentSchedule_loanId_fkey" FOREIGN KEY ("loanId") REFERENCES "Loan"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Expenses" ADD CONSTRAINT "Expenses_employeeId_fkey" FOREIGN KEY ("employeeId") REFERENCES "Employee"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_EmployeeToRoute" ADD CONSTRAINT "_EmployeeToRoute_A_fkey" FOREIGN KEY ("A") REFERENCES "Employee"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_EmployeeToRoute" ADD CONSTRAINT "_EmployeeToRoute_B_fkey" FOREIGN KEY ("B") REFERENCES "Route"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_LoantypeToRoute" ADD CONSTRAINT "_LoantypeToRoute_A_fkey" FOREIGN KEY ("A") REFERENCES "Loantype"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_LoantypeToRoute" ADD CONSTRAINT "_LoantypeToRoute_B_fkey" FOREIGN KEY ("B") REFERENCES "Route"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_LoanPaymentToPaymentSchedule" ADD CONSTRAINT "_LoanPaymentToPaymentSchedule_A_fkey" FOREIGN KEY ("A") REFERENCES "LoanPayment"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_LoanPaymentToPaymentSchedule" ADD CONSTRAINT "_LoanPaymentToPaymentSchedule_B_fkey" FOREIGN KEY ("B") REFERENCES "PaymentSchedule"("id") ON DELETE CASCADE ON UPDATE CASCADE;
