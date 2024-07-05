/*
  Warnings:

  - A unique constraint covering the columns `[adminId]` on the table `UserDetails` will be added. If there are existing duplicate values, this will fail.

*/
-- AlterTable
ALTER TABLE `userdetails` ADD COLUMN `adminId` INTEGER NULL;

-- CreateTable
CREATE TABLE `Admin` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `role` VARCHAR(191) NOT NULL DEFAULT 'ADMIN',
    `userDetailsId` INTEGER NOT NULL,
    `permissions` JSON NOT NULL,

    UNIQUE INDEX `Admin_userDetailsId_key`(`userDetailsId`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateIndex
CREATE UNIQUE INDEX `UserDetails_adminId_key` ON `UserDetails`(`adminId`);

-- AddForeignKey
ALTER TABLE `Admin` ADD CONSTRAINT `Admin_userDetailsId_fkey` FOREIGN KEY (`userDetailsId`) REFERENCES `UserDetails`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
