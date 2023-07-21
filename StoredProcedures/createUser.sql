CREATE DEFINER=`root`@`localhost` PROCEDURE `createUser`(userName varchar(20), userEmail varchar(50))
BEGIN
INSERT INTO Demo.users(name, email) VALUES(userName,userEmail);
END