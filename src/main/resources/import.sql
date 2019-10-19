INSERT INTO Auditorium(id, movieTitle, dateOfScreening, screeningAt) VALUES(1, 'Lion King', CURRENT_TIMESTAMP(), CURRENT_TIMESTAMP());
INSERT INTO Auditorium(id, movieTitle, dateOfScreening, screeningAt) VALUES(2, 'Lion King 2', CURRENT_TIMESTAMP(), CURRENT_TIMESTAMP());
insert into Movie (title, description, place, created_at, updated_at) values ('Lion King', 'It is a very good movie', false, 110);
insert into Movie (title, description, place, created_at, updated_at) values ('Lion King 2', 'It is even a better movie', true, 123);
insert into Movie (title, description, place, created_at, updated_at) values ('Unknown Movie', 'This movie is not being aired', false, 0);
insert into Screening (auditoriumID, titleOfMovie, dateOfScreening, timeOfScreening) values (1, 'Lion King', CURRENT_TIMESTAMP(),  CURRENT_TIMESTAMP());
insert into Screening (auditoriumID, titleOfMovie, dateOfScreening, timeOfScreening) values (2,'Lion King', CURRENT_TIMESTAMP(),  CURRENT_TIMESTAMP());
insert into Screening (auditoriumID, titleOfMovie, dateOfScreening, timeOfScreening) values (3,'Lion King 2', CURRENT_TIMESTAMP(),  CURRENT_TIMESTAMP());