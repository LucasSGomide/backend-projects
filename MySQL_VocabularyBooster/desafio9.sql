SELECT
CONCAT(FirstName, ' ', LastName) AS `Nome completo`,
COUNT(*) AS `Total de pedidos`
FROM w3schools.employees AS e
INNER JOIN w3schools.orders AS o
ON o.EmployeeID = e.EmployeeID
GROUP BY o.EmployeeID
HAVING `Total de pedidos` > 1
ORDER BY `Total de pedidos`;
