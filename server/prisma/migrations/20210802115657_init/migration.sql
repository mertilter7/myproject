/*
  Warnings:

  - The primary key for the `news` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `id` on the `news` table. All the data in the column will be lost.

*/
-- DropIndex
DROP INDEX `parentId` ON `categories`;

-- DropIndex
DROP INDEX `homeId` ON `images`;

-- DropIndex
DROP INDEX `newsId` ON `images`;

-- DropIndex
DROP INDEX `productsId` ON `images`;

-- DropIndex
DROP INDEX `slideId` ON `images`;

-- AlterTable
ALTER TABLE `news` DROP PRIMARY KEY,
    DROP COLUMN `id`,
    ADD COLUMN `Id` INTEGER NOT NULL AUTO_INCREMENT,
    ADD PRIMARY KEY (`Id`);

-- AddForeignKey
ALTER TABLE `Categories` ADD FOREIGN KEY (`parentId`) REFERENCES `Categories`(`Id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Images` ADD FOREIGN KEY (`newsId`) REFERENCES `News`(`Id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Images` ADD FOREIGN KEY (`slideId`) REFERENCES `Slides`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Images` ADD FOREIGN KEY (`productsId`) REFERENCES `Products`(`Id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Images` ADD FOREIGN KEY (`homeId`) REFERENCES `Home`(`Id`) ON DELETE SET NULL ON UPDATE CASCADE;
