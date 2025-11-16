-- Write your PostgreSQL query statement below
WITH first_orders AS (
    SELECT DISTINCT ON (customer_id)
        customer_id,
        order_date,
        customer_pref_delivery_date
    FROM Delivery
    ORDER BY customer_id, order_date
)
SELECT
    ROUND(
        100.0 * SUM(CASE WHEN order_date = customer_pref_delivery_date THEN 1 ELSE 0 END) / COUNT(*),
        2
    ) AS immediate_percentage
FROM first_orders;