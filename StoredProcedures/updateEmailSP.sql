CREATE DEFINER=`root`@`localhost` PROCEDURE `updateEmail`(userEmail varchar(50), userId int)
BEGIN
UPDATE Demo.users SET email = userEmail where id = userId;
END