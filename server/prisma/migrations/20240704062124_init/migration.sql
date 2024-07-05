/*
  Warnings:

  - You are about to alter the column `dateOfBirth` on the `minorpan` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `DateTime(3)`.
  - You are about to alter the column `dob` on the `pancustomer` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `DateTime(3)`.

*/
-- AlterTable
ALTER TABLE `minorpan` MODIFY `dateOfBirth` DATETIME(3) NOT NULL;

-- AlterTable
ALTER TABLE `pancustomer` MODIFY `dob` DATETIME(3) NOT NULL;
