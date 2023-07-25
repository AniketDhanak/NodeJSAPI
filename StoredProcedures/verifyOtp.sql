CREATE DEFINER=`root`@`localhost` PROCEDURE `verifyOtp`(userEmail varchar(50))
BEGIN
select Demo.users.name, Demo.users.email, Demo.otp_master.token, Demo.otp_master.otp from Demo.otp_master
inner join Demo.users
on Demo.otp_master.fk_userid = Demo.users.id where Demo.users.email = userEmail ORDER BY create_at desc;
END