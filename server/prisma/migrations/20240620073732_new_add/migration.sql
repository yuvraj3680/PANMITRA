-- CreateTable
CREATE TABLE `NSDLPAN` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `panOption` VARCHAR(191) NOT NULL,
    `name` VARCHAR(191) NOT NULL,
    `dateOfBirth` DATETIME(3) NOT NULL,
    `gender` VARCHAR(191) NOT NULL,
    `mobileNumber` VARCHAR(191) NOT NULL,
    `email` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
