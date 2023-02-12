CREATE PROCEDURE deleteproductsbyid @id VARCHAR(100)
AS
BEGIN 

DELETE  FROM Products WHERE productId=@id

END