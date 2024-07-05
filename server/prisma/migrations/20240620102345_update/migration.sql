/*
  Warnings:

  - You are about to drop the `nsdlesign` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE `nsdlesign`;

-- CreateTable
CREATE TABLE `mSDLESIGN` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `panOption` VARCHAR(191) NOT NULL,
    `name` VARCHAR(191) NOT NULL,
    `dateOfBirth` DATETIME(3) NOT NULL,
    `gender` VARCHAR(191) NOT NULL,
    `mobileNumber` VARCHAR(191) NOT NULL,
    `email` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
