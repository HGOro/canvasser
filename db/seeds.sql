SELECT * FROM canvasser_db.Users;

INSERT into Users (firstName, lastName, age, gender, email, address, city, state, zip)
VALUES 
("Night", "King", "99", "1", "nightking99@got.com", "1995 University Ave.", "Berkeley", "CA", "94704"),
("Jon", "Snow", "25", "1", "jonsnow25@got.com", "2495 Bancroft Way", "Berkeley", "CA", "94720"),
("Jaime", "Lannister", "42", "1", "jaime42@got.com", "1550 Shattuck Ave.", "Berkeley", "CA", "94709"),
("Rob", "Stark", "32", "1", "robstark32@got.com", "1853 Solano Ave.", "Berkeley", "CA", "94707"),
("Sansa", "Stark", "17", "2", "sansa17@got.com", "1294 Albina Ave.", "Albany", "CA", "94706")


SELECT * FROM canvasser_db.Surveys;

INSERT into Surveys (userID, party, demNominee, prop)
VALUES
("1", "2", "Bernie Sanders", "1"),
("2", "3", "Kamala Harris", "2"),
("3", "4", "Kamala Harris","3"),
("4", "3", "Kamala Harris", "2"),
("5", "3", "Kamala Harris", "2")