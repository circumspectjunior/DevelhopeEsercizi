--Display female passengers who survived and are older than 30.
--Find the average age of men who didn't survive.
--Display information for passengers who spent between $20 and $50 on their tickets and got on the ship at port 'C'."
--Find the total number of the survivors in the first class.
--Show the information of passengers who boarded from Cherbourg (port 'C') and spent more than $75 on their tickets.".

--SELECT * FROM tested;
--SELECT * FROM tested WHERE c5='female' AND c2 = 1 AND c6 > 30;
--SELECT ROUND(AVG(c6), 0) AS 'eta-media' FROM tested WHERE c5='male' AND c2 = 0;
--SELECT * FROM tested WHERE c12 = 'C' AND c10 > 20 AND c10 < 50;
--SELECT COUNT() As 'first-calss-survivors' FROM tested WHERE c2 = 1 AND c3 = 1;
--SELECT FROM tested WHERE c12 = 'C' AND c10 > 75;

--1
SELECT * FROM tested WHERE Sex = 'female' AND Survived = 1 AND Age > 30;

--2
SELECT AVG(Age) AS average_age FROM tested WHERE Sex = 'male' AND Survived = 0;

--3
SELECT * FROM tested WHERE Fare BETWEEN 20 AND 50 AND Embarked = 'C';

--4
SELECT COUNT(*) AS total_survivors FROM tested WHERE Pclass = 1 AND Survived = 1;

--5
SELECT * FROM tested WHERE Embarked = 'C' AND Fare > 75;