CREATE PROCEDURE InsertOrUpdate (
    @id VARCHAR(100), 
	@name VARCHAR(150)=NULL , 
	@description VARCHAR(500)=NULL, 
	@category VARCHAR(150)=NULL,
	@price VARCHAR(100)=NULL )
AS
BEGIN

IF EXISTS(SELECT * FROM Products WHERE productId =@id)

BEGIN
UPDATE Products  SET Name=@name, Description=@description,Category=@category, Price=@price
WHERE productId=@id
END

ELSE
BEGIN
INSERT INTO Products (productId, Name, Description, Category, Price)
VALUES( @id, @name, @description,@category, @price) 
END
END