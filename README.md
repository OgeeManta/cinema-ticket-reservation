# cinema-ticket-reservation

Az alkalmazás egy mozi jegyfoglalásának a weben történő működését teszi lehetővé. A webes felületen keresztül látható a moziműsor és itt tudnak a felhasználók jegyet foglalni a különböző vetítésekre. A filmeket kiválasztva rövid leírást és adatokat kapunk az adott filmről, továbbá a vetítések időpontját. Ekkor lehetősége van a felhasználónak helyet foglalnia, megadva a helyet magát (sor, oszlop) és személyes adatait (név, email cím, telefonszám).

## Felhasználói felület:
#### Kezdőlap:
![](https://github.com/OgeeManta/cinema-ticket-reservation/blob/master/Kezd%C5%91lap.png?raw=true)

#### Film adatai:
![](https://github.com/OgeeManta/cinema-ticket-reservation/blob/master/Film_adatai.png?raw=true)

#### Foglalás:
![](https://github.com/OgeeManta/cinema-ticket-reservation/blob/master/Foglal%C3%A1s.png?raw=true)

## Szakterületi fogalomjegyzék:
•	*Film*: Felvett mozgókép, amelyet általában több ember (közönség) előtt bemutatnak.
•	*Mozi*: Filmvetítésre alkalmas épület vagy épületrész, amelyben közönség számára vetítenek filmeket.
•	*Terem*: Tágas helyiség, amely sok személy befogadására alkalmas, általában középületekben, kastélyokban, vagy más nagy épületekben található.
•	*Jegy*: Részvételre jogosító cédula; egy meghatározott alakú és szövegű papír- vagy kartonlapocska, amely egy személyt feljogosít egy rendezvényre való belépésre, egy előadás, bemutató vagy kiállítás megtekintésére.
•	*Foglalás*: Megállapodás (szállodával, étteremmel, színházzal, légitársasággal stb.) hogy tartsanak fenn számunkra helyet egy meghatározott jövőbeli időpontra.
•	*Trailer*: Bemutató reklámfilm; részletekből összevágott, néhány jelenetet bemutató ismertető, amely egy hamarosan műsorra kerülő filmet, műsort népszerűsít.

## Szerepkörök:
•	*Vendég*: a filmek adatait megtekintheti, de foglalni nem tud.
•	*Felhasználó*: megtekintheti a filmek adatait, és foglalni is tud.
•	*Admin*: módosíthatja a filmeket, és a foglalási adatokat.

## Funkcionális követelmények:
#### Felhasználói történetek: 

##### Felhasználó:
- Szeretnénk megnézi egy film adatait: Rákattintottunk a „Tovább a filmhez” gombra a választott film alatt. A választott film adatlapjára irányítódunk.
- Szeretnénk megadni a lefoglalni kívánt jegyek mennyiségét: Kiválasztottuk a számunkra megfelelő vetítési időpontot a táblázatból és a felugró ablakban kiválasztottuk a jegyek típusát és darabszámát. 
	- Ha be vagyunk jelentkezve, akkor átirányítódunk az oldalra, ahol a kiválasztott jegyek darabszámának függvényében tudunk kijelölni helyeket az adott terembe.
	- Ha nem vagyunk bejelentkezve, kapunk egy hibaüzenetet, hogy nem vagyunk bejelentkezve és egy felszólítást, hogy a továbblépéshez jelentkezzünk be.
- Szeretnénk bejelentkezni: Rákattintottunk a jobb felső sarokban lévő login gombra.
	- Ha nem vagyunk bejelentkezve és a helyes email-t és jelszót adtuk meg, akkor a rendszer bejelentkeztet a felhasználói fiókunkba.
	 - Ha nem vagyunk bejelentkezve, de nem a helyes email-t vagy jelszót adtuk meg, akkor kapunk egy hibaüzenetet, hogy rossz email-t vagy jelszót adtunk meg.
	 - Ha be vagyunk jelentkezve a felhasználói fiókunkba, akkor kapunk egy értesítést, hogy már be vagyunk jelentkezve.
- Szeretnénk kiválasztani a lefoglalni kívánt ülőhelyeket: Előzetesen kiválasztottuk, hogy mennyi jegyet szeretnénk foglalni és kiválasztottuk a konkrét helyeket, azzal, hogy rákattintunk és bejelöljük őket.
	- Ha olyan helyeket választottunk, amik nem foglaltak, akkor a foglalásunk rögzítésre kerül és kapunk egy értesítést a foglalási azonosítónkról.
	- Ha olyan helyet választottunk, ami már foglalt volt, akkor nem történik semmi.

##### Vendég:


## Nem funkcionális követelmények:
**termék követelmények:**
- hatékonyság: 
	- A program válasz ideje a felhasználó inputjára kevesebb, mint 0,5 mp legyen	.
	- A program használatához internet hozzáférés szükséges.
- megbízhatóság:
	- A felhasználói bevitel ellenőrzött, csak helyes bevitelt fogad el az alkalmazás
	- A funkciók mindig elérhetőek és végrehajtódnak akkor is, ha az adatok sérülnek.
- felhasználhatóság:
	- A program alapvetően minden felhasználó számára könnyen használható, legyen idősebb vagy fiatalabb kor tekintetében.
	- Fejlesztők számára is könnyen kezelhető a program bármiféle előzetes magyarázat nélkül.
	- A program funkcióinak megértéséhez nem szükséges külső forrás pl. kézikönyv.
	- A látáskorlátozott felhasználóknak nincs biztosítva a hangos felolvasása a funkcióknak, így nekik nem ajánlott használni.
- működési:
	- A programot egy nap folyamán többször is elindíthatják, akár óránként is, de minden használat végén a felhasználó kilép a programból.
	- Egyszerre több felhasználó tudja igénybe venni a programot több gépen.
	- Az átlagos használati idő: 5-20 perc.
	- A használati idő alatt a program funkciói folyamatosan igénybe vannak véve.
**külső követelmények:**
- A fejlesztők az alábbiakban ismertetik adatkezelési elveiket. Adatkezelési alapelveik összhangban vannak az adatvédelemről szóló jogszabályokkal:
	- 1998.évi XIX. törvény – a büntetőeljárásról
	- 2003.évi C. törvény – az elektronikus hírközlésről
	- 2011.évi CXII. törvény – az információs önrendelkezési jogról és az információszabadságról 
- Személyes adat csak megfelelő tájékoztatáson alapuló beleegyezéssel kezelhető.
- Az érintettet egyértelműen és részletesen tájékoztatni kell az adatai kezelésével kapcsolatos minden tényről.
- Harmadik félnek nem ad ki személyes és bizalmas adatokat a program.
- A begyűjtött adatok a felhasználótól titkosan vannak kezelve, és a program használata után azonnal törlődnek, nem kerülnek mentésre.
- Az adatokért megtesz minden olyan technikai, biztonsági és szervezési intézkedést, mely az adatok biztonságát garantálja.
- A felhasználó kérhet tájékoztatást a személyes adatai kezeléséről, illetve kérheti az adatok helyesbítését, valamint törlését.
- A felhasználó jogainak megsértése esetén a fejlesztők ellen bírósághoz fordulhat.

Az adatbázis felépítése:
6 tábla
  - Movie : id(int),title(string),duration(time?),description(string),subtitle(bool)
  - Auditorium : id(int),name(string),seats(int,int?)
  - Screening : id(int),movie_id(int),auditorium_id(int),screening_start(time?)
  - Reservation : id(int),screening_id(int),reserved_auditorium(int), reserved_seats(int,int)
  - Visitor : id(int),reservation_id(int),name(string),phone_number(int),email(string)
  - Employee : id(int),name(string) <-- szerepkörök miatt gondolom, de lehet ezt nem is kell az adatbázisban tárolni

