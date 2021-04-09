SELECT submitted_date FROM northwind.purchase_orders
WHERE (SELECT DATE(submitted_date) LIKE '%2006-04-26%');
