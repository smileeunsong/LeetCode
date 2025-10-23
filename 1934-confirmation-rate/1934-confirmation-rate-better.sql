-- Write your PostgreSQL query statement below
SELECT 
    user_id,
    ROUND(
        CASE
            WHEN total = 0 THEN 0.00
            ELSE confirmed::numeric / total
        END,
        2
    ) AS confirmation_rate
FROM (
    SELECT
        s.user_id,
        COUNT(c.user_id) AS total,
        SUM(CASE WHEN c.action = 'confirmed' THEN 1 ELSE 0 END) AS confirmed
    FROM Signups s
    LEFT JOIN Confirmations c ON s.user_id = c.user_id
    GROUP BY s.user_id
) t;
