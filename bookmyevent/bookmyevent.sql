-- phpMyAdmin SQL Dump
-- version 4.5.1
-- http://www.phpmyadmin.net
--
-- Host: 127.0.0.1
-- Generation Time: May 17, 2017 at 12:17 PM
-- Server version: 10.1.10-MariaDB
-- PHP Version: 7.0.4

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `bookmyevent`
--

-- --------------------------------------------------------

--
-- Table structure for table `adventure_image`
--

CREATE TABLE `adventure_image` (
  `id` int(100) NOT NULL,
  `image` varchar(2000) NOT NULL,
  `nameofevent` varchar(100) NOT NULL,
  `location` varchar(1000) NOT NULL,
  `description` varchar(5000) NOT NULL,
  `date` date NOT NULL,
  `price` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `adventure_image`
--

INSERT INTO `adventure_image` (`id`, `image`, `nameofevent`, `location`, `description`, `date`, `price`) VALUES
(1, 'all_image/adventure_image/Accretion-Aviation.jpg', 'helicopter-joy-ride', 'india', 'Our helicopter joyrides are available in various cities like Mumbai, Pune, Indore , Hyderabad we are actively looking at expanding this service into various other cities and please check with us periodically to know our service offering. With helicopters based in most cities we have come up with a concept of Joy Rides. You can take your loved one up in the air for 20 minutes or more and get an eagle eye view of the city. Whether you are celebrating an anniversary or a birthday, a proposal,', '2017-05-31', '10000'),
(2, 'all_image/adventure_image/CodeBreak-60_n.jpg', 'code-break', 'India', 'You are locked inside a room and the clock starts ticking. You have exactly 1 Hour, to unravel the mystery and escape. The challenge is to break the code, solve some puzzles and find your way out. To add to this room escape excitement you also need to achieve a certain objective, depending on the game you chose. But donâ€™t worry, all you really need to do is be observant and keep those thinking caps ON!', '2017-06-30', '2000'),
(3, 'all_image/adventure_image/Just_Chill_Water_Park.jpg', 'just-chill-water-park', 'delhi', 'Perfect place to cast your cares away and unwilled totally, splurging in the waters, getting your wits scared out of you on crazy bewildering rides or simply drifting along the lazy river. All the rides offer a safe and relaxing place for the kids to play to their hearts content. There are shallow areas for the little ones as well as deeper areas for the dare devils. Activities : Amusement parks, family entertainment rides, water park', '2017-07-29', '1000'),
(4, 'all_image/adventure_image/The-Hidden-Hour.jpg', 'hidden-hour', 'delhi', 'The Hidden Hour is a "Real-Life Escape Game" in Gurgaon, Delhi/NCR where players end up being locked in a room. The objective is to accomplish the mission in 60 minutes by finding hidden clues, answering riddles and solving puzzles in rooms full of mystery. If you are an adventure game lover and looking for a thrilling place full of suspense and entertainment, then The Hidden Hour is a perfect place to visit.', '2017-05-31', '500'),
(5, 'all_image/adventure_image/Mission60.jpg', 'mission-60', 'delhi', 'Special Feature- Game room includes a Kid special gaming zone Mission60 makes you Feel Alive by offering Real Life Adventure Games. 2 to 4 players get locked up in a room and get a Mystery to solve. There is just one goal - Win the challenge in 60 minutes. Search for hidden clues, think and solve puzzles and wear the Sherlock hat to win. Once you find a lock, find the combination from the clue and unlock it. Good team work and cooperation is a must!', '2017-07-21', '300');

-- --------------------------------------------------------

--
-- Table structure for table `adv_booking_table`
--

CREATE TABLE `adv_booking_table` (
  `id` int(100) NOT NULL,
  `nameofevent` varchar(100) NOT NULL,
  `numberofperson` int(100) NOT NULL,
  `total` int(100) NOT NULL,
  `customer` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `adv_booking_table`
--

INSERT INTO `adv_booking_table` (`id`, `nameofevent`, `numberofperson`, `total`, `customer`) VALUES
(1, 'mission-60', 2, 600, 'raj'),
(2, 'hidden-hour', 3, 1500, 'raj');

-- --------------------------------------------------------

--
-- Table structure for table `adv_slider`
--

CREATE TABLE `adv_slider` (
  `id` int(100) NOT NULL,
  `image` varchar(2000) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `adv_slider`
--

INSERT INTO `adv_slider` (`id`, `image`) VALUES
(1, 'all_image/adv_slider/Adventure-Island-banner.jpg'),
(2, 'all_image/adv_slider/della-advanture_banner.jpg'),
(3, 'all_image/adv_slider/flight4fantasy_banner.jpg'),
(4, 'all_image/adv_slider/Mystery-Rooms_banner.jpg'),
(5, 'all_image/adv_slider/No-Escape_new.jpg'),
(6, 'all_image/adv_slider/Rishikesh_Air_Safari_banner.jpg'),
(7, 'all_image/adv_slider/Rishikesh_Air_Safari_banner.jpg');

-- --------------------------------------------------------

--
-- Table structure for table `booking_table`
--

CREATE TABLE `booking_table` (
  `id` int(100) NOT NULL,
  `username` varchar(100) NOT NULL,
  `budget` varchar(100) NOT NULL,
  `contact` varchar(100) NOT NULL,
  `date` varchar(100) NOT NULL,
  `event` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `celebrity_big_image`
--

CREATE TABLE `celebrity_big_image` (
  `id` int(100) NOT NULL,
  `nameofevent` varchar(100) NOT NULL,
  `image` varchar(5000) NOT NULL,
  `description` varchar(5000) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `celebrity_big_image`
--

INSERT INTO `celebrity_big_image` (`id`, `nameofevent`, `image`, `description`) VALUES
(2, 'ayat', 'all_image/celebrity_big_image/Aayat-The-Band-banner.jpg', 'Aayat, a multi-genre 6 member band, is one of the most versatile bands of Chandigarh. Their heart warming performances include genres like Sufi, Soft Rock, Bollywood, Fusion. Aayat has been performing in and around the city, reaching out to more and more fans through their music. A staple lounge-night favourites, Aayat ensures to keep everyone grooving to their musical master pieces till the nightâ€™s end.'),
(3, 'abishek-kumar', 'all_image/celebrity_big_image/Abhishek-Kumar-banner.jpg', 'Abhishek grew up in a musical family. He started singing on stage at the age of 13. His melodious voice has mesmerized masses and classesâ€™ .He won the All India Singing Competition held in Bangalore representing Karnataka, at The Times of India Youth Festival-2006.    He was amidst top 8 finalists in the very famous reality show Indian Idol Season 3 in the year 2007 and was given the Title "The Undisputed Don of Indian Idol". He also hosted the Mini City Auditions of Indian Idol Season 4. He has performed in more than 800 Shows'),
(4, 'wadali-bro', 'all_image/celebrity_big_image/Wadali-Brothers-banner.jpg', 'The Wadali Brothers, Puranchand Wadali and Pyarelal Wadali, are Sufi singers and musicians from Guru Ki Wadali in the Amritsar District in Punjab, India. Born into the fifth generation of musicians given to singing the messages of Sufi saints, the Wadali brothers dabbled in the most unexpected of professions before they became Sufi singers. While Puranchand Wadali, the elder brother, was a regular in an akhara "English: wrestling ring" for 25 years, Pyarelal contributed to the meager family income by playing the role of Krishna in the village rasleela.  Songs List:  Tu mane ya na mane Ni saiyon asi naina Aa mil yaa  Yaad piya ki Tere ishq Nachaya  Ve sone diyan kangna  bulleya ki jaan main kaun Ik tu hi tu hi Sone yaar Teri Dua  Tum idhar dekho lo'),
(5, 'milind-gaba', 'all_image/celebrity_big_image/Millind-Gaba-banner.jpg', 'Millind Gaba also known as Music MG, is a music director, singer, songwriter, rapper and actor from New Delhi. He is known for his work in Welcome Back (title track), Dilliwali Zaalim Girlfriend, Bas Tu by Roshan Prince, Aise Na Dekh, Bholeynath, Yaar Mod Do (featuring Guru Randhawa), and Main Tan V Pyar Karda by Happy Raikoti.  Song list :- Daaru Party  Bholeynath  Bewafa  Saddi Dilli  Malamaal'),
(6, 'ranjit-bawa', 'all_image/celebrity_big_image/Ranjit-Bawa-banner.jpg', 'Ranjit Singh Bajwa commonly known as Ranjit Bawa is an ace Panjabi Sikh singer. He was born in Wadala Granthian village near Gurdaspur. He rose to fame from his single "Jatt Di Akal" which broke many Punjabi records.    He made his debut in the 2015 Album, Mitti Da Bawa which won ''''Best World Album'''''''' award in the 2015. He also received "PTC Best Folk oriented Song Award" in 2013 for his Song in 2013, Jatt Di Akal.  Song List :- Sher marna  ja ve Mundya  mere Sardarniye  yaari Chandigarh Waliye  jean  Skoda  Dollar Vs Roti'),
(17, 'babbal-rai', 'all_image/celebrity_big_image/Babbal-Rai-banner.jpg', 'Babbal Rai has been a music lover & pursuer since his childhood where he has been a screen captivator at Doordarshan. Rai''s "Australian Challa" made him a youtube sensation. His music career took a flight when his first album Sau Putt which brought him into the limelight in the Punjabi music industry. In 2012 he released his single track "Sohni". It is reported that Rai feels that his claim to fame is to sing what he feels from his heart. Rai also sang his first playback song for Jimmy Shergill''s Punjabi film Rangeelay and this has been his only known playback track uptil now. His multi starrer project for 9X Tashan "Kudi Tu Pataka" was released the following year and was highly acclaimed by the audience. In 2014 Babbal released his second album Girlfriend under the label Speed Records in which the tracks like "Yaarian", "Tere layi", "Tuttian", "Jattan da Munda" were a huge success. The song Akh Teri was the most acclaimed track in the album. He released videos of four songs- Akh Teri, Jattan da munda, Yaarian and Tere layi- from his album "Girlfriend" which were huge hits.'),
(18, 'meet-bros', 'all_image/celebrity_big_image/Meet-Bros-banner.jpg', 'Meet Bros is a duo of music directors from Gwalior, India.The duo consists of Manmeet Singh and Harmeet Singh. They were formerly known as Meet Bros Anjjan with longtime collaborator Anjjan Bhattacharya. Initially starting out as actors, the duo switched to composing and singing after the success of their first song "Jogi Singh Barnala Singh". They began with composing for Isi Life Mein and Do Dooni Chaar but it was with Kyaa Super Kool Hain Hum and OMG - Oh My God! that they got their first recognition as music directors. Meet Bros'' most well-known and critically acclaimed songs are "Baby Doll" from Ragini MMS 2 and "Chittiyaan Kalaiyaan" from Roy. Both songs feature the vocals of Kanika Kapoor and the latter was part of a soundtrack that fetched them multiple awards including the Filmfare Award for Best Music Director, the Screen Award for Best Music Director, and the IIFA Award for Best Music Director.  ');

-- --------------------------------------------------------

--
-- Table structure for table `celebrity_image`
--

CREATE TABLE `celebrity_image` (
  `id` int(100) NOT NULL,
  `image` varchar(2000) NOT NULL,
  `nameofevent` varchar(200) NOT NULL,
  `location` varchar(1000) NOT NULL,
  `description` varchar(1000) NOT NULL,
  `date` date NOT NULL,
  `price` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `celebrity_image`
--

INSERT INTO `celebrity_image` (`id`, `image`, `nameofevent`, `location`, `description`, `date`, `price`) VALUES
(1, 'all_image/celebrity_image/Aayat-The-Band.jpg', 'ayat', '', 'Aayat, a multi-genre 6 member band, is one of the most versatile bands of Chandigarh. Their heart warming performances include genres like Sufi, Soft Rock, Bollywood, Fusion. Aayat has been performing in and around the city, reaching out to more and more fans through their music. A staple lounge-night favourites, Aayat ensures to keep everyone grooving to their musical master pieces till the night...', '0000-00-00', ''),
(2, 'all_image/celebrity_image/Abhishek-Kumar.jpg', 'abishek-kumar', '', 'Abhishek grew up in a musical family. He started singing on stage at the age of 13. His melodious voice has mesmerized masses and classes’ .He won the All India Singing Competition held in Bangalore representing Karnataka, at The Times of India Youth Festival-2006. He was amidst top 8 finalists in the very famous reality show Indian Idol Season 3 in the year 2007 and was given the Title "The U...', '0000-00-00', ''),
(3, 'all_image/celebrity_image/Babbal-Rai.jpg', 'babbal-rai', '', 'Babbal Rai has been a music lover & pursuer since his childhood where he has been a screen captivator at Doordarshan. Rai''s "Australian Challa" made him a youtube sensation. His music career took a flight when his first album Sau Putt which brought him into the limelight in the Punjabi music industry. In 2012 he released his single track "Sohni". It is reported that Rai feels that his claim to fam...', '0000-00-00', ''),
(4, 'all_image/celebrity_image/Wadali-Brothers.jpg', 'wadali-bro', '', 'The Wadali Brothers, Puranchand Wadali and Pyarelal Wadali, are Sufi singers and musicians from Guru Ki Wadali in the Amritsar District in Punjab, India. Born into the fifth generation of musicians given to singing the messages of Sufi saints, the Wadali brothers dabbled in the most unexpected of professions before they became Sufi singers. While Puranchand Wadali, the elder brother, was a regular...', '0000-00-00', ''),
(5, 'all_image/celebrity_image/Millind-Gaba.jpg', 'milind-gaba', '', 'Millind Gaba also known as Music MG, is a music director, singer, songwriter, rapper and actor from New Delhi. He is known for his work in Welcome Back (title track), Dilliwali Zaalim Girlfriend, Bas Tu by Roshan Prince, Aise Na Dekh, Bholeynath, Yaar Mod Do (featuring Guru Randhawa), and Main Tan V Pyar Karda by Happy Raikoti....', '0000-00-00', ''),
(6, 'all_image/celebrity_image/Ranjit-Bawa.jpg', 'ranjit-bawa', '', 'Ranjit Singh Bajwa commonly known as Ranjit Bawa is an ace Panjabi Sikh singer. He was born in Wadala Granthian village near Gurdaspur. He rose to fame from his single "Jatt Di Akal" which broke many Punjabi records. ...', '0000-00-00', ''),
(7, 'all_image/celebrity_image/Meet-Bros.jpg', 'meet-bros', '', 'Meet Bros is a duo of music directors from Gwalior, India.The duo consists of Manmeet Singh and Harmeet Singh. They were formerly known as Meet Bros Anjjan with longtime collaborator Anjjan Bhattacharya. Initially starting out as actors, the duo switched to composing and singing after the success of their first song "Jogi Singh Barnala Singh". They began with composing for Isi Life Mein and Do ...', '0000-00-00', '');

-- --------------------------------------------------------

--
-- Table structure for table `celeb_booking_table`
--

CREATE TABLE `celeb_booking_table` (
  `id` int(100) NOT NULL,
  `customer` varchar(100) NOT NULL,
  `singer` varchar(100) NOT NULL,
  `price` int(100) NOT NULL,
  `date` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `celeb_booking_table`
--

INSERT INTO `celeb_booking_table` (`id`, `customer`, `singer`, `price`, `date`) VALUES
(5, 'raj', 'ranjit-bawa', 20000, '2017-05-31');

-- --------------------------------------------------------

--
-- Table structure for table `celeb_slider`
--

CREATE TABLE `celeb_slider` (
  `id` int(100) NOT NULL,
  `image` varchar(2000) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `celeb_slider`
--

INSERT INTO `celeb_slider` (`id`, `image`) VALUES
(1, 'all_image/celeb_slider/Aamir-Ali-banner.jpg'),
(2, 'all_image/celeb_slider/Amrinder-Singh-banner.jpg'),
(5, 'all_image/celeb_slider/Harshdeep-Kaur-banner.jpg'),
(6, 'all_image/celeb_slider/Nooran-Sisters-banner.jpg'),
(7, 'all_image/celeb_slider/Nishawn-bhullar-banner.jpg');

-- --------------------------------------------------------

--
-- Table structure for table `event_booking_table`
--

CREATE TABLE `event_booking_table` (
  `id` int(100) NOT NULL,
  `customer` varchar(100) NOT NULL,
  `total` int(100) NOT NULL,
  `nameofevent` varchar(200) NOT NULL,
  `numberofperson` int(200) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `event_booking_table`
--

INSERT INTO `event_booking_table` (`id`, `customer`, `total`, `nameofevent`, `numberofperson`) VALUES
(1, 'raj', 20000, 'indywood-talent-hunt', 2),
(2, 'raj', 20000, 'indywood-talent-hunt', 2);

-- --------------------------------------------------------

--
-- Table structure for table `event_image`
--

CREATE TABLE `event_image` (
  `id` int(100) NOT NULL,
  `image` varchar(2000) NOT NULL,
  `nameofevent` varchar(200) NOT NULL,
  `location` varchar(1000) NOT NULL,
  `description` varchar(1000) NOT NULL,
  `date` date NOT NULL,
  `price` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `event_image`
--

INSERT INTO `event_image` (`id`, `image`, `nameofevent`, `location`, `description`, `date`, `price`) VALUES
(2, 'all_image/event_image/6th-Plastasia-2017.jpg', 'plastasia', '', '6th Plastasia-2017 exhibition in its sixth edition will showcase the latest technology and machineries used in manufacturing of plastics and petrochemicals with participation from different parts of the world. This event will be an excellent platform for exhibitors to publicise and display their products, innovation and services, build brand image and develop leadership in market position in the global areas. It will be an ideal stage for those who are interested to explore and acknowledge the most recent technologies and trends of the relevant market as well as exhibit a vast range of products and services related to the Plastic Industry.', '2017-07-27', '10000'),
(4, 'all_image/event_image/Delhi-Music-Festival.jpg', 'delhi music event', '', 'A Premium Music Festival in the heart of Delhi with a Nonstop 12-Hours Madness of Electronic Trance, Trap, rogressive, Dubstep Music Trip. So Prepare for a Magical Summer of Madness & Join the Crowd for Delhi''s First Electro Dedicated Fest', '2017-07-20', '10000'),
(5, 'all_image/event_image/Heal-Your-Life.jpg', 'heal-your-life', '', 'The power is within you. It always has been. How far are you willing to expand the horizons of your thinking and stir that power awake?', '2017-05-31', '10000'),
(6, 'all_image/event_image/Indywood-Talent-Hunt.jpg', 'indywood-talent-hunt', '', 'Indywood Talent Hunt one of the major highlights of the carnival to Indywood Talent Hunt one of the major highlights of Indywood Film Carnival . It also provides an opportunity to the budding talents to unfurl their inner capacities to greater heights and showcase their creations to the legendary movie makers at the event. Indywood Talent Hunt is a unique combination of entertainment, joy, competition, sportive spirit and learning which aid these young minds to test their talents and compete with others to find out their true potential.', '2017-07-12', '10000'),
(7, 'all_image/event_image/Ladakh-On-Wheels-2017.jpg', 'ladakh-on-wheel', '', 'Ladakh on Wheels is one of the biggest self drive car expeditions to Ladakh. Participants are invited to drive their respective cars in a convoy, led & controlled by Wanderers Adventure crew. The car convoy drives through extremely diverse terrains through the course of 13 exciting days, across 09 mighty passes & 5 tranquil lakes.', '2017-05-31', '10000'),
(8, 'all_image/event_image/Summer-Digital-Marketing.jpg', 'summer-digital-marketing', '', 'Based in Bangalore, the NIDM (National Institute of Digital Marketing Training in Bangalore) offers online and classroom Internet / Digital marketing courses to students from Bangalore and around the world. Earn your internet / Digital marketing certification through advanced specialized courses that can be studied online answered Offline at your own pace. We teach Internet / Digital marketing skills both Online and Classroom to individuals and companies in and around Bangalore.', '2017-07-12', '10000');

-- --------------------------------------------------------

--
-- Table structure for table `login_table`
--

CREATE TABLE `login_table` (
  `id` int(100) NOT NULL,
  `name` varchar(100) NOT NULL,
  `email` varchar(100) NOT NULL,
  `pass` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `login_table`
--

INSERT INTO `login_table` (`id`, `name`, `email`, `pass`) VALUES
(13, 'raj', 'r@gmail.com', '123'),
(14, 'raj', 'r@gmail.com', '123');

-- --------------------------------------------------------

--
-- Table structure for table `offer_image`
--

CREATE TABLE `offer_image` (
  `o_id` int(100) NOT NULL,
  `image` varchar(10000) NOT NULL,
  `nameofevent` varchar(100) NOT NULL,
  `location` varchar(1000) NOT NULL,
  `description` varchar(1000) NOT NULL,
  `date` date NOT NULL,
  `price` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `offer_image`
--

INSERT INTO `offer_image` (`o_id`, `image`, `nameofevent`, `location`, `description`, `date`, `price`) VALUES
(8, 'all_image/offer_image/bme_offer advtg.jpg', 'bume-offer', 'not-given', 'none', '2017-05-27', '1000'),
(9, 'all_image/offer_image/Mystery-Rooms_discount_offer_new.jpg', 'mystery-rooms', 'delhi', 'none', '2017-08-19', '1000'),
(10, 'all_image/offer_image/Special-Festive-Offer.jpg', 'festive-offer', 'mumbai', 'none', '0000-00-00', '1000'),
(12, 'all_image/offer_image/Summer-ko-banao-imagica-Banner.jpg', 'summer-ban', '', '', '0000-00-00', '1000'),
(13, 'all_image/offer_image/Wallet_Offer_Banner.jpg', 'wallet-offer', '', '', '0000-00-00', '1000');

-- --------------------------------------------------------

--
-- Table structure for table `party_slider`
--

CREATE TABLE `party_slider` (
  `id` int(100) NOT NULL,
  `image` varchar(2000) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `party_slider`
--

INSERT INTO `party_slider` (`id`, `image`) VALUES
(1, 'all_image/party_slider/Grand-Hometel-banner.jpg'),
(2, 'all_image/party_slider/Hotel-Swagath-banner.jpg'),
(3, 'all_image/party_slider/JK-Banquet-banner.jpg'),
(4, 'all_image/party_slider/Lords-Plaza--Jaipur-banner.jpg'),
(5, 'all_image/party_slider/Royalista-Banquet-banner.jpg'),
(6, 'all_image/party_slider/Shree-Nath-Marriage-Hall-Lucknow-banner.jpg');

-- --------------------------------------------------------

--
-- Table structure for table `slider_image`
--

CREATE TABLE `slider_image` (
  `s_id` int(100) NOT NULL,
  `image` varchar(10000) NOT NULL,
  `nameofevent` varchar(100) NOT NULL,
  `location` varchar(1000) NOT NULL,
  `description` varchar(1000) NOT NULL,
  `date` date NOT NULL,
  `price` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `slider_image`
--

INSERT INTO `slider_image` (`s_id`, `image`, `nameofevent`, `location`, `description`, `date`, `price`) VALUES
(7, 'all_image/slider_image/19th-Mathematics-Olympiad-Workshop-banner.jpg', 'math', '', '', '0000-00-00', ''),
(8, 'all_image/slider_image/Adventure-Island-banner.jpg', 'adventure', '', '', '0000-00-00', ''),
(9, 'all_image/slider_image/Indywood-Talent-Hunt-h-banner.jpg', 'indywood', '', '', '0000-00-00', ''),
(10, 'all_image/slider_image/Ladakh-On-Wheels-2017-banner.jpg', 'ladakh', '', '', '0000-00-00', ''),
(11, 'all_image/slider_image/Summer-ko-banao-imagica-Banner-new.jpg', 'summer_imagica', '', '', '0000-00-00', '');

-- --------------------------------------------------------

--
-- Table structure for table `venue_big_image`
--

CREATE TABLE `venue_big_image` (
  `id` int(100) NOT NULL,
  `nameofevent` varchar(1000) NOT NULL,
  `image` varchar(2000) NOT NULL,
  `description` varchar(5000) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `venue_big_image`
--

INSERT INTO `venue_big_image` (`id`, `nameofevent`, `image`, `description`) VALUES
(1, 'Atrio-Boutique-Hotel', 'all_image/venue_big_image/Atrio-Boutique-Hotel-banner.jpg', 'If youâ€™re looking forward to a banquet hall for social function/corporate event or even if it is your special occasion such as a wedding event, SYDNEY GRAND at Delhi offers just the right mix of event venues.  Whether you are looking for an outdoor setting or a more intimate indoor affair, Guests can count on us when it comes to organizing events, with a variety of venues on offer.   1. Crystal :  This banquet hall located in the center of the building is good enough to cater 400 to 800 guests at a time. Very high ceiling add to its charm and open up the horizons for new trials in decoration. An ideal banquet hall for theme based parties or in combination with other halls as well as it can be joined with other options available. Its interior includes mirror on all the sides of walls to give the effect of hugeness and 360 degree view  2. Opera :  It is the biggest hall available at SYDNEY GRAND and can cater up to 1000 persons at a time. The most appreciated quality of opera banquet hall is its amazing length without any pillar in between.it could be clubed together with crystal and queen halls as the perfect wedding venue for any kind of social functions. Its glamorous interior add to its beauty.   3. Queen :  This hall is in the front view of the building adjoining with the huge party lawn. Its beauty is in the elegant interior along with pure milky marble floor , big windows gives the picture effect of green lawn. It can also be joined with opera hall. It can cater up to 600 persons. An ideal Banquet hall for state of art convention, banquet events facilities'),
(2, 'mohan-vilas', 'all_image/venue_big_image/Hotel-Central-Blue-Stone-banner.jpg', 'If youâ€™re looking forward to a banquet hall for social function/corporate event or even if it is your special occasion such as a wedding event, SYDNEY GRAND at Delhi offers just the right mix of event venues.  Whether you are looking for an outdoor setting or a more intimate indoor affair, Guests can count on us when it comes to organizing events, with a variety of venues on offer.   1. Crystal :  This banquet hall located in the center of the building is good enough to cater 400 to 800 guests at a time. Very high ceiling add to its charm and open up the horizons for new trials in decoration. An ideal banquet hall for theme based parties or in combination with other halls as well as it can be joined with other options available. Its interior includes mirror on all the sides of walls to give the effect of hugeness and 360 degree view  2. Opera :  It is the biggest hall available at SYDNEY GRAND and can cater up to 1000 persons at a time. The most appreciated quality of opera banquet hall is its amazing length without any pillar in between.it could be clubed together with crystal and queen halls as the perfect wedding venue for any kind of social functions. Its glamorous interior add to its beauty.   3. Queen :  This hall is in the front view of the building adjoining with the huge party lawn. Its beauty is in the elegant interior along with pure milky marble floor , big windows gives the picture effect of green lawn. It can also be joined with opera hall. It can cater up to 600 persons. An ideal Banquet hall for state of art convention, banquet events facilities'),
(3, 'paradise-banquet', 'all_image/venue_big_image/Star-Banquets-banner.jpg', 'If youâ€™re looking forward to a banquet hall for social function/corporate event or even if it is your special occasion such as a wedding event, SYDNEY GRAND at Delhi offers just the right mix of event venues.  Whether you are looking for an outdoor setting or a more intimate indoor affair, Guests can count on us when it comes to organizing events, with a variety of venues on offer.   1. Crystal :  This banquet hall located in the center of the building is good enough to cater 400 to 800 guests at a time. Very high ceiling add to its charm and open up the horizons for new trials in decoration. An ideal banquet hall for theme based parties or in combination with other halls as well as it can be joined with other options available. Its interior includes mirror on all the sides of walls to give the effect of hugeness and 360 degree view  2. Opera :  It is the biggest hall available at SYDNEY GRAND and can cater up to 1000 persons at a time. The most appreciated quality of opera banquet hall is its amazing length without any pillar in between.it could be clubed together with crystal and queen halls as the perfect wedding venue for any kind of social functions. Its glamorous interior add to its beauty.   3. Queen :  This hall is in the front view of the building adjoining with the huge party lawn. Its beauty is in the elegant interior along with pure milky marble floor , big windows gives the picture effect of green lawn. It can also be joined with opera hall. It can cater up to 600 persons. An ideal Banquet hall for state of art convention, banquet events facilities'),
(4, 'karnation', 'all_image/venue_big_image/Sydney-Grand-farm-house-banner.jpg', '3. Queen :  This hall is in the front view of the building adjoining with the huge party lawn. Its beauty is in the elegant interior along with pure milky marble floor , big windows gives the picture effect of green lawn. It can also be joined with opera hall. It can cater up to 600 persons. An ideal Banquet hall for state of art convention, banquet events facilities  4. Victoria Lawn : Huge green lawn with amazing set turn this space into a fairy land set up for your special event. Beautiful light effects done over here add to its beauty .Blend of Enchanting surroundings and fascinating luxuries at one place can be its other name. Ideal to cater 1000 to 1500 persons.'),
(5, 'tivoli-grand', 'all_image/venue_big_image/The-Bristol-banner.jpg', '1. Crystal :  This banquet hall located in the center of the building is good enough to cater 400 to 800 guests at a time. Very high ceiling add to its charm and open up the horizons for new trials in decoration. An ideal banquet hall for theme based parties or in combination with other halls as well as it can be joined with other options available. Its interior includes mirror on all the sides of walls to give the effect of hugeness and 360 degree view  2. Opera :  It is the biggest hall available at SYDNEY GRAND and can cater up to 1000 persons at a time. The most appreciated quality of opera banquet hall is its amazing length without any pillar in between.it could be clubed together with crystal and queen halls as the perfect wedding venue for any kind of social functions. Its glamorous interior add to its beauty.  ');

-- --------------------------------------------------------

--
-- Table structure for table `venue_booking_table`
--

CREATE TABLE `venue_booking_table` (
  `id` int(100) NOT NULL,
  `nameofevent` varchar(100) NOT NULL,
  `numberofperson` int(100) NOT NULL,
  `date` date NOT NULL,
  `total` int(100) NOT NULL,
  `customer` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `venue_booking_table`
--

INSERT INTO `venue_booking_table` (`id`, `nameofevent`, `numberofperson`, `date`, `total`, `customer`) VALUES
(5, 'paradise-banquet', 2, '2017-06-15', 60000, 'raj'),
(14, 'tivoli-grand', 10, '2017-05-27', 50000, 'raj'),
(15, 'ayat', 0, '0000-00-00', 0, 'raj'),
(16, 'ranjit-bawa', 2, '0000-00-00', 600, 'raj'),
(17, 'ranjit-bawa', 2, '0000-00-00', 600, 'raj');

-- --------------------------------------------------------

--
-- Table structure for table `venue_image`
--

CREATE TABLE `venue_image` (
  `id` int(100) NOT NULL,
  `image` varchar(1000) NOT NULL,
  `nameofevent` varchar(2000) NOT NULL,
  `location` varchar(1000) NOT NULL,
  `description` varchar(5000) NOT NULL,
  `date` date NOT NULL,
  `price` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `venue_image`
--

INSERT INTO `venue_image` (`id`, `image`, `nameofevent`, `location`, `description`, `date`, `price`) VALUES
(7, 'all_image/venue_image/Atrio-Boutique-Hotel.jpg', 'Atrio-Boutique-Hotel', 'delhi', '1. Crystal :  This banquet hall located in the center of the building is good enough to cater 400 to 800 guests at a time. Very high ceiling add to its charm and open up the horizons for new trials in decoration. An ideal banquet hall for theme based parties or in combination with other halls as well as it can be joined with other options available. Its interior includes mirror on all the sides of walls to give the effect of hugeness and 360 degree view  2. Opera :  It is the biggest hall available at SYDNEY GRAND and can cater up to 1000 persons at a time. The most appreciated quality of opera banquet hall is its amazing length without any pillar in between.it could be clubed together with crystal and queen halls as the perfect wedding venue for any kind of social functions. Its glamorous interior add to its beauty.  ', '2017-05-26', '10000'),
(8, 'all_image/venue_image/Atrio-Boutique-Hotel.jpg', 'Atrio-Boutique-Hotel', ' Delhi', '', '2017-05-31', '20000'),
(9, 'all_image/venue_image/Mohan-Vilass.jpg', 'mohan-vilas', 'delhi', '4. Victoria Lawn : Huge green lawn with amazing set turn this space into a fairy land set up for your special event. Beautiful light effects done over here add to its beauty .Blend of Enchanting surroundings and fascinating luxuries at one place can be its other name. Ideal to cater 1000 to 1500 persons.  5. King Cross : A party lawn adjoining opera hall is an ideal lawn to cater 800 persons. Its plus point is in its being the most secluded spot at SYDNEY GRAND with lush green surroundings with a touch of fresh farm breeze on all the sides. An ideal lawn to celebrate your dreams turns into reality.', '2018-01-27', '50000'),
(10, 'all_image/venue_image/Paradise-Banquet.jpg', 'paradise-banquet', 'delhi', '4. Victoria Lawn : Huge green lawn with amazing set turn this space into a fairy land set up for your special event. Beautiful light effects done over here add to its beauty .Blend of Enchanting surroundings and fascinating luxuries at one place can be its other name. Ideal to cater 1000 to 1500 persons.  5. King Cross : A party lawn adjoining opera hall is an ideal lawn to cater 800 persons. Its plus point is in its being the most secluded spot at SYDNEY GRAND with lush green surroundings with a touch of fresh farm breeze on all the sides. An ideal lawn to celebrate your dreams turns into reality.', '2017-05-26', '30000'),
(11, 'all_image/venue_image/Tivoli-Grand-Resort-Hotel.jpg', 'tivoli-grand', 'delhi', '4. Victoria Lawn : Huge green lawn with amazing set turn this space into a fairy land set up for your special event. Beautiful light effects done over here add to its beauty .Blend of Enchanting surroundings and fascinating luxuries at one place can be its other name. Ideal to cater 1000 to 1500 persons.  5. King Cross : A party lawn adjoining opera hall is an ideal lawn to cater 800 persons. Its plus point is in its being the most secluded spot at SYDNEY GRAND with lush green surroundings with a touch of fresh farm breeze on all the sides. An ideal lawn to celebrate your dreams turns into reality.', '2017-05-31', '5000'),
(13, 'all_image/venue_image/Karnation.jpg', 'karnation', 'delhi', '', '0000-00-00', '1000');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `adventure_image`
--
ALTER TABLE `adventure_image`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `adv_booking_table`
--
ALTER TABLE `adv_booking_table`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `adv_slider`
--
ALTER TABLE `adv_slider`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `booking_table`
--
ALTER TABLE `booking_table`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `celebrity_big_image`
--
ALTER TABLE `celebrity_big_image`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `celebrity_image`
--
ALTER TABLE `celebrity_image`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `celeb_booking_table`
--
ALTER TABLE `celeb_booking_table`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `celeb_slider`
--
ALTER TABLE `celeb_slider`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `event_booking_table`
--
ALTER TABLE `event_booking_table`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `event_image`
--
ALTER TABLE `event_image`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `login_table`
--
ALTER TABLE `login_table`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `offer_image`
--
ALTER TABLE `offer_image`
  ADD PRIMARY KEY (`o_id`);

--
-- Indexes for table `party_slider`
--
ALTER TABLE `party_slider`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `slider_image`
--
ALTER TABLE `slider_image`
  ADD PRIMARY KEY (`s_id`);

--
-- Indexes for table `venue_big_image`
--
ALTER TABLE `venue_big_image`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `venue_booking_table`
--
ALTER TABLE `venue_booking_table`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `venue_image`
--
ALTER TABLE `venue_image`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `adventure_image`
--
ALTER TABLE `adventure_image`
  MODIFY `id` int(100) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;
--
-- AUTO_INCREMENT for table `adv_booking_table`
--
ALTER TABLE `adv_booking_table`
  MODIFY `id` int(100) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=12;
--
-- AUTO_INCREMENT for table `adv_slider`
--
ALTER TABLE `adv_slider`
  MODIFY `id` int(100) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;
--
-- AUTO_INCREMENT for table `booking_table`
--
ALTER TABLE `booking_table`
  MODIFY `id` int(100) NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT for table `celebrity_big_image`
--
ALTER TABLE `celebrity_big_image`
  MODIFY `id` int(100) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=19;
--
-- AUTO_INCREMENT for table `celebrity_image`
--
ALTER TABLE `celebrity_image`
  MODIFY `id` int(100) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;
--
-- AUTO_INCREMENT for table `celeb_booking_table`
--
ALTER TABLE `celeb_booking_table`
  MODIFY `id` int(100) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;
--
-- AUTO_INCREMENT for table `celeb_slider`
--
ALTER TABLE `celeb_slider`
  MODIFY `id` int(100) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;
--
-- AUTO_INCREMENT for table `event_booking_table`
--
ALTER TABLE `event_booking_table`
  MODIFY `id` int(100) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;
--
-- AUTO_INCREMENT for table `event_image`
--
ALTER TABLE `event_image`
  MODIFY `id` int(100) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;
--
-- AUTO_INCREMENT for table `login_table`
--
ALTER TABLE `login_table`
  MODIFY `id` int(100) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=15;
--
-- AUTO_INCREMENT for table `offer_image`
--
ALTER TABLE `offer_image`
  MODIFY `o_id` int(100) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=14;
--
-- AUTO_INCREMENT for table `party_slider`
--
ALTER TABLE `party_slider`
  MODIFY `id` int(100) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;
--
-- AUTO_INCREMENT for table `slider_image`
--
ALTER TABLE `slider_image`
  MODIFY `s_id` int(100) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;
--
-- AUTO_INCREMENT for table `venue_big_image`
--
ALTER TABLE `venue_big_image`
  MODIFY `id` int(100) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;
--
-- AUTO_INCREMENT for table `venue_booking_table`
--
ALTER TABLE `venue_booking_table`
  MODIFY `id` int(100) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=18;
--
-- AUTO_INCREMENT for table `venue_image`
--
ALTER TABLE `venue_image`
  MODIFY `id` int(100) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=14;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
