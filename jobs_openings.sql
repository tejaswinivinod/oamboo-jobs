-- phpMyAdmin SQL Dump
-- version 4.9.0.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jul 09, 2020 at 04:46 PM
-- Server version: 10.4.6-MariaDB
-- PHP Version: 7.1.32

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `oamboo`
--

-- --------------------------------------------------------

--
-- Table structure for table `jobs_openings`
--

CREATE TABLE `jobs_openings` (
  `id` int(11) NOT NULL,
  `profile_title` varchar(150) NOT NULL,
  `job_type` varchar(1) NOT NULL,
  `job_role` int(4) NOT NULL,
  `no_of_vacancies` int(4) NOT NULL,
  `closing_date` date NOT NULL,
  `min_salary` int(11) NOT NULL,
  `max_salary` int(11) NOT NULL,
  `experience` varchar(5) NOT NULL,
  `req_status` varchar(2) NOT NULL,
  `education` varchar(200) NOT NULL,
  `pref_location` text NOT NULL,
  `key_skills` text NOT NULL,
  `description` text NOT NULL,
  `status` varchar(3) NOT NULL,
  `hr_id` int(11) NOT NULL,
  `createdon` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Indexes for dumped tables
--

--
-- Indexes for table `jobs_openings`
--
ALTER TABLE `jobs_openings`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `jobs_openings`
--
ALTER TABLE `jobs_openings`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
