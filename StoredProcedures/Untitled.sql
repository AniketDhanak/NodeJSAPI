CREATE DEFINER=`root`@`localhost` PROCEDURE `getOTP`(otp varchar(4), userId int, token varchar(250))
BEGIN
INSERT INTO Demo.otp_master (otp, fk_userid, token) VALUES (otp, userID, token);
END