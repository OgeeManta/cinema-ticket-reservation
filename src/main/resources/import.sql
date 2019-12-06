insert into user (username, password, enabled, role) values ('admin', '$2a$04$YDiv9c./ytEGZQopFfExoOgGlJL6/o0er0K.hiGb5TGKHUL8Ebn..', true, 'ROLE_ADMIN');
insert into user (username, password, enabled, role) values ('user', '$2a$04$YDiv9c./ytEGZQopFfExoOgGlJL6/o0er0K.hiGb5TGKHUL8Ebn..', true, 'ROLE_USER');

insert into Auditorium (auditoriumname, seats) values ('North', 30);
insert into Auditorium (auditoriumname, seats) values ('South', 20);

insert into Category (text) values ('Comedy');
insert into Category (text) values ('Horror');
insert into Category (text) values ('Action');
insert into Category (text) values ('Thriller');
insert into Category (text) values ('Romantic');
insert into Category (text) values ('Drama');
insert into Category (text) values ('Family');
insert into Category (text) values ('Adventure');
insert into Category (text) values ('Sci-fi');


insert into Movie (image, trailer, title, description, runtime) values ('assets/lionKing.jpg', 'lFzVJEksoDY','Lion King', 'A Lion cub crown prince is tricked by a treacherous uncle into thinking he caused his father''s death and flees into exile in despair, only to learn in adulthood his identity and his responsibilities.', 110);
insert into Movie (image, trailer, title, description, runtime) values ('assets/lionKing2.jpg', '-m6eDrDUVU0','Lion King 2', 'Simba''s daughter is the key to a resolution of a bitter feud between Simba''s pride and the outcast pride led by the mate of Scar.', 81);
insert into Movie (image, trailer, title, description, runtime) values ('assets/holyGrail.jpg', 'urRkGvhXc8w','Monty Python and the Holy Grail', 'King Arthur and his Knights of the Round Table embark on a surreal, low-budget search for the Holy Grail, encountering many, very silly obstacles.', 91);

insert into Screening (movie_id, auditorium_id, dateofscreening) values (1,1,'2019-01-01 12:30:00');
insert into Screening (movie_id, auditorium_id, dateofscreening) values (2,1,'2019-01-01 15:00:00');
insert into Screening (movie_id, auditorium_id, dateofscreening) values (1,2,'2019-02-01 12:30:00');
insert into Screening (movie_id, auditorium_id, dateofscreening) values (3,1,'2019-02-01 12:30:00');

insert into Reservation(screening_id, normalseats, studentseats, price, firstname, lastname, phone) values (1, 1, 1, 2000,'First', 'Visitor', '+36 20 111 1111');
insert into Reservation(screening_id, normalseats, studentseats, price, firstname, lastname, phone) values (3, 2, 2, 4000,'Second', 'Visitor', '+36 20 222 2222');

insert into movie_categories(movies_id, categories_id) values (1,7);
insert into movie_categories(movies_id, categories_id) values (1,8);
insert into movie_categories(movies_id, categories_id) values (1,3);
insert into movie_categories(movies_id, categories_id) values (2,3);
insert into movie_categories(movies_id, categories_id) values (3,2);
insert into movie_categories(movies_id, categories_id) values (3,9);