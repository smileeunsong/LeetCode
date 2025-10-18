-- Write your PostgreSQL query statement below
SELECT customer_id, count(*) AS count_no_trans
FROM Visits v
LEFT OUTER JOIN Transactions t
ON v.visit_id = t.visit_id
WHERE t.transaction_id IS NULL
GROUP BY customer_id