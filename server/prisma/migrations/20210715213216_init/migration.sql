/*
  Warnings:

  - You are about to drop the column `adress` on the `contacts` table. All the data in the column will be lost.
  - You are about to drop the column `company` on the `contacts` table. All the data in the column will be lost.
  - You are about to drop the column `email` on the `contacts` table. All the data in the column will be lost.
  - You are about to drop the column `gsm` on the `contacts` table. All the data in the column will be lost.
  - You are about to drop the column `name` on the `contacts` table. All the data in the column will be lost.
  - You are about to drop the column `phone` on the `contacts` table. All the data in the column will be lost.

*/
-- DropIndex
DROP INDEX `parentId` ON `categories`;

-- DropIndex
DROP INDEX `newsId` ON `images`;

-- DropIndex
DROP INDEX `productsId` ON `images`;

-- DropIndex
DROP INDEX `slideId` ON `images`;

-- AlterTable
ALTER TABLE `contacts` DROP COLUMN `adress`,
    DROP COLUMN `company`,
    DROP COLUMN `email`,
    DROP COLUMN `gsm`,
    DROP COLUMN `name`,
    DROP COLUMN `phone`;

-- AddForeignKey
ALTER TABLE `Categories` ADD FOREIGN KEY (`parentId`) REFERENCES `Categories`(`Id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Images` ADD FOREIGN KEY (`newsId`) REFERENCES `News`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Images` ADD FOREIGN KEY (`slideId`) REFERENCES `Slides`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Images` ADD FOREIGN KEY (`productsId`) REFERENCES `Products`(`Id`) ON DELETE SET NULL ON UPDATE CASCADE;
