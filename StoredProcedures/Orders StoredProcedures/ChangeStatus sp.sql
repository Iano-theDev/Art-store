CREATE OR ALTER PROCEDURE ChangeOrderStatus (@OrderID VARCHAR(100), @Status VARCHAR(100))
AS
BEGIN
    UPDATE Orders
    SET OrderStatus = @Status
    WHERE orderId = @OrderID 

END

EXEC  ChangeOrderStatus @OrderID = 2, @Status = 'In-transit';

