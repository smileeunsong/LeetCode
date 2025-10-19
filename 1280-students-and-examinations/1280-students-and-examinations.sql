-- Write your PostgreSQL query statement below
SELECT c.student_id, c.student_name, c.subject_name, count(e.student_id) AS attended_exams
FROM 
    (Students CROSS JOIN Subjects) c
LEFT JOIN 
    Examinations e
ON e.student_id = c.student_id AND e.subject_name = c.subject_name
GROUP BY c.student_id, c.student_name, c.subject_name
ORDER BY c.student_id, c.subject_name