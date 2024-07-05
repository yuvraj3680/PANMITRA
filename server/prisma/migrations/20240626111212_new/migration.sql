/*
  Warnings:

  - You are about to drop the column `userId` on the `userdetails` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE `wallet` DROP FOREIGN KEY `Wallet_userId_fkey`;

-- AlterTable
ALTER TABLE `userdetails` DROP COLUMN `userId`;

-- AddForeignKey
ALTER TABLE `Wallet` ADD CONSTRAINT `Wallet_id_fkey` FOREIGN KEY (`id`) REFERENCES `UserDetails`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
