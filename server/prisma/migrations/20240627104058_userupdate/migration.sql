/*
  Warnings:

  - A unique constraint covering the columns `[username]` on the table `UserDetails` will be added. If there are existing duplicate values, this will fail.

*/
-- AlterTable
ALTER TABLE `userdetails` ADD COLUMN `username` VARCHAR(191) NOT NULL DEFAULT '';

-- CreateIndex
CREATE UNIQUE INDEX `UserDetails_username_key` ON `UserDetails`(`username`);
