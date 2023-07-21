CREATE DEFINER=`root`@`localhost` PROCEDURE `getAllUsers`()
BEGIN
select users.id as UserId, users.name as UserName, users.email as Email from Demo.users ORDER BY created_at desc;
END