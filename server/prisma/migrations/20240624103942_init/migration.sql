-- CreateTable
CREATE TABLE `PANCustomer` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(191) NOT NULL,
    `uid` VARCHAR(191) NOT NULL,
    `dob` DATETIME(3) NOT NULL,
    `pan` VARCHAR(191) NULL,
    `status` ENUM('Pending', 'Accepted', 'Rejected') NOT NULL,

    UNIQUE INDEX `PANCustomer_uid_key`(`uid`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `PANRequest` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `status` BOOLEAN NOT NULL,
    `msg` VARCHAR(191) NOT NULL,
    `customerId` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `PANRequest` ADD CONSTRAINT `PANRequest_customerId_fkey` FOREIGN KEY (`customerId`) REFERENCES `PANCustomer`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
