-- Write your PostgreSQL query statement below
SELECT 
    r.contest_id,
    ROUND(COUNT(u.user_id) / (SELECT COUNT(*) FROM Users)::numeric * 100, 2) AS percentage
FROM Users u
RIGHT JOIN Register r
ON u.user_id = r.user_id
GROUP BY r.contest_id
ORDER BY percentage DESC, r.contest_id