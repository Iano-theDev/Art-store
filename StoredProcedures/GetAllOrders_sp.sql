CREATE PROCEDURE GetAllOrders (@OrderID VARCHAR(100) = NULL, @ProductID  VARCHAR(100) = NULL, @UserID  VARCHAR(100) = NULL)
AS
BEGIN
    SELECT orderId,  productId,  userId
    FROM Orders
    WHERE (@OrderID IS NULL OR orderId = @OrderID)
    AND (@ProductID IS NULL OR productId = @ProductID)
    AND (@UserID IS NULL OR userId = @UserID)
END
