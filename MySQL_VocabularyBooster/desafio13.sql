SELECT
ProductName AS `Produto`,
Price AS 'Preço'
FROM w3schools.products AS p
INNER JOIN w3schools.order_details AS o
ON o.ProductID = p.ProductID
AND o.Quantity > 80
ORDER BY `Produto`;
