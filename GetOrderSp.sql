CREATE PROCEDURE GetAllOrders (@OrderID VARCHAR(100) = NULL, @ProductID  VARCHAR(100) = NULL, @UserID  VARCHAR(100) = NULL)
AS
BEGIN
    SELECT order_id, product_id, user_id
    FROM Orders
    WHERE (@order_id IS NULL OR order_id = @OrderID)
    AND (@product_id IS NULL OR product_id = @ProductID)
    AND (@user_id IS NULL OR user_id = @UserID)
END
