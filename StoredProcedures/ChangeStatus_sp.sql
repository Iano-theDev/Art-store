CREATE PROCEDURE GetOrdersByUserID (@UserID VARCHAR(100))
AS
BEGIN
    SELECT orderId,  productId,  userId
    FROM Orders
    WHERE  userId = @UserID
END
