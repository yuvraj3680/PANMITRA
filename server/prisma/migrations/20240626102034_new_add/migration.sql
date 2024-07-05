/*
  Warnings:

  - You are about to drop the column `createdAt` on the `charge` table. All the data in the column will be lost.
  - You are about to drop the column `walletId` on the `charge` table. All the data in the column will be lost.
  - You are about to drop the `transactions` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `wallets` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE `charge` DROP FOREIGN KEY `Charge_transactionId_fkey`;

-- DropForeignKey
ALTER TABLE `charge` DROP FOREIGN KEY `Charge_walletId_fkey`;

-- DropForeignKey
ALTER TABLE `transactions` DROP FOREIGN KEY `transactions_walletId_fkey`;

-- DropForeignKey
ALTER TABLE `wallets` DROP FOREIGN KEY `wallets_userId_fkey`;

-- AlterTable
ALTER TABLE `charge` DROP COLUMN `createdAt`,
    DROP COLUMN `walletId`;

-- DropTable
DROP TABLE `transactions`;

-- DropTable
DROP TABLE `wallets`;

-- CreateTable
CREATE TABLE `Wallet` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `balance` DOUBLE NOT NULL DEFAULT 0,
    `userId` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Transaction` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `amount` DOUBLE NOT NULL,
    `type` ENUM('AddMoney', 'Charge') NOT NULL,
    `walletId` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Wallet` ADD CONSTRAINT `Wallet_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `UserDetails`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Transaction` ADD CONSTRAINT `Transaction_walletId_fkey` FOREIGN KEY (`walletId`) REFERENCES `Wallet`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Charge` ADD CONSTRAINT `Charge_transactionId_fkey` FOREIGN KEY (`transactionId`) REFERENCES `Transaction`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
