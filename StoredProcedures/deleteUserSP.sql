CREATE DEFINER=`root`@`localhost` PROCEDURE `deleteUser`(userId int)
BEGIN
DELETE FROM Demo.users WHERE id = userId;
END