-- Write your PostgreSQL query statement below
SELECT s.user_id, 
    CASE
        WHEN COALESCE(t.count_total, 0) = 0 THEN 0.00
        ELSE ROUND(COALESCE(c.count_confirmed, 0)::numeric / t.count_total::numeric, 2)
    END AS confirmation_rate
FROM Signups s
LEFT JOIN (
    SELECT user_id, count(*) AS count_total
    FROM Confirmations
    GROUP BY user_id
) t ON s.user_id = t.user_id
LEFT JOIN (
    SELECT user_id, count(*) AS count_confirmed
    FROM Confirmations
    WHERE action = 'confirmed'
    GROUP BY user_id
) c ON t.user_id = c.user_id
