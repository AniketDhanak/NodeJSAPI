CREATE DEFINER=`root`@`localhost` PROCEDURE `getUserByName`(uName varchar(20))
BEGIN
select users.id as UserId, users.name as UserName, users.email as Email from Demo.users where name LIKE uName ;
END