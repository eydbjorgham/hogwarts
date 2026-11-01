# Pseudokode

## GET /houses – hent alle husene
- Spørg databasen efter alle huse
- Send listen tilbage med status 200
- Går noget galt, send 500

GET /students, GET /teacher og GET /courses virker på samme måde.

## GET /houses/:id – hent et hus
- Tag id'et fra URL'en
- Spørg databasen efter huset med det id
- Findes huset, send det tilbage med 200
- Findes det ikke, send 404
- Går noget galt, send 500

GET /students/:id, GET /teacher/:id og GET /courses/:id virker på samme måde.

## POST /students – opret en elev
- Tag navn og hus fra body
- Bed databasen om at gemme den nye elev
- Send 201 tilbage, så man kan se at den er oprettet
- Går noget galt, send 500

POST /teacher virker på samme måde. 
POST /courses er næsten ens, men tager navn og lærer i stedet for navn og hus.

## PUT /students/:id – ret en elev
- Tag id'et fra URL'en
- Tag det nye navn og hus fra body
- Bed databasen om at opdatere eleven
- Blev der ikke ændret noget eller eleven findes ikke, send 404
- Ellers send 200
- Går noget galt, send 500

PUT /teacher/:id og PUT /courses/:id virker på samme måde.

## DELETE /students/:id – slet en elev
- Tag id'et fra URL'en
- Bed databasen om at slette eleven
- Blev der ikke slettet noget (eleven findes ikke), send 404
- Ellers send 204 (lykkedes, men intet indhold)
- Går noget galt, send 500

DELETE /teacher/:id og DELETE /courses/:id virker på samme måde.

## PUT /courses/:courseId/teacher – skift lærer på et fag
- Tag fagets id fra URL'en
- Tag lærerens id fra body
- Bed databasen om at sætte den nye lærer på faget
- Findes faget ikke, send 404
- Ellers send 200
- Går noget galt, send 500

## POST /courses/:courseId/students/:studentId – tilføj en elev til et fag
- Tag fagets id og elevens id fra URL'en
- Bed databasen om at lave en ny række i courses_students
- Send 201
- Går noget galt, send 500

## DELETE /courses/:courseId/students/:studentId – fjern en elev fra et fag
- Tag fagets id og elevens id fra URL'en
- Bed databasen om at slette rækken i courses_students
- Blev der ikke slettet noget, send 404
- Ellers send 204
- Går noget galt, send 500