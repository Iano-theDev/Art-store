CREATE OR ALTER PROCEDURE get_all_cart_items (@CartId VARCHAR(100), @ProductId VARCHAR(100), @UserId VARCHAR(100))
AS
BEGIN
    SELECT * FROM Cart
    WHERE cartId = @cartId AND productId = @productId AND userId = @UserId;
END;

EXEC   get_all_cart_items @CartId= 'CART001', @ProductId='P001', @UserId='U001';