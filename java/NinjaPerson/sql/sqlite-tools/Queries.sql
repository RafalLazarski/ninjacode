CREATE TABLE Courses (
    Course_ID INT PRIMARY KEY,
    Course_Name VARCHAR(255)
);

CREATE TABLE Students (
    Student_ID INT PRIMARY KEY,
    First_Name VARCHAR(255),
    Last_Name VARCHAR(255)
);

CREATE TABLE CourseStudent (
    CourseStudent_ID INT PRIMARY KEY,
    Course_ID INT,
    Student_ID INT,
    FOREIGN KEY (Course_ID) REFERENCES Courses(Course_ID),
    FOREIGN KEY (Student_ID) REFERENCES Students(Student_ID)
);

INSERT INTO Courses (Course_ID, Course_Name)
VALUES
    (1, 'Biology'),
    (2, 'History'),
    (3, 'Math');

INSERT INTO Students (Student_ID, First_Name, Last_Name)
VALUES
    (1, 'John', 'Doe'),
    (2, 'John', 'Smith'),
    (3, 'Maria', 'Gonzalez'),
    (4, 'Jan', 'Kowalski');

INSERT INTO CourseStudent (CourseStudent_ID, Course_ID, Student_ID)
VALUES
    (1, 1, 1),
    (2, 1, 2),
    (3, 2, 2),
    (4, 2, 3),
    (5, 3, 4),
    (6, 1, 4);


SELECT Students.*
FROM Students
INNER JOIN CourseStudent ON Students.Student_ID = CourseStudent.Student_ID
INNER JOIN Courses ON CourseStudent.Course_ID = Courses.Course_ID
WHERE Courses.Course_Name = 'Biology';

SELECT Courses.*
FROM Courses
INNER JOIN CourseStudent ON Courses.Course_ID = CourseStudent.Course_ID
INNER JOIN Students ON CourseStudent.Student_ID = Students.Student_ID
WHERE Students.First_Name = 'Jan';


SELECT Students.Student_ID, Students.First_Name, Students.Last_Name
FROM Students
INNER JOIN (
    SELECT Student_ID
    FROM CourseStudent
    GROUP BY Student_ID
    HAVING COUNT(*) > 1
) AS MultipleCourses ON Students.Student_ID = MultipleCourses.Student_ID;