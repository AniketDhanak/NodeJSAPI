CREATE DEFINER=`root`@`localhost` PROCEDURE `getUserDetailById`(userId int)
BEGIN
select users.id as UserId, users.name as UserName, users.email as Email from Demo.users where id = userId;
END