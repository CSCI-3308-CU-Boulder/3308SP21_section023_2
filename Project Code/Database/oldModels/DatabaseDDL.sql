CREATE TABLE `users` (
  `UserID` int PRIMARY KEY AUTO_INCREMENT,
  `fullName` varchar(255),
  `UserName` varchar(255),
  `password` varchar(255),
  `birthDate` BirthDate,
  `gender` varchar(255),
  `bio` longtext,
  `location` varchar(255),
  `seeking` varchar(255),
  `minAge` int,
  `maxAge` int,
  `rent` int
);

CREATE TABLE `photos` (
  `photoID` int PRIMARY KEY AUTO_INCREMENT,
  `userID` int,
  `link` text
);

CREATE TABLE `users_message` (
  `UserID` int,
  `messageID` int
);

CREATE TABLE `message` (
  `messageID` int PRIMARY KEY AUTO_INCREMENT,
  `from` int,
  `to` int,
  `sendtime` datetime,
  `actualMessage` text,
  `matchID` int
);

CREATE TABLE `match` (
  `matchID` int PRIMARY KEY AUTO_INCREMENT,
  `first_user_Id` int,
  `second_user_Id` int
);

ALTER TABLE `users_message` ADD FOREIGN KEY (`UserID`) REFERENCES `users` (`UserID`);

ALTER TABLE `users_message` ADD FOREIGN KEY (`messageID`) REFERENCES `message` (`messageID`);

ALTER TABLE `match` ADD FOREIGN KEY (`matchID`) REFERENCES `message` (`matchID`);

ALTER TABLE `match` ADD FOREIGN KEY (`first_user_Id`) REFERENCES `users` (`UserID`);

ALTER TABLE `match` ADD FOREIGN KEY (`second_user_Id`) REFERENCES `users` (`UserID`);

ALTER TABLE `photos` ADD FOREIGN KEY (`photoID`) REFERENCES `users` (`UserID`);

ALTER TABLE `users` ADD FOREIGN KEY (`UserID`) REFERENCES `message` (`messageID`);

ALTER TABLE `message` ADD FOREIGN KEY (`messageID`) REFERENCES `match` (`matchID`);
