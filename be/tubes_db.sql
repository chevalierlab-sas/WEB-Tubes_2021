-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: localhost:3306
-- Generation Time: Aug 25, 2022 at 04:04 PM
-- Server version: 5.7.24
-- PHP Version: 7.2.19

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `tubes_db`
--

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `name` varchar(255) DEFAULT NULL,
  `email` varchar(255) DEFAULT NULL,
  `password` varchar(255) DEFAULT NULL,
  `refresh_token` text,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `name`, `email`, `password`, `refresh_token`, `createdAt`, `updatedAt`) VALUES
(1, 'M Raihan', 'raihan@gmail.com', '$2b$10$H/HB10S3z9e/XG4RLrGicOKliMdPkNDSRTo7wRg7mHFtmjNsHiHSS', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjEsIm5hbWUiOiJNIFJhaWhhbiIsImVtYWlsIjoicmFpaGFuQGdtYWlsLmNvbSIsImlhdCI6MTY2MDUzNjc2MSwiZXhwIjoxNjYwNjIzMTYxfQ.rXuS-lhYI_LO5vamGkoimTuBa_lzZyNqszNCOlBMq1c', '2022-08-11 03:12:28', '2022-08-15 04:12:41'),
(2, 'M Raihan', 'raihan@gmail.com', '$2b$10$ljQYPAN2vbpe0g4NNw0dZ..jYkj49QZAUYMrrnrqEm8PExJkJh6m.', NULL, '2022-08-15 04:06:43', '2022-08-15 04:06:43'),
(3, 'Ree', 'ree@gmail.com', '$2b$10$1NiVJwzUBe/lS2ILuN0Truvv5FFxw4zdpGWn2AnCDydgkz0wgGdi6', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjMsIm5hbWUiOiJSZWUiLCJlbWFpbCI6InJlZUBnbWFpbC5jb20iLCJpYXQiOjE2NjA1NTAxMjMsImV4cCI6MTY2MDYzNjUyM30.Na2wzZgzUyxLsqB1hEDQA1C7xaXIsOr6oCjs8z24pec', '2022-08-15 04:12:38', '2022-08-15 07:55:23');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
