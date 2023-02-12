CREATE PROCEDURE spAddOrUpdateProduct (
    @id VARCHAR(100), @name VARCHAR(100)=NULL , @description VARCHAR(100) , @category VARCHAR(150), @price VARCHAR(100), @imageUrl VARCHAR(255))
AS
BEGIN


IF EXISTS(SELECT * FROM Products WHERE productId =@id)
BEGIN
UPDATE productId SET Name=@name, Description=@description , Category=@category , Price= @price, ImageUrl =@imageUrl
WHERE productId=@id
END

ELSE
BEGIN
INSERT INTO Products (productsId, Name, Description, Category, Price, ImageUrl)
VALUES( @id, @name, @description, @category, @price, @imageUrl)
END
END