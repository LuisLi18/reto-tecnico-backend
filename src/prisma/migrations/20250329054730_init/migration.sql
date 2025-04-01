-- CreateTable
CREATE TABLE `Division` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(45) NOT NULL,
    `level` INTEGER NOT NULL,
    `collaboratorsCount` INTEGER NOT NULL,
    `ambassadorName` VARCHAR(100) NULL,
    `parentDivisionId` INTEGER NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    UNIQUE INDEX `Division_name_key`(`name`),
    INDEX `Division_parentDivisionId_idx`(`parentDivisionId`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Division` ADD CONSTRAINT `Division_parentDivisionId_fkey` FOREIGN KEY (`parentDivisionId`) REFERENCES `Division`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;
