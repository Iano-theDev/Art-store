CREATE OR ALTER PROCEDURE remove_single_cart_items (@CartId VARCHAR(100), @ProductId VARCHAR(100), @UserId VARCHAR(100))
AS
BEGIN
    DELETE FROM Cart
    WHERE cartId = @CartId AND productId = @ProductId AND userId = @UserId;
END;

EXEC remove_single_cart_items @CartId='CART001', @ProductId='P002',@UserId='U002'

