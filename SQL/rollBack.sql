BEGIN; 
DELETE FROM Books WHERE book_id = 2; 
-- Verify the deletion if needed 
SELECT * FROM Books WHERE book_id = 2; ROLLBACK; 
-- Verify the rollback if needed 
SELECT * FROM Books WHERE book_id = 2;