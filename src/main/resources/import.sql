insert into user (username, password, enabled, role) values ('user1', '$2a$04$YDiv9c./ytEGZQopFfExoOgGlJL6/o0er0K.hiGb5TGKHUL8Ebn..', true, 'ROLE_ADMIN');

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


insert into Movie (title, description, runtime) values ('Lion King', 'It is a very good movie', 110);
insert into Movie (title, description, runtime) values ('The Action Movie', 'It is even a better movie', 123);
insert into Movie (title, description, runtime) values ('Unknown Movie', 'This movie is not being aired', 0);

insert into Screening (movie_id, auditorium_id, dateofscreening) values (1,1,'2019-01-01 12:30:00');
insert into Screening (movie_id, auditorium_id, dateofscreening) values (2,1,'2019-01-01 15:00:00');
insert into Screening (movie_id, auditorium_id, dateofscreening) values (1,2,'2019-02-01 12:30:00');

insert into Reservation(screening_id, normalseats, studentseats, price, fromseat, firstname, lastname, phone) values (1, 2, 2, 1000, 1,'First', 'Visitor', '06-20-111-1111');

insert into movie_categories(movies_id, categories_id) values (1,7);
insert into movie_categories(movies_id, categories_id) values (1,8);
insert into movie_categories(movies_id, categories_id) values (1,3);
insert into movie_categories(movies_id, categories_id) values (2,3);
insert into movie_categories(movies_id, categories_id) values (3,2);
insert into movie_categories(movies_id, categories_id) values (3,9);