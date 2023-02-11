CREATE TABLE Cart (
    cartId VARCHAR NOT NULL,
    productId VARCHAR(100) NOT NULL,
    userId VARCHAR(100)NOT NULL,
    PRIMARY KEY (cartId),
    FOREIGN KEY (productId) REFERENCES Products(productId),
	FOREIGN KEY (userId) REFERENCES Users(userId)
);