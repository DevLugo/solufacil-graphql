/*
  Warnings:

  - You are about to drop the column `amount` on the `Contract` table. All the data in the column will be lost.
  - Added the required column `contractTypeId` to the `Contract` table without a default value. This is not possible if the table is not empty.
  - Added the required column `maxRate` to the `ContractType` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Contract" DROP COLUMN "amount",
ADD COLUMN     "contractTypeId" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "ContractType" ADD COLUMN     "maxRate" DECIMAL(65,30) NOT NULL;

-- AddForeignKey
ALTER TABLE "Contract" ADD CONSTRAINT "Contract_contractTypeId_fkey" FOREIGN KEY ("contractTypeId") REFERENCES "ContractType"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
