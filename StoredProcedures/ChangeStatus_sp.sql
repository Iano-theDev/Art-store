CREATE PROCEDURE ChangeOrderStatus (@OrderID INT, @Status VARCHAR(20))
AS
BEGIN
    UPDATE Orders
    SET OrderStatus = @Status
    WHERE OrderID = @OrderID
END
