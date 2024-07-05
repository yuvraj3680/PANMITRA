/*
  Warnings:

  - You are about to drop the column `permissions` on the `admin` table. All the data in the column will be lost.
  - You are about to drop the column `adminId` on the `userdetails` table. All the data in the column will be lost.
  - Added the required column `password` to the `Admin` table without a default value. This is not possible if the table is not empty.
  - Added the required column `username` to the `Admin` table without a default value. This is not possible if the table is not empty.
  - Added the required column `aadhar` to the `UserDetails` table without a default value. This is not possible if the table is not empty.
  - Added the required column `address` to the `UserDetails` table without a default value. This is not possible if the table is not empty.
  - Added the required column `amountType` to the `UserDetails` table without a default value. This is not possible if the table is not empty.
  - Added the required column `charges` to the `UserDetails` table without a default value. This is not possible if the table is not empty.
  - Added the required column `companyName` to the `UserDetails` table without a default value. This is not possible if the table is not empty.
  - Added the required column `pan` to the `UserDetails` table without a default value. This is not possible if the table is not empty.
  - Added the required column `pinCode` to the `UserDetails` table without a default value. This is not possible if the table is not empty.
  - Added the required column `state` to the `UserDetails` table without a default value. This is not possible if the table is not empty.
  - Added the required column `userId` to the `UserDetails` table without a default value. This is not possible if the table is not empty.
  - Made the column `email` on table `userdetails` required. This step will fail if there are existing NULL values in that column.

*/
-- DropIndex
DROP INDEX `UserDetails_adminId_key` ON `userdetails`;

-- AlterTable
ALTER TABLE `admin` DROP COLUMN `permissions`,
    ADD COLUMN `password` VARCHAR(191) NOT NULL,
    ADD COLUMN `username` VARCHAR(191) NOT NULL;

-- AlterTable
ALTER TABLE `userdetails` DROP COLUMN `adminId`,
    ADD COLUMN `aadhar` VARCHAR(191) NOT NULL,
    ADD COLUMN `address` VARCHAR(191) NOT NULL,
    ADD COLUMN `amountType` VARCHAR(191) NOT NULL,
    ADD COLUMN `charges` VARCHAR(191) NOT NULL,
    ADD COLUMN `companyName` VARCHAR(191) NOT NULL,
    ADD COLUMN `pan` VARCHAR(191) NOT NULL,
    ADD COLUMN `pinCode` VARCHAR(191) NOT NULL,
    ADD COLUMN `state` VARCHAR(191) NOT NULL,
    ADD COLUMN `userId` VARCHAR(191) NOT NULL,
    MODIFY `email` VARCHAR(191) NOT NULL;
