-- CreateEnum
CREATE TYPE "LoanState" AS ENUM ('REQUESTED', 'IN_REVIEW', 'APPROVED', 'REJECTED', 'PAID_OUT');

-- CreateEnum
CREATE TYPE "PaymentState" AS ENUM ('PENDING', 'DELAYED', 'PAID_OUT');

-- CreateEnum
CREATE TYPE "EmployeesTypes" AS ENUM ('COMMERCIAL_HOLDER', 'COMMERCIAL_SUPPORT', 'ADMINISTRATION_HEAD', 'COMMERCIAL_ASSISTENT', 'ADMINISTRATION_SUPPORT');

-- CreateEnum
CREATE TYPE "DocumentType" AS ENUM ('DNI', 'NSS', 'RFC', 'SHOP_PHOTO', 'BANC_ACCOUNT', 'ADDRESS_PROFF', 'CREDIT_BUREAU', 'DRIVER_LICENCE', 'JOB_APPLICATION', 'CONTRACT_EVIDENCE', 'LETTER_NO_CRIMINAL_RECORD');

-- CreateEnum
CREATE TYPE "PrintableFormat" AS ENUM ('CONTRACT', 'MONEY_REQUEST', 'COLLECTION_LIST', 'RESPONSIVE_LETTER', 'PROMISSORY_NOTES', 'DISPOSAL_ORDER');

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
    "fullName" TEXT NOT NULL,
    "firstName" TEXT NOT NULL,
    "lastName" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "lastLogin" TIMESTAMP(3),
    "profilePicture" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Employee" (
    "id" TEXT NOT NULL,
    "type" "EmployeesTypes" NOT NULL,
    "email" TEXT NOT NULL,
    "fullName" TEXT NOT NULL,
    "firstName" TEXT NOT NULL,
    "lastName" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Employee_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Document" (
    "id" TEXT NOT NULL,
    "type" "DocumentType" NOT NULL,
    "borrowerId" TEXT,
    "avalId" TEXT,
    "contractId" TEXT,
    "employeeId" TEXT,

    CONSTRAINT "Document_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Customer" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "logo" TEXT NOT NULL,
    "url" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Customer_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Loantype" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "weekDuration" INTEGER NOT NULL,
    "MaxAmount" DOUBLE PRECISION NOT NULL,
    "rate" DOUBLE PRECISION NOT NULL,
    "overdueRate" DOUBLE PRECISION NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Loantype_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Aval" (
    "id" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "fullName" TEXT NOT NULL,
    "firstName" TEXT NOT NULL,
    "lastName" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Aval_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Borrower" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "address" TEXT NOT NULL,
    "email" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Borrower_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Phone" (
    "id" TEXT NOT NULL,
    "number" TEXT NOT NULL,
    "borrowerId" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "avalId" TEXT,
    "employeeId" TEXT,

    CONSTRAINT "Phone_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ContractType" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "weekDuration" INTEGER NOT NULL,
    "amount" DOUBLE PRECISION NOT NULL,
    "rate" DOUBLE PRECISION NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "ContractType_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Contract" (
    "id" TEXT NOT NULL,
    "amount" MONEY NOT NULL,
    "borrowerId" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "employeeId" TEXT,

    CONSTRAINT "Contract_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Loan" (
    "id" TEXT NOT NULL,
    "status" "LoanState" NOT NULL,
    "amount" MONEY NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "contractId" TEXT,

    CONSTRAINT "Loan_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "LoanPayment" (
    "id" TEXT NOT NULL,
    "numeration" INTEGER NOT NULL,
    "amount" MONEY NOT NULL,
    "status" "PaymentState" NOT NULL,
    "paidDate" TIMESTAMP(3) NOT NULL,
    "dueDate" TIMESTAMP(3) NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "loanId" TEXT,

    CONSTRAINT "LoanPayment_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- CreateIndex
CREATE UNIQUE INDEX "Employee_email_key" ON "Employee"("email");

-- CreateIndex
CREATE UNIQUE INDEX "Aval_email_key" ON "Aval"("email");

-- AddForeignKey
ALTER TABLE "Log" ADD CONSTRAINT "Log_systemSectionId_fkey" FOREIGN KEY ("systemSectionId") REFERENCES "SystemSection"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Document" ADD CONSTRAINT "Document_borrowerId_fkey" FOREIGN KEY ("borrowerId") REFERENCES "Borrower"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Document" ADD CONSTRAINT "Document_employeeId_fkey" FOREIGN KEY ("employeeId") REFERENCES "Employee"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Document" ADD CONSTRAINT "Document_avalId_fkey" FOREIGN KEY ("avalId") REFERENCES "Aval"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Document" ADD CONSTRAINT "Document_contractId_fkey" FOREIGN KEY ("contractId") REFERENCES "Contract"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Phone" ADD CONSTRAINT "Phone_borrowerId_fkey" FOREIGN KEY ("borrowerId") REFERENCES "Borrower"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Phone" ADD CONSTRAINT "Phone_employeeId_fkey" FOREIGN KEY ("employeeId") REFERENCES "Employee"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Phone" ADD CONSTRAINT "Phone_avalId_fkey" FOREIGN KEY ("avalId") REFERENCES "Aval"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Contract" ADD CONSTRAINT "Contract_borrowerId_fkey" FOREIGN KEY ("borrowerId") REFERENCES "Borrower"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Contract" ADD CONSTRAINT "Contract_employeeId_fkey" FOREIGN KEY ("employeeId") REFERENCES "Employee"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Loan" ADD CONSTRAINT "Loan_contractId_fkey" FOREIGN KEY ("contractId") REFERENCES "Contract"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "LoanPayment" ADD CONSTRAINT "LoanPayment_loanId_fkey" FOREIGN KEY ("loanId") REFERENCES "Loan"("id") ON DELETE SET NULL ON UPDATE CASCADE;
