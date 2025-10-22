-- Write your PostgreSQL query statement below
-- SELECT count(1)
-- FROM Employee e1
-- WHERE managerId IS NOT NULL
-- GROUP BY managerId

SELECT a.name
FROM (
    SELECT e1.name, count(e1.id)
    FROM Employee e1
    JOIN Employee e2
    ON e1.id = e2.managerId
    GROUP BY e1.id, e1.name
) a
WHERE a.count >= 5