-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Sep 05, 2023 at 03:26 PM
-- Server version: 10.4.28-MariaDB
-- PHP Version: 8.0.28

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `mapmyskill`
--

-- --------------------------------------------------------

--
-- Table structure for table `address`
--

CREATE TABLE `address` (
  `addressid` int(11) NOT NULL,
  `userid` int(11) NOT NULL,
  `addressline1` varchar(200) NOT NULL,
  `addressline2` varchar(200) NOT NULL,
  `landmark` varchar(200) NOT NULL,
  `city` int(10) NOT NULL,
  `state` int(10) NOT NULL,
  `country` int(10) NOT NULL,
  `pin` int(10) NOT NULL,
  `addressType` int(1) NOT NULL,
  `isSameAddress` char(1) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `category`
--

CREATE TABLE `category` (
  `categoryid` int(11) NOT NULL,
  `name` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `category`
--

INSERT INTO `category` (`categoryid`, `name`) VALUES
(1, 'Academic'),
(2, 'Non-Academic');

-- --------------------------------------------------------

--
-- Table structure for table `profile`
--

CREATE TABLE `profile` (
  `profileid` int(11) NOT NULL,
  `userid` int(11) NOT NULL,
  `instituteName` varchar(100) NOT NULL,
  `poc` varchar(100) NOT NULL,
  `emailId` varchar(100) NOT NULL,
  `isEmailVarified` char(1) NOT NULL,
  `primaryContact` bigint(10) NOT NULL,
  `isContactVarified` char(1) NOT NULL,
  `whatsappNumber` bigint(10) NOT NULL,
  `gender` int(1) NOT NULL,
  `interestedIn` int(11) NOT NULL,
  `instituteCategory` int(11) NOT NULL,
  `isAgreeTnc` char(1) NOT NULL,
  `landlineNumber` bigint(11) NOT NULL,
  `alternativeNumber` bigint(10) NOT NULL,
  `address1` varchar(200) NOT NULL,
  `address2` varchar(200) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `profile`
--

INSERT INTO `profile` (`profileid`, `userid`, `instituteName`, `poc`, `emailId`, `isEmailVarified`, `primaryContact`, `isContactVarified`, `whatsappNumber`, `gender`, `interestedIn`, `instituteCategory`, `isAgreeTnc`, `landlineNumber`, `alternativeNumber`, `address1`, `address2`) VALUES
(16, 110, 'NA', 'ccssgghjjk', 'mjgff@gmail.com', 'N', 917205556935, 'N', 7205556935, 9, 14, 55, '', 0, 0, 'Bankual', 'testing'),
(17, 111, 'NA', 'abcdef', 'abcdef@gmail.com', 'N', 917205556935, 'N', 7205556935, 9, 14, 55, '', 0, 0, 'Bankual', 'testing'),
(18, 112, 'NA', 'xyz', 'xyz@gmail.com', 'N', 917205556935, 'N', 7205556935, 9, 14, 55, '', 0, 0, 'Bankual', 'testing'),
(19, 115, 'NA', 'client', 'chandanrath686@gmail.com', 'N', 917205556935, 'N', 7205556935, 3, 14, 55, '', 0, 0, 'Bankual', 'bankuala'),
(20, 116, 'NA', 'zxcvbnnn', 'chandanrath686@gmail.com', 'N', 917205556935, 'N', 7205556935, 3, 14, 55, '', 0, 0, 'Bankual', 'bankual'),
(21, 117, 'NA', 'ccxxssdd', 'chandanrath686@gmail.com', 'N', 917205556935, 'N', 7205556935, 3, 14, 55, '', 0, 0, 'Bankual', 'bankual'),
(23, 118, 'NA', 'abhijeet', 'abhi0579@gmail.com', 'N', 919903098819, 'N', 9903098819, 3, 14, 55, '', 0, 0, 'Bengal Chemical', 'chemical'),
(24, 119, 'NA', 'chandan rath', 'chandanrath686@gmail.com', 'N', 917205556935, 'N', 7205556935, 3, 14, 55, '', 0, 0, 'Bankual', 'testing'),
(25, 120, 'NA', 'chandan', 'chandanrath686@gmail.com', 'N', 917205556935, 'N', 7205556935, 3, 14, 55, '', 0, 0, 'Bankual', 'testing'),
(26, 121, 'NA', 'chandan', 'chandanrath686@gmail.com', 'N', 917205556935, 'N', 7205556935, 3, 15, 55, '', 0, 0, 'Bankual', 'testing'),
(27, 122, 'NA', 'dummy', 'chandanrath686@gmail.com', 'N', 917205556935, 'Y', 7205556935, 3, 14, 55, '', 0, 0, 'Gopinathpur', 'testing'),
(28, 122, 'NA', '', '', 'N', 0, 'N', 0, 3, 54, 55, '', 0, 0, '', '');

-- --------------------------------------------------------

--
-- Table structure for table `role`
--

CREATE TABLE `role` (
  `roleid` int(11) NOT NULL,
  `name` varchar(50) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `role`
--

INSERT INTO `role` (`roleid`, `name`) VALUES
(1, 'superadmin'),
(2, 'admin'),
(3, 'teacher'),
(4, 'student'),
(5, 'institute');

-- --------------------------------------------------------

--
-- Table structure for table `segment`
--

CREATE TABLE `segment` (
  `segmentid` int(11) NOT NULL,
  `name` varchar(100) NOT NULL,
  `categoryid` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `segment`
--

INSERT INTO `segment` (`segmentid`, `name`, `categoryid`) VALUES
(6, 'class5-class10', 1),
(8, 'Data', 2),
(12, 'test 6', 1),
(27, 'test 7', 2),
(28, 'class1-4', 2),
(30, 'web development', 1);

-- --------------------------------------------------------

--
-- Table structure for table `spokenlanguage`
--

CREATE TABLE `spokenlanguage` (
  `spokenlanguageid` int(11) NOT NULL,
  `userid` int(11) NOT NULL,
  `languageid` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `subject`
--

CREATE TABLE `subject` (
  `subjectid` int(11) NOT NULL,
  `name` varchar(100) NOT NULL,
  `segmentid` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `subject`
--

INSERT INTO `subject` (`subjectid`, `name`, `segmentid`) VALUES
(14, 'math', 6),
(20, '5 to 10', 6),
(21, 'data1', 8),
(22, 'data2', 8),
(23, 'test', 12),
(24, 'test1', 12),
(25, 'test71', 27),
(26, 'test72', 27),
(27, 'class41', 28),
(28, 'class42', 28),
(29, 'react', 30),
(30, 'node', 30);

-- --------------------------------------------------------

--
-- Table structure for table `systemlist`
--

CREATE TABLE `systemlist` (
  `listId` int(11) NOT NULL,
  `listName` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `systemlist`
--

INSERT INTO `systemlist` (`listId`, `listName`) VALUES
(1, 'board'),
(2, 'university\r\n'),
(3, 'gender'),
(54, 'intrested in'),
(55, 'institute category'),
(56, 'experience'),
(58, 'teacher location'),
(59, 'student location'),
(60, 'institute location'),
(61, 'teaching exp in year');

-- --------------------------------------------------------

--
-- Table structure for table `systemlistitem`
--

CREATE TABLE `systemlistitem` (
  `listItemId` int(11) NOT NULL,
  `listid` int(11) NOT NULL,
  `listItemName` varchar(200) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `systemlistitem`
--

INSERT INTO `systemlistitem` (`listItemId`, `listid`, `listItemName`) VALUES
(1, 1, 'CBSE'),
(3, 3, 'male'),
(8, 2, 'utkal'),
(9, 3, 'female'),
(10, 2, 'ravenshaw'),
(13, 54, 'face to face guidance'),
(14, 54, 'online guidance'),
(15, 54, 'multi selection'),
(20, 55, 'pre school'),
(21, 55, 'child care'),
(22, 55, 'primary elementary school'),
(23, 55, 'secondary high school'),
(24, 56, '1 year'),
(25, 56, '2 year'),
(26, 56, '3 year'),
(27, 58, 'bbsr'),
(28, 58, 'Home Tuition (Student\'s Location)'),
(29, 58, 'Online Classes'),
(30, 58, 'My Locations (Teacher\'s Location)'),
(31, 58, 'Teaching / Faculty job at an institute'),
(32, 58, 'Distance / Correspondence classes (Through Audio/ Video / Text Material)'),
(33, 59, 'My Place (Home Tuition)'),
(34, 59, 'Online Classes'),
(35, 59, 'Tutor\'s Place'),
(36, 59, 'Institute / Tutorial Center'),
(37, 59, 'Online'),
(38, 60, 'Teach Students at their location (Home Tuition)'),
(39, 60, 'Teach Students online'),
(40, 60, 'Teach student at Institute'),
(41, 60, 'Conduct Distance / Correspondence classes (Through Audio/ Video / Text Material)'),
(42, 61, 'Less than One year'),
(43, 61, '1 Year'),
(44, 61, '2 Years'),
(45, 61, '3 Years'),
(46, 61, '4 Years'),
(47, 61, '5 Years'),
(48, 61, '6 Years'),
(49, 61, '7 Years'),
(50, 61, '8 Years'),
(51, 61, '9 Years'),
(52, 61, '10 Years'),
(53, 61, '11 Years'),
(54, 61, '12 Years'),
(55, 61, '13 Years'),
(56, 61, '14 Years'),
(57, 61, '15 Years'),
(58, 61, '16 Years'),
(59, 61, '17 Years'),
(60, 61, '18 Years'),
(61, 61, '19 Years'),
(62, 61, '20 Years'),
(63, 61, '21 Years'),
(64, 61, '22 Years'),
(65, 61, '23 Years'),
(66, 61, '24 Years'),
(67, 61, '25 Years'),
(68, 61, '26 Years'),
(69, 61, '27 Years'),
(70, 61, '28 Years'),
(71, 61, '29 Years');

-- --------------------------------------------------------

--
-- Table structure for table `teachereducation`
--

CREATE TABLE `teachereducation` (
  `educationid` int(11) NOT NULL,
  `userid` int(11) NOT NULL,
  `level` char(1) NOT NULL,
  `specialization` varchar(100) NOT NULL,
  `InstitutionName` int(10) NOT NULL,
  `InstitutionAddress` int(10) NOT NULL,
  `university` int(10) NOT NULL,
  `mediumofInstruction` int(10) NOT NULL,
  `coursetype` int(10) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `teacherexperience`
--

CREATE TABLE `teacherexperience` (
  `experienceid` int(11) NOT NULL,
  `userid` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `teacherlocation`
--

CREATE TABLE `teacherlocation` (
  `id` int(11) NOT NULL,
  `locationid` int(11) NOT NULL,
  `userid` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `teacherproficiency`
--

CREATE TABLE `teacherproficiency` (
  `id` int(11) NOT NULL,
  `userid` int(11) NOT NULL,
  `hasteachingexp` char(1) NOT NULL,
  `universityname` int(11) NOT NULL,
  `location` varchar(200) NOT NULL,
  `serviceperiod` int(11) NOT NULL,
  `trainingapproach` varchar(500) NOT NULL,
  `expinyear` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `teacherschooling`
--

CREATE TABLE `teacherschooling` (
  `schoolingId` int(11) NOT NULL,
  `userId` int(11) NOT NULL,
  `level` char(1) NOT NULL,
  `board` char(1) NOT NULL,
  `schoolName` varchar(100) NOT NULL,
  `schoolAddress` varchar(100) NOT NULL,
  `passingYear` int(4) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `teachersubject`
--

CREATE TABLE `teachersubject` (
  `id` int(11) NOT NULL,
  `subjectid` int(11) NOT NULL,
  `userid` int(11) NOT NULL,
  `segmentid` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `teachertraininglevel`
--

CREATE TABLE `teachertraininglevel` (
  `id` int(11) NOT NULL,
  `segmentid` int(11) NOT NULL,
  `userid` int(11) NOT NULL,
  `board` int(11) NOT NULL,
  `price` decimal(10,0) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `userid` int(11) NOT NULL,
  `roleid` int(11) NOT NULL,
  `isdcode` varchar(4) NOT NULL,
  `mobile` varchar(13) NOT NULL,
  `email` varchar(50) NOT NULL,
  `password` varchar(16) NOT NULL,
  `created` timestamp NOT NULL DEFAULT current_timestamp(),
  `modified` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`userid`, `roleid`, `isdcode`, `mobile`, `email`, `password`, `created`, `modified`) VALUES
(66, 1, '+91', '1234567890', 'admin@gmail.com', 'abcd1234', '2023-08-17 16:15:51', '2023-08-17 16:15:51'),
(67, 4, '+91', '917205556935', 'demo@gmail.com', 'demo@1234', '2023-08-21 12:55:59', '2023-08-21 12:55:59'),
(69, 4, '+91', '919876543210', 'demo@gmail.com', 'demo@1234', '2023-08-21 13:57:20', '2023-08-21 13:57:20'),
(70, 1, '+91', '917205556935', 'abcd@gmail.com', '1234', '2023-08-21 14:17:47', '2023-08-21 14:17:47'),
(71, 1, '+91', '917205556935', 'chandan686@gmail.com', '1234', '2023-08-21 14:26:11', '2023-08-21 14:26:11'),
(73, 1, '+91', '917205556935', 'asd@gmail.com', '1234', '2023-08-21 14:35:20', '2023-08-21 14:35:20'),
(74, 4, '+91', '917205556935', 'chandanrath686@gmail.com', '123456', '2023-08-22 06:09:02', '2023-08-22 06:09:02'),
(75, 5, '+91', '917205556935', 'testing@gmail.com', '123456', '2023-08-22 07:04:03', '2023-08-22 07:04:03'),
(76, 5, '+91', '917205556935', 'abcd@gmail.com', '123456', '2023-08-22 07:08:26', '2023-08-22 07:08:26'),
(78, 4, '+91', '917205556935', 'axyz@gmail.com', '12345', '2023-08-22 07:45:04', '2023-08-22 07:45:04'),
(80, 4, '+91', '917205556935', 'tdemo@gmail.com', '123456', '2023-08-22 07:49:34', '2023-08-22 07:49:34'),
(81, 5, '+91', '917205556935', 'demoo@gmail.com', '12345', '2023-08-22 07:51:47', '2023-08-22 07:51:47'),
(83, 4, '+91', '917205556935', 'hello@gmail.com', '123456', '2023-08-22 08:05:20', '2023-08-22 08:05:20'),
(84, 4, '+91', '917205556935', 'chandanrath686@gmail.com', '1234', '2023-08-22 08:09:12', '2023-08-22 08:09:12'),
(85, 1, '+91', '917205556935', 'abcd@gmail.com', '123456', '2023-08-22 08:31:23', '2023-08-22 08:31:23'),
(87, 4, '+91', '917205556935', 'abcddd@gmail.com', '123456', '2023-08-22 08:33:29', '2023-08-22 08:33:29'),
(88, 4, '+91', '917205556935', 'xuser@gail.com', '123456', '2023-08-22 09:22:01', '2023-08-22 09:22:01'),
(89, 4, '', '7205556935', 'testing@gmail.com', '123456', '2023-08-22 09:33:35', '2023-08-22 09:33:35'),
(90, 1, '+91', '917205556935', 'testu@gmail.com', '123456', '2023-08-22 09:35:01', '2023-08-22 09:35:01'),
(91, 4, '+91', '917205556935', 'textttt@gmail.com', '123456', '2023-08-22 09:37:46', '2023-08-22 09:37:46'),
(92, 3, '', '7205556935', 'testing@gmail.com', '123456', '2023-08-22 09:49:47', '2023-08-22 09:49:47'),
(93, 4, '', '7205556935', 'abcd@gmail.com', '123456', '2023-08-22 09:51:56', '2023-08-22 09:51:56'),
(94, 3, '', '7205556935', 'chandanrath686@gmail.com', '123456', '2023-08-22 09:54:49', '2023-08-22 09:54:49'),
(96, 3, '', '7205556935', 'user1111@gmail.com', '123456', '2023-08-22 10:00:18', '2023-08-22 10:00:18'),
(97, 4, '+91', '917205556935', 'xyz@gmail.com', '123456', '2023-08-22 10:07:40', '2023-08-22 10:07:40'),
(98, 4, '+91', '917205556935', 'tdem@gmail.com', '123456', '2023-08-22 10:11:02', '2023-08-22 10:11:02'),
(100, 4, '+91', '917205556935', 'xzyy@gmail.com', '1234', '2023-08-22 10:18:20', '2023-08-22 10:18:20'),
(101, 4, '+91', '917205556935', 'xxxyyyzzz@gmail.com', '123456', '2023-08-22 10:37:59', '2023-08-22 10:37:59'),
(102, 4, '+91', '917205556935', 'abxcd@gmail.com', '123456', '2023-08-22 10:45:01', '2023-08-22 10:45:01'),
(103, 4, '+91', '917205556935', 'student@gmail.com', '123456', '2023-08-22 10:53:07', '2023-08-22 10:53:07'),
(104, 4, '+91', '917205556935', 'lkj@gmail.com', '12345', '2023-08-22 11:01:24', '2023-08-22 11:01:24'),
(105, 4, '+91', '917205556935', 'bvcx@gmail.com', '123456', '2023-08-22 11:04:36', '2023-08-22 11:04:36'),
(106, 4, '+91', '917205556935', 'nbvcx@gmail.com', '123456', '2023-08-22 11:09:57', '2023-08-22 11:09:57'),
(107, 4, '+91', '917205556935', 'asdfg@gmail.com', '123456', '2023-08-22 11:13:30', '2023-08-22 11:13:30'),
(108, 5, '+91', '917205556935', 'asdf@gmail.com', '123456', '2023-08-22 11:16:20', '2023-08-22 11:16:20'),
(109, 4, '+91', '917205556935', 'mjfew@gmail.com', '123456', '2023-08-22 11:33:57', '2023-08-22 11:33:57'),
(110, 4, '+91', '917205556935', 'mjgff@gmail.com', 'aa1234', '2023-08-22 11:37:46', '2023-08-22 11:37:46'),
(111, 1, '+91', '917205556935', 'abcdef@gmail.com', '123456', '2023-08-22 12:24:15', '2023-08-22 12:24:15'),
(112, 1, '+91', '917205556935', 'xyz@gmail.com', '123456', '2023-08-22 12:28:44', '2023-08-22 12:28:44'),
(113, 1, '+91', '917205556935', 'xyz@gmail.com', '123456', '2023-08-22 12:57:12', '2023-08-22 12:57:12'),
(114, 4, '+91', '917205556935', 'mmnnbb@gmail.com', '123456', '2023-08-22 13:01:55', '2023-08-22 13:01:55'),
(115, 4, '+91', '917205556935', 'chandanrath686@gmail.com', '123456', '2023-08-22 15:36:48', '2023-08-22 15:36:48'),
(116, 4, '+91', '917205556935', 'chandanrath686@gmail.com', '123456', '2023-08-22 15:50:32', '2023-08-22 15:50:32'),
(117, 4, '+91', '917205556935', 'chandanrath686@gmail.com', '1234', '2023-08-22 15:54:04', '2023-08-22 15:54:04'),
(118, 1, '+91', '919903098819', 'abhi0579@gmail.com', '123456', '2023-08-22 16:49:11', '2023-08-22 16:49:11'),
(119, 4, '+91', '917205556935', 'chandanrath686@gmail.com', '123456', '2023-08-29 09:41:58', '2023-08-29 09:41:58'),
(120, 4, '+91', '917205556935', 'chandanrath686@gmail.com', '123456', '2023-08-29 10:11:06', '2023-08-29 10:11:06'),
(121, 1, '+91', '917205556935', 'chandanrath686@gmail.com', '123456', '2023-08-29 10:17:37', '2023-08-29 10:17:37'),
(122, 3, '+91', '917205556935', 'chandanrath686@gmail.com', '123456', '2023-08-30 06:31:45', '2023-08-30 06:31:45');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `address`
--
ALTER TABLE `address`
  ADD PRIMARY KEY (`addressid`),
  ADD KEY `address_users_fk` (`userid`);

--
-- Indexes for table `category`
--
ALTER TABLE `category`
  ADD PRIMARY KEY (`categoryid`);

--
-- Indexes for table `profile`
--
ALTER TABLE `profile`
  ADD PRIMARY KEY (`profileid`),
  ADD KEY `profile_users_fk` (`userid`);

--
-- Indexes for table `role`
--
ALTER TABLE `role`
  ADD PRIMARY KEY (`roleid`);

--
-- Indexes for table `segment`
--
ALTER TABLE `segment`
  ADD PRIMARY KEY (`segmentid`),
  ADD KEY `category_segment_fk` (`categoryid`);

--
-- Indexes for table `spokenlanguage`
--
ALTER TABLE `spokenlanguage`
  ADD PRIMARY KEY (`spokenlanguageid`),
  ADD KEY `spokenlanguage_users_fk` (`userid`);

--
-- Indexes for table `subject`
--
ALTER TABLE `subject`
  ADD PRIMARY KEY (`subjectid`),
  ADD KEY `subject_segment_fk` (`segmentid`);

--
-- Indexes for table `systemlist`
--
ALTER TABLE `systemlist`
  ADD PRIMARY KEY (`listId`);

--
-- Indexes for table `systemlistitem`
--
ALTER TABLE `systemlistitem`
  ADD PRIMARY KEY (`listItemId`),
  ADD KEY `listitem_list_fk` (`listid`);

--
-- Indexes for table `teachereducation`
--
ALTER TABLE `teachereducation`
  ADD PRIMARY KEY (`educationid`),
  ADD KEY `education_users_fk` (`userid`);

--
-- Indexes for table `teacherlocation`
--
ALTER TABLE `teacherlocation`
  ADD PRIMARY KEY (`id`),
  ADD KEY `teacherlocation_users_fk` (`userid`);

--
-- Indexes for table `teacherproficiency`
--
ALTER TABLE `teacherproficiency`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `teacherschooling`
--
ALTER TABLE `teacherschooling`
  ADD PRIMARY KEY (`schoolingId`),
  ADD KEY `schooling_users_fk` (`userId`);

--
-- Indexes for table `teachersubject`
--
ALTER TABLE `teachersubject`
  ADD PRIMARY KEY (`id`),
  ADD KEY `teachersubject_users_fk` (`userid`),
  ADD KEY `teachersubject_segment_fk` (`segmentid`),
  ADD KEY `teachersubject_subject_fk` (`subjectid`);

--
-- Indexes for table `teachertraininglevel`
--
ALTER TABLE `teachertraininglevel`
  ADD PRIMARY KEY (`id`),
  ADD KEY `teachertraininglevel_users_fk` (`userid`),
  ADD KEY `treachertraininglevel_segment_fk` (`segmentid`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`userid`),
  ADD KEY `role_user_fk` (`roleid`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `address`
--
ALTER TABLE `address`
  MODIFY `addressid` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `category`
--
ALTER TABLE `category`
  MODIFY `categoryid` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `profile`
--
ALTER TABLE `profile`
  MODIFY `profileid` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=29;

--
-- AUTO_INCREMENT for table `segment`
--
ALTER TABLE `segment`
  MODIFY `segmentid` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=40;

--
-- AUTO_INCREMENT for table `spokenlanguage`
--
ALTER TABLE `spokenlanguage`
  MODIFY `spokenlanguageid` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `subject`
--
ALTER TABLE `subject`
  MODIFY `subjectid` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=31;

--
-- AUTO_INCREMENT for table `systemlist`
--
ALTER TABLE `systemlist`
  MODIFY `listId` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=62;

--
-- AUTO_INCREMENT for table `systemlistitem`
--
ALTER TABLE `systemlistitem`
  MODIFY `listItemId` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=72;

--
-- AUTO_INCREMENT for table `teachereducation`
--
ALTER TABLE `teachereducation`
  MODIFY `educationid` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `teacherlocation`
--
ALTER TABLE `teacherlocation`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `teacherproficiency`
--
ALTER TABLE `teacherproficiency`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `teacherschooling`
--
ALTER TABLE `teacherschooling`
  MODIFY `schoolingId` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `teachersubject`
--
ALTER TABLE `teachersubject`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `teachertraininglevel`
--
ALTER TABLE `teachertraininglevel`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `userid` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=123;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `address`
--
ALTER TABLE `address`
  ADD CONSTRAINT `address_users_fk` FOREIGN KEY (`userid`) REFERENCES `users` (`userid`);

--
-- Constraints for table `profile`
--
ALTER TABLE `profile`
  ADD CONSTRAINT `profile_users_fk` FOREIGN KEY (`userid`) REFERENCES `users` (`userid`);

--
-- Constraints for table `segment`
--
ALTER TABLE `segment`
  ADD CONSTRAINT `category_segment_fk` FOREIGN KEY (`categoryid`) REFERENCES `category` (`categoryid`);

--
-- Constraints for table `spokenlanguage`
--
ALTER TABLE `spokenlanguage`
  ADD CONSTRAINT `spokenlanguage_users_fk` FOREIGN KEY (`userid`) REFERENCES `users` (`userid`);

--
-- Constraints for table `subject`
--
ALTER TABLE `subject`
  ADD CONSTRAINT `subject_segment_fk` FOREIGN KEY (`segmentid`) REFERENCES `segment` (`segmentid`);

--
-- Constraints for table `systemlistitem`
--
ALTER TABLE `systemlistitem`
  ADD CONSTRAINT `listitem_list_fk` FOREIGN KEY (`listid`) REFERENCES `systemlist` (`listId`);

--
-- Constraints for table `teachereducation`
--
ALTER TABLE `teachereducation`
  ADD CONSTRAINT `education_users_fk` FOREIGN KEY (`userid`) REFERENCES `users` (`userid`);

--
-- Constraints for table `teacherlocation`
--
ALTER TABLE `teacherlocation`
  ADD CONSTRAINT `teacherlocation_users_fk` FOREIGN KEY (`userid`) REFERENCES `users` (`userid`);

--
-- Constraints for table `teacherschooling`
--
ALTER TABLE `teacherschooling`
  ADD CONSTRAINT `schooling_users_fk` FOREIGN KEY (`userId`) REFERENCES `users` (`userid`);

--
-- Constraints for table `teachersubject`
--
ALTER TABLE `teachersubject`
  ADD CONSTRAINT `teachersubject_segment_fk` FOREIGN KEY (`segmentid`) REFERENCES `segment` (`segmentid`),
  ADD CONSTRAINT `teachersubject_subject_fk` FOREIGN KEY (`subjectid`) REFERENCES `subject` (`subjectid`),
  ADD CONSTRAINT `teachersubject_users_fk` FOREIGN KEY (`userid`) REFERENCES `users` (`userid`);

--
-- Constraints for table `teachertraininglevel`
--
ALTER TABLE `teachertraininglevel`
  ADD CONSTRAINT `teachertraininglevel_users_fk` FOREIGN KEY (`userid`) REFERENCES `users` (`userid`),
  ADD CONSTRAINT `treachertraininglevel_segment_fk` FOREIGN KEY (`segmentid`) REFERENCES `segment` (`segmentid`);

--
-- Constraints for table `users`
--
ALTER TABLE `users`
  ADD CONSTRAINT `role_user_fk` FOREIGN KEY (`roleid`) REFERENCES `role` (`roleid`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
