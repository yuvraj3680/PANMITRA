-- DropForeignKey
ALTER TABLE `wallet` DROP FOREIGN KEY `Wallet_id_fkey`;

-- DropIndex
DROP INDEX `Wallet_userId_fkey` ON `wallet`;

-- AddForeignKey
ALTER TABLE `Wallet` ADD CONSTRAINT `Wallet_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `UserDetails`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
