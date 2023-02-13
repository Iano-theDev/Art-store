CREATE PROCEDURE getsingleproduct @id VARCHAR(100)
AS
BEGIN 

SELECT * FROM Products WHERE productId=@id

END