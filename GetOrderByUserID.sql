CREATE PROCEDURE GetOrdersByUserID (@UserID INT)
AS
BEGIN
    SELECT OrderID, ProductID, UserID
    FROM Orders
    WHERE UserID = @UserID
END
