-- CreateTable
CREATE TABLE `Laporan` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `jenis` VARCHAR(191) NOT NULL,
    `judul` TEXT NOT NULL,
    `laporan` TEXT NOT NULL,
    `idPelapor` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Laporan` ADD CONSTRAINT `Laporan_idPelapor_fkey` FOREIGN KEY (`idPelapor`) REFERENCES `User`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
