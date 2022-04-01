-- CreateTable
CREATE TABLE "Expenses" (
    "id" TEXT NOT NULL,
    "amountToPay" MONEY NOT NULL,
    "status" "PaymentState" NOT NULL,
    "dueDate" TIMESTAMP(3) NOT NULL,
    "payedAt" TIMESTAMP(3) NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Expenses_pkey" PRIMARY KEY ("id")
);
