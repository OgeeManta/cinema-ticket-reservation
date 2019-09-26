# cinema-ticket-reservation

Az alkalmazás egy mozi jegyfoglalásának illetve -vásárlásának a weben történő működését teszi lehetővé. A webes felületen keresztül látható a moziműsor és itt tudnak a felhasználók jegyet vásárolni/foglalni a különböző vetítésekre. A filmeket kiválasztva rövid leírást és adatokat kapunk az adott filmről, továbbá a vetítések időpontját. Ekkor lehetősége van a felhasznlónak helyet foglalnia, megadva a helyet magát(sor,oszlop) és személyes adatait(név,email cím, telefonszám).

Az adatbázis felépítése:
-6 tábla
  Movie : id(int),title(string),duration(time?),description(string),subtitle(bool)
  Auditorium : id(int),name(string),seats(int,int?)
  Screening : id(int),movie_id(int),auditorium_id(int),screening_start(time?)
  Reservation : id(int),screening_id(int),reserved_auditorium(int), reserved_seats(int,int)
  Visitor : id(int),reservation_id(int),name(string),phone_number(int),email(string)
  Employee : id(int),name(string) <-- szerepkörök miatt gondolom, de lehet ezt nem is kell az adatbázisban tárolni

Funkcionális követelmények:
  -

Nem funkcionális követelmények:
  - 

Szakterületi fogalomjegyzék:


Szerepkörök:
  - Felhasználók
  - Alkalmazottak
  - Rendszergazdák

