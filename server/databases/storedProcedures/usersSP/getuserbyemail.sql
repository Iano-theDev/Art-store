CREATE PROCEDURE getuserbyemail(@email VARCHAR(300))
AS
BEGIN

	SELECT * FROM Users WHERE Email = @email
END