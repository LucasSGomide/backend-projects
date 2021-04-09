SELECT 
ProductName AS Produto,
MIN(Quantity) AS Mínima,
MAX(Quantity) AS Máxima,
ROUND(AVG(Quantity), 2) AS Média
FROM w3schools.products AS p
INNER JOIN w3schools.order_details AS o
ON p.ProductID = o.ProductID
GROUP BY ProductName
HAVING Média > 20
ORDER BY Média, ProductName;
