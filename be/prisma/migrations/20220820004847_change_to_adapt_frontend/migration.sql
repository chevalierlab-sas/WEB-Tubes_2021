/*
  Warnings:

  - You are about to drop the column `firstName` on the `user` table. All the data in the column will be lost.
  - You are about to drop the column `lastName` on the `user` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[nim]` on the table `User` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `alamat` to the `User` table without a default value. This is not possible if the table is not empty.
  - Added the required column `lahir` to the `User` table without a default value. This is not possible if the table is not empty.
  - Added the required column `nama` to the `User` table without a default value. This is not possible if the table is not empty.
  - Added the required column `nim` to the `User` table without a default value. This is not possible if the table is not empty.
  - Added the required column `studi` to the `User` table without a default value. This is not possible if the table is not empty.
  - Added the required column `telepon` to the `User` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `user` DROP COLUMN `firstName`,
    DROP COLUMN `lastName`,
    ADD COLUMN `alamat` TEXT NOT NULL,
    ADD COLUMN `lahir` DATE NOT NULL,
    ADD COLUMN `nama` TEXT NOT NULL,
    ADD COLUMN `nim` VARCHAR(10) NOT NULL,
    ADD COLUMN `studi` VARCHAR(191) NOT NULL,
    ADD COLUMN `telepon` VARCHAR(15) NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX `User_nim_key` ON `User`(`nim`);
