# Database Queries

### Display the ProductName and CategoryName for all products in the database. Shows 76 records.

> SELECT Products.ProductName as Product, Categories.CategoryName as Category
> FROM [Products]
> INNER JOIN [Categories] ON Products.CategoryId = Categories.CategoryId;

### Display the OrderID and ShipperName for all orders placed before January 9, 1997. Shows 161 records.

> SELECT Orders.OrderId as [Order], Shippers.ShipperName as Shipper
> FROM [Orders]
> INNER JOIN Shippers ON Orders.ShipperId = Shippers.ShipperId
> WHERE Orders.OrderDate < '1997-01-09';

### Display all ProductNames and Quantities placed on order 10251. Sort by ProductName. Shows 3 records.

> SELECT Products.ProductName as [Product], OrderDetails.Quantity
> FROM [Products]
> INNER JOIN OrderDetails ON Products.ProductId = OrderDetails.ProductId
> WHERE OrderDetails.OrderId IS 10251
> ORDER BY Product ASC;

### Display the OrderID, CustomerName and the employee's LastName for every order. All columns should be labeled clearly. Displays 196 records.

> SELECT Orders.OrderId as [Order], Customers.CustomerName as [Customer], Employees.LastName as [Employee]
> FROM [Orders]
> INNER JOIN Customers ON Orders.CustomerId = Customers.CustomerId
> INNER JOIN Employees ON Orders.EmployeeId = Employees.EmployeeId;

### (Stretch) Displays CategoryName and a new column called Count that shows how many products are in each category. Shows 9 records.

> SELECT Categories.CategoryName, COUNT(Products.CategoryId) AS [Count]
> FROM [Products]
> INNER JOIN [Categories]
> ON Products.CategoryId = Categories.CategoryId
> GROUP BY Categories.CategoryName;

### (Stretch) Display OrderID and a column called ItemCount that shows the total number of products placed on the order. Shows 196 records.

> SELECT OrderID, SUM(Quantity) as [ItemCount]
> FROM [OrderDetails]
> GROUP BY OrderID;
