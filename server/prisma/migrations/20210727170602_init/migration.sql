-- DropIndex
DROP INDEX `parentId` ON `categories`;

-- DropIndex
DROP INDEX `newsId` ON `images`;

-- DropIndex
DROP INDEX `productsId` ON `images`;

-- DropIndex
DROP INDEX `slideId` ON `images`;

-- AlterTable
ALTER TABLE `images` ADD COLUMN `homeId` INTEGER;

-- AddForeignKey
ALTER TABLE `Categories` ADD FOREIGN KEY (`parentId`) REFERENCES `Categories`(`Id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Images` ADD FOREIGN KEY (`newsId`) REFERENCES `News`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Images` ADD FOREIGN KEY (`slideId`) REFERENCES `Slides`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Images` ADD FOREIGN KEY (`productsId`) REFERENCES `Products`(`Id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Images` ADD FOREIGN KEY (`homeId`) REFERENCES `Home`(`Id`) ON DELETE SET NULL ON UPDATE CASCADE;
