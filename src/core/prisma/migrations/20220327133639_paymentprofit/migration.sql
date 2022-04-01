-- AlterTable
ALTER TABLE "PaymentSchedule" ADD COLUMN     "profit" MONEY NOT NULL DEFAULT 0,
ADD COLUMN     "returnToCapital" MONEY NOT NULL DEFAULT 0;
