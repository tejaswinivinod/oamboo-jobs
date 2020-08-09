-- phpMyAdmin SQL Dump
-- version 5.0.2
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Aug 09, 2020 at 01:46 PM
-- Server version: 10.4.13-MariaDB
-- PHP Version: 7.4.8

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `oamboosoft`
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
  `salary_range` varchar(40) NOT NULL,
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
-- Dumping data for table `jobs_openings`
--

INSERT INTO `jobs_openings` (`id`, `profile_title`, `job_type`, `job_role`, `no_of_vacancies`, `closing_date`, `min_salary`, `max_salary`, `salary_range`, `experience`, `req_status`, `education`, `pref_location`, `key_skills`, `description`, `status`, `hr_id`, `createdon`) VALUES
(1, 'Limited Vacancy AT Multispeciality Hospital Apply', 'F', 0, 12, '2020-08-20', 5, 10, '5.50-10.30Lakhs', '3-5ye', 'Ur', 'M.Ed,Post Graduation,Any Postgraduate', 'Chandigarh,Bangalore,Coimbatore', 'Professionalism and strong work ethic,Teamwork and collaboration,Critical thinking and problem solving', 'A Registered Nurse is a nurse who has graduated from a', 'p', 0, '0000-00-00'),
(2, 'Limited Vacancy AT Multispeciality Hospital Apply', 'F', 0, 12, '2020-08-20', 5, 10, '5.50-10.30Lakhs', '3-5ye', 'Ur', 'M.Ed,Post Graduation,Any Postgraduate', 'Chandigarh,Bangalore,Coimbatore', 'Professionalism and strong work ethic,Teamwork and collaboration,Critical thinking and problem solving', 'A Registered Nurse is a nurse who has graduated from a nursing program and met the requirements outlined by a country, state, province or similar licensing body to obtain a nursing license. An RNs scope of practice is determined by legislation, and is regulated by a professional body or council', 'p', 0, '0000-00-00'),
(3, 'Limited Vacancy AT Multispeciality Hospital Apply', 'F', 0, 12, '2020-08-20', 5, 10, '5.50-10.30Lakhs', '3-5ye', 'Ur', 'M.Ed,Post Graduation,Any Postgraduate', 'Chandigarh,Bangalore,Coimbatore', 'Professionalism and strong work ethic,Teamwork and collaboration,Critical thinking and problem solving', 'A Registered Nurse is a nurse who has graduated from a nursing program and met the requirements outlined by a country, state, province or similar licensing body to obtain a nursing license. An RNs scope of practice is determined by legislation, and is regulated by a professional body or council', 'p', 0, '0000-00-00'),
(4, 'Pet Food & Accessories AT Multispeciality Hospital Apply', 'F', 0, 12, '2020-08-20', 5, 10, '5.50-10.30Lakhs', '3-5ye', 'Ur', 'M.Ed,Post Graduation,Any Postgraduate', 'Chandigarh,Bangalore,Coimbatore', 'Professionalism and strong work ethic,Teamwork and collaboration,Critical thinking and problem solving', 'A Registered Nurse is a nurse who has graduated from a nursing program and met the requirements outlined by a country, state, province or similar licensing body to obtain a nursing license. An RNs scope of practice is determined by legislation, and is regulated by a professional body or council', 'p', 0, '0000-00-00'),
(5, 'Partner, Business Growth', 'F', 0, 12, '2020-08-13', 5, 10, '5.25-10.23Lakhs', '8-10y', 'Im', 'MBA/PGDM,Post Graduation,M.Tech,M.Ed', 'Chandigarh,Coimbatore,Ahmedabad,Hyderabad', 'Professionalism and strong work ethic,Teamwork and collaboration,Oral and written communications skills', 'Roles and Responsibilities\n\nResponsible for expansion of client base across various sectors of the architecture and interiors industry including residential, offices, retail, industrial and planning.\nWill work to expand the client base in Bangalore, Chennai and Hyderabad.\n\nKey activities would be lead generation, follow ups, responding to RFPs, creating powerful presentations & pitching for business to clients.\n\nDesired Candidate Profile\n\nApplicant should have experience in business development or corporate communication role with international property consultants, architectural firms, real estate consultants.\n\nApplicant should have a proven track record..\n\nApplicant should be well networked , self-motivated, result oriented to close business deals.\nExcellent verbal and written communication skills are a must.\nClarity of thought, creativity and proficiency in creating presentations is essential.\nApplicant should have good client management skills and interest to work long term in a profit making role.', 'p', 0, '0000-00-00'),
(6, 'SAP Treasury consultant For a Global Strategic Client', 'F', 0, 12, '2020-08-13', 5, 10, '5.25-10.23Lakhs', '8-10y', 'Im', 'MBA/PGDM,Post Graduation,M.Tech,M.Ed', 'Chandigarh,Coimbatore,Ahmedabad,Hyderabad', 'Professionalism and strong work ethic,Teamwork and collaboration,Oral and written communications skills', 'Roles and Responsibilities\n\nResponsible for expansion of client base across various sectors of the architecture and interiors industry including residential, offices, retail, industrial and planning.\nWill work to expand the client base in Bangalore, Chennai and Hyderabad.\n\nKey activities would be lead generation, follow ups, responding to RFPs, creating powerful presentations & pitching for business to clients.\n\nDesired Candidate Profile\n\nApplicant should have experience in business development or corporate communication role with international property consultants, architectural firms, real estate consultants.\n\nApplicant should have a proven track record..\n\nApplicant should be well networked , self-motivated, result oriented to close business deals.\nExcellent verbal and written communication skills are a must.\nClarity of thought, creativity and proficiency in creating presentations is essential.\nApplicant should have good client management skills and interest to work long term in a profit making role.', 'p', 0, '0000-00-00'),
(7, 'Php Wordpress Developer', 'F', 0, 12, '2020-08-13', 5, 10, '5.25-10.23Lakhs', '8-10y', 'Im', 'MBA/PGDM,Post Graduation,M.Tech,M.Ed', 'Chandigarh,Coimbatore,Ahmedabad,Hyderabad', 'Professionalism and strong work ethic,Teamwork and collaboration,Oral and written communications skills', 'Roles and Responsibilities\n\nResponsible for expansion of client base across various sectors of the architecture and interiors industry including residential, offices, retail, industrial and planning.\nWill work to expand the client base in Bangalore, Chennai and Hyderabad.\n\nKey activities would be lead generation, follow ups, responding to RFPs, creating powerful presentations & pitching for business to clients.\n\nDesired Candidate Profile\n\nApplicant should have experience in business development or corporate communication role with international property consultants, architectural firms, real estate consultants.\n\nApplicant should have a proven track record..\n\nApplicant should be well networked , self-motivated, result oriented to close business deals.\nExcellent verbal and written communication skills are a must.\nClarity of thought, creativity and proficiency in creating presentations is essential.\nApplicant should have good client management skills and interest to work long term in a profit making role.', 'p', 0, '0000-00-00'),
(8, 'Partner, Business Growth', 'F', 0, 12, '2020-08-13', 5, 10, '5.25-10.23Lakhs', '8-10y', 'Im', 'MBA/PGDM,Post Graduation,M.Tech,M.Ed', 'Chandigarh,Coimbatore,Ahmedabad,Hyderabad', 'Professionalism and strong work ethic,Teamwork and collaboration,Oral and written communications skills', 'Roles and Responsibilities\n\nResponsible for expansion of client base across various sectors of the architecture and interiors industry including residential, offices, retail, industrial and planning.\nWill work to expand the client base in Bangalore, Chennai and Hyderabad.\n\nKey activities would be lead generation, follow ups, responding to RFPs, creating powerful presentations & pitching for business to clients.\n\nDesired Candidate Profile\n\nApplicant should have experience in business development or corporate communication role with international property consultants, architectural firms, real estate consultants.\n\nApplicant should have a proven track record..\n\nApplicant should be well networked , self-motivated, result oriented to close business deals.\nExcellent verbal and written communication skills are a must.\nClarity of thought, creativity and proficiency in creating presentations is essential.\nApplicant should have good client management skills and interest to work long term in a profit making role.', 'p', 0, '0000-00-00'),
(9, 'UI Architect / Solution Architect (React.js) / CES Ltd. / CHN & HYD', 'F', 0, 12, '2020-08-13', 5, 10, '5.25-10.23Lakhs', '8-10y', 'Im', 'MBA/PGDM,Post Graduation,M.Tech,M.Ed', 'Chandigarh,Coimbatore,Ahmedabad,Hyderabad', 'Professionalism and strong work ethic,Teamwork and collaboration,Oral and written communications skills', 'Roles and Responsibilities\n\nResponsible for expansion of client base across various sectors of the architecture and interiors industry including residential, offices, retail, industrial and planning.\nWill work to expand the client base in Bangalore, Chennai and Hyderabad.\n\nKey activities would be lead generation, follow ups, responding to RFPs, creating powerful presentations & pitching for business to clients.\n\nDesired Candidate Profile\n\nApplicant should have experience in business development or corporate communication role with international property consultants, architectural firms, real estate consultants.\n\nApplicant should have a proven track record..\n\nApplicant should be well networked , self-motivated, result oriented to close business deals.\nExcellent verbal and written communication skills are a must.\nClarity of thought, creativity and proficiency in creating presentations is essential.\nApplicant should have good client management skills and interest to work long term in a profit making role.', 'p', 0, '0000-00-00'),
(10, 'Job | We are hiring Senior Data Engineer', 'F', 0, 12, '2020-08-13', 5, 10, '5.25-10.23Lakhs', '8-10y', 'Im', 'MBA/PGDM,Post Graduation,M.Tech,M.Ed', 'Chandigarh,Coimbatore,Ahmedabad,Hyderabad', 'Professionalism and strong work ethic,Teamwork and collaboration,Oral and written communications skills', 'Roles and Responsibilities\n\nResponsible for expansion of client base across various sectors of the architecture and interiors industry including residential, offices, retail, industrial and planning.\nWill work to expand the client base in Bangalore, Chennai and Hyderabad.\n\nKey activities would be lead generation, follow ups, responding to RFPs, creating powerful presentations & pitching for business to clients.\n\nDesired Candidate Profile\n\nApplicant should have experience in business development or corporate communication role with international property consultants, architectural firms, real estate consultants.\n\nApplicant should have a proven track record..\n\nApplicant should be well networked , self-motivated, result oriented to close business deals.\nExcellent verbal and written communication skills are a must.\nClarity of thought, creativity and proficiency in creating presentations is essential.\nApplicant should have good client management skills and interest to work long term in a profit making role.', 'p', 0, '0000-00-00'),
(11, 'H1B Visa sponsorship Software Professionals For FY21', 'F', 0, 12, '2020-08-13', 5, 10, '5.25-10.23Lakhs', '8-10y', 'Im', 'MBA/PGDM,Post Graduation,M.Tech,M.Ed', 'Chandigarh,Coimbatore,Ahmedabad,Hyderabad', 'Professionalism and strong work ethic,Teamwork and collaboration,Oral and written communications skills', 'Roles and Responsibilities\n\nResponsible for expansion of client base across various sectors of the architecture and interiors industry including residential, offices, retail, industrial and planning.\nWill work to expand the client base in Bangalore, Chennai and Hyderabad.\n\nKey activities would be lead generation, follow ups, responding to RFPs, creating powerful presentations & pitching for business to clients.\n\nDesired Candidate Profile\n\nApplicant should have experience in business development or corporate communication role with international property consultants, architectural firms, real estate consultants.\n\nApplicant should have a proven track record..\n\nApplicant should be well networked , self-motivated, result oriented to close business deals.\nExcellent verbal and written communication skills are a must.\nClarity of thought, creativity and proficiency in creating presentations is essential.\nApplicant should have good client management skills and interest to work long term in a profit making role.', 'p', 0, '0000-00-00');

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
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=12;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
