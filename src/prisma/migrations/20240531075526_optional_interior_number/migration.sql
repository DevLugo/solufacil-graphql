/*
  Warnings:

  - Made the column `exteriorNumber` on table `Address` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "Address" ALTER COLUMN "exteriorNumber" SET NOT NULL,
ALTER COLUMN "interiorNumber" DROP NOT NULL;
