/*
  Warnings:

  - You are about to drop the column `userId` on the `wallet` table. All the data in the column will be lost.
  - Added the required column `userDetailsId` to the `Wallet` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE `wallet` DROP FOREIGN KEY `Wallet_userId_fkey`;

-- AlterTable
ALTER TABLE `wallet` DROP COLUMN `userId`,
    ADD COLUMN `userDetailsId` INTEGER NOT NULL;

-- AddForeignKey
ALTER TABLE `Wallet` ADD CONSTRAINT `Wallet_userDetailsId_fkey` FOREIGN KEY (`userDetailsId`) REFERENCES `UserDetails`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
